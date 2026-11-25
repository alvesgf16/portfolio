import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";

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
    },
    rules: {
      // Clean Code Ch.2: Meaningful Names
      "id-length": [
        "error",
        {
          min: 2,
          exceptions: ["_", "i", "j", "k"],
        },
      ],
      "id-denylist": [
        "error",
        "temp",
        "tmp",
        "foo",
        "bar",
        "baz",
        "obj",
        "arr",
      ],
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
      // Clean Code Ch.3: Functions — book metrics (strict on logic modules)
      complexity: ["error", 5],
      "max-depth": ["error", 2],
      "max-params": ["error", 3],
      "max-lines-per-function": [
        "error",
        { max: 20, skipBlankLines: true, skipComments: true },
      ],
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
      // Clean Code Ch.4: Comments — allow TODO; ban stale/urgent markers
      "no-warning-comments": [
        "error",
        { terms: ["fixme", "xxx", "hack"], location: "start" },
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
      "max-lines": [
        "error",
        { max: 100, skipBlankLines: true, skipComments: true },
      ],
      // Clean Code Ch.17: Smells — MIT unicorn + core (not LGPL sonarjs)
      "no-nested-ternary": "error",
      "no-useless-return": "error",
      "unicorn/no-lonely-if": "error",
      "unicorn/no-negated-condition": "error",
      "unicorn/no-useless-fallback-in-spread": "error",
      "unicorn/no-useless-length-check": "error",
      "unicorn/no-useless-spread": "error",
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-includes": "error",
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
  // Clean Code Ch.5: Prettier wins style conflicts — keep last
  eslintConfigPrettier,
]);

export default eslintConfig;
