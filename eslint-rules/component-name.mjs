// Clean Code Ch.2: a component's name comes from its declaration, even when the
// function is wrapped (memo, forwardRef) or exported anonymously.

const COMPONENT_NAME_PATTERN = /^[A-Z]/;
const DEFAULT_EXPORT_NAME = "default export";
const WRAPPER_NAMES = new Set(["memo", "forwardRef"]);

export function componentNameOf(node) {
  if (node.type === "FunctionDeclaration") {
    return node.parent?.type === "ExportDefaultDeclaration"
      ? DEFAULT_EXPORT_NAME
      : node.id?.name;
  }

  return declaredNameOf(wrappedFunctionRoot(node));
}

export function isComponentName(name) {
  if (name === undefined) {
    return false;
  }

  return name === DEFAULT_EXPORT_NAME || COMPONENT_NAME_PATTERN.test(name);
}

function wrappedFunctionRoot(node) {
  const { parent } = node;

  return isWrapperCall(parent) ? wrappedFunctionRoot(parent) : node;
}

function isWrapperCall(node) {
  return (
    node?.type === "CallExpression" &&
    WRAPPER_NAMES.has(calleeNameOf(node.callee))
  );
}

function calleeNameOf(callee) {
  return callee.type === "Identifier" ? callee.name : callee.property?.name;
}

function declaredNameOf(node) {
  if (node.parent?.type === "ExportDefaultDeclaration") {
    return DEFAULT_EXPORT_NAME;
  }

  return variableNameOf(node);
}

function variableNameOf(node) {
  const { parent } = node;

  if (parent?.type !== "VariableDeclarator" || parent.init !== node) {
    return undefined;
  }

  return parent.id.type === "Identifier" ? parent.id.name : undefined;
}
