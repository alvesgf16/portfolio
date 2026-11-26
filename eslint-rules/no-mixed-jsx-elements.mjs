// Clean Code Ch.6 / Ch.11: a component renders native HTML or composes custom
// components, not both. Nested render callbacks (e.g. `.map(...)`) belong to
// the enclosing component; nested named components get their own frame.

const COMPONENT_NAME_PATTERN = /^[A-Z]/;
const INTRINSIC_NAME_PATTERN = /^[a-z]/;

const noMixedJsxElements = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow a component from rendering native HTML elements and custom components together.",
    },
    schema: [],
    messages: {
      mixed:
        'Component "{{name}}" mixes native elements ({{intrinsic}}) with custom components ({{custom}}). Extract one group into its own component.',
    },
  },
  create(context) {
    const frames = [];

    return {
      FunctionDeclaration: (node) => enterFunction(frames, node),
      FunctionExpression: (node) => enterFunction(frames, node),
      ArrowFunctionExpression: (node) => enterFunction(frames, node),
      "FunctionDeclaration:exit": (node) => exitFunction(context, frames, node),
      "FunctionExpression:exit": (node) => exitFunction(context, frames, node),
      "ArrowFunctionExpression:exit": (node) =>
        exitFunction(context, frames, node),
      JSXOpeningElement: (node) => recordElement(context, frames, node),
    };
  },
};

function enterFunction(frames, node) {
  const name = componentNameOf(node);

  if (name !== undefined && COMPONENT_NAME_PATTERN.test(name)) {
    frames.push({ node, name, intrinsic: new Set(), custom: new Set() });
  }
}

function componentNameOf(node) {
  return node.type === "FunctionDeclaration"
    ? node.id?.name
    : variableNameOf(node);
}

function variableNameOf(node) {
  const { parent } = node;

  if (parent?.type !== "VariableDeclarator" || parent.init !== node) {
    return undefined;
  }

  return parent.id.type === "Identifier" ? parent.id.name : undefined;
}

function exitFunction(context, frames, node) {
  if (frames.at(-1)?.node !== node) {
    return;
  }

  const frame = frames.pop();

  if (frame.intrinsic.size > 0 && frame.custom.size > 0) {
    context.report({
      node,
      messageId: "mixed",
      data: {
        name: frame.name,
        intrinsic: [...frame.intrinsic].join(", "),
        custom: [...frame.custom].join(", "),
      },
    });
  }
}

function recordElement(context, frames, node) {
  const frame = frames.at(-1);
  const kind = elementKindOf(node.name);

  if (frame === undefined || kind === null) {
    return;
  }

  const tagName = context.sourceCode.getText(node.name);

  frame[kind].add(`<${tagName}>`);
}

function elementKindOf(nameNode) {
  if (nameNode.type === "JSXMemberExpression") {
    return "custom";
  }

  if (nameNode.type !== "JSXIdentifier" || nameNode.name === "Fragment") {
    return null;
  }

  return INTRINSIC_NAME_PATTERN.test(nameNode.name) ? "intrinsic" : "custom";
}

export default noMixedJsxElements;
