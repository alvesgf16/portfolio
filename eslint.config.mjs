import { readdirSync } from "node:fs";
import path from "node:path";

import vitest from "@vitest/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unicorn from "eslint-plugin-unicorn";

import noMixedJsxElements from "./eslint-rules/no-mixed-jsx-elements.mjs";

const testFileGlobs = ["src/**/*.{spec,test,harness}.{ts,tsx}"];

const componentFolders = readdirSync(
  path.join(import.meta.dirname, "src/components"),
  { withFileTypes: true },
)
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const sharedComponentFolder = "shared";

function layerBan(layers, message) {
  return {
    group: layers.flatMap((layer) => [
      `@/${layer}`,
      `@/${layer}/*`,
      `**/${layer}`,
      `**/${layer}/**`,
      `../${layer}`,
      `../${layer}/**`,
    ]),
    message,
  };
}

function peerFolderBan(folder) {
  const peers = componentFolders.filter(
    (peer) => peer !== folder && peer !== sharedComponentFolder,
  );

  return {
    group: peers.flatMap((peer) => [
      `@/components/${peer}`,
      `@/components/${peer}/**`,
      `../${peer}`,
      `../${peer}/**`,
    ]),
    message: `Components/${folder} must not import peer feature folders; move shared code to components/${sharedComponentFolder}.`,
  };
}

function restrictImports(patterns) {
  return { "no-restricted-imports": ["error", { patterns }] };
}

const lintedLineCount = { skipBlankLines: true, skipComments: true };

// Clean Code rules shared by TypeScript sources and lint rule helpers
const sharedCleanCodeRules = {
  // Ch.2: Meaningful Names
  "id-length": ["error", { min: 2, exceptions: ["_", "i", "j", "k"] }],
  "id-denylist": ["error", "temp", "tmp", "foo", "bar", "baz", "obj", "arr"],
  // Ch.3: Functions — book metrics (strict on logic modules)
  complexity: ["error", 5],
  "max-depth": ["error", 2],
  "max-params": ["error", 3],
  "max-lines-per-function": ["error", { max: 20, ...lintedLineCount }],
  // Ch.4: Comments — allow TODO; ban stale/urgent markers
  "no-warning-comments": [
    "error",
    { terms: ["fixme", "xxx", "hack"], location: "start" },
  ],
  // Ch.10: Classes
  "max-lines": ["error", { max: 100, ...lintedLineCount }],
  // Ch.17: Smells — MIT unicorn + core (not LGPL sonarjs)
  "no-nested-ternary": "error",
  "no-useless-return": "error",
  "unicorn/no-lonely-if": "error",
  "unicorn/no-negated-condition": "error",
  "unicorn/prefer-array-find": "error",
  "unicorn/prefer-includes": "error",
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      unicorn,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Clean Code Ch.5: Import order blocks
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^\\u0000"],
            ["^node:"],
            ["^@?\\w"],
            ["^@/content"],
            ["^@/components"],
            ["^@/app"],
            ["^@/lib"],
            ["^@/types"],
            ["^\\."],
            ["^.+\\.css$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      ...sharedCleanCodeRules,
      // Clean Code Ch.2: Meaningful Names
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "variable",
          format: ["camelCase", "UPPER_CASE", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "property",
          format: ["camelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "objectLiteralProperty",
          modifiers: ["requiresQuotes"],
          format: null,
        },
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "method",
          format: ["camelCase"],
          leadingUnderscore: "allow",
          trailingUnderscore: "forbid",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: false,
          },
        },
        {
          selector: "enumMember",
          format: ["PascalCase", "UPPER_CASE"],
        },
        {
          selector: "import",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
      ],
      // Clean Code Ch.3: Functions — named parameter object types
      "no-restricted-syntax": [
        "error",
        {
          selector:
            ':function > Identifier[typeAnnotation.typeAnnotation.type="TSTypeLiteral"]',
          message:
            "Extract this parameter object type to a named type or interface.",
        },
        {
          selector:
            ':function > ObjectPattern[typeAnnotation.typeAnnotation.type="TSTypeLiteral"]',
          message:
            "Extract this parameter object type to a named type or interface.",
        },
      ],
      // Clean Code Ch.7 + Ch.13: Error Handling / async
      "no-empty": "error",
      "no-throw-literal": "error",
      "prefer-promise-reject-errors": "error",
      "@typescript-eslint/only-throw-error": "error",
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/require-await": "error",
      // Clean Code Ch.10: Classes
      "max-classes-per-file": ["error", 1],
      // Clean Code Ch.17: Smells — extra unicorn rules for TypeScript sources
      "unicorn/no-useless-fallback-in-spread": "error",
      "unicorn/no-useless-length-check": "error",
      "unicorn/no-useless-spread": "error",
    },
  },
  // Clean Code Ch.3 exception-candidate: React/Next section JSX
  {
    files: ["**/*.tsx"],
    rules: {
      "max-lines-per-function": [
        "error",
        { max: 60, skipBlankLines: true, skipComments: true },
      ],
      complexity: ["error", 8],
    },
  },
  // Clean Code Ch.9: dual-standard size offs when specs appear
  {
    files: ["**/*.{spec,test,harness}.{ts,tsx}"],
    rules: {
      complexity: "off",
      "max-depth": "off",
      "max-params": "off",
      "max-lines-per-function": "off",
      "max-lines": "off",
      "max-classes-per-file": "off",
    },
  },
  // Vitest runner rules for spec, test, and harness files
  {
    files: ["**/*.{spec,test,harness}.{ts,tsx}"],
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
  // Clean Code Ch.8/11: content is a leaf data layer; app composes it into components
  {
    files: ["src/content/**/*.{ts,tsx}"],
    rules: restrictImports([
      layerBan(
        ["components", "app"],
        "Content is a leaf data layer; do not import UI or app routes.",
      ),
    ]),
  },
  // Clean Code Ch.8/11: lib sits below content/app/components; types sits at the bottom
  {
    files: ["src/lib/**/*.{ts,tsx}"],
    rules: restrictImports([
      layerBan(
        ["content", "components", "app", "types/ui"],
        "Lib is a leaf helper layer; do not import content, UI, UI contracts, or app routes.",
      ),
    ]),
  },
  {
    files: ["src/types/**/*.{ts,tsx}"],
    rules: restrictImports([
      layerBan(
        ["lib", "content", "components", "app"],
        "Types is the lowest leaf layer; do not import lib, content, UI, or app routes.",
      ),
    ]),
  },
  {
    files: ["src/types/domain/**/*.{ts,tsx}"],
    rules: restrictImports([
      layerBan(
        ["lib", "content", "components", "app"],
        "Types is the lowest leaf layer; do not import lib, content, UI, or app routes.",
      ),
      {
        group: [
          "@/types/ui",
          "@/types/ui/*",
          "@/types/ui/**",
          "../ui",
          "../ui/*",
          "../ui/**",
        ],
        message: "Domain types must not import UI contracts.",
      },
    ]),
  },
  // Clean Code Ch.8/11: files placed directly under src/components
  // (outside any feature folder) obey the same layer bans
  {
    files: ["src/components/*.{ts,tsx}"],
    rules: restrictImports([
      layerBan(
        ["content", "app"],
        "Components must not import content or app; app composes and passes props.",
      ),
    ]),
  },
  // Clean Code Ch.8/11: components receive content as props from app;
  // feature folders only share code through `shared`
  ...componentFolders.map((folder) => ({
    files: [`src/components/${folder}/**/*.{ts,tsx}`],
    rules: restrictImports([
      layerBan(
        ["content", "app"],
        "Components must not import content or app; app composes and passes props.",
      ),
      peerFolderBan(folder),
    ]),
  })),

  // Clean Code Ch.6/11: a component renders native HTML or custom components, not both
  {
    files: ["src/app/**/*.tsx", "src/components/**/*.tsx"],
    ignores: testFileGlobs,
    plugins: {
      local: { rules: { "no-mixed-jsx-elements": noMixedJsxElements } },
    },
    rules: {
      "local/no-mixed-jsx-elements": "error",
    },
  },

  // Clean Code Ch.3/10/17: lint rule helpers follow the same metrics as .ts modules
  {
    files: ["eslint-rules/**/*.mjs"],
    plugins: {
      unicorn,
    },
    rules: sharedCleanCodeRules,
  },

  // Clean Code Ch.5: Prettier wins style conflicts — keep last
  eslintConfigPrettier,
]);

export default eslintConfig;
