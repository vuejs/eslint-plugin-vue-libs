module.exports = {
  meta: {
    docs: {
      description: 'Disallow use of async functions (for codebases targeting Node 6.x)',
      category: 'Custom',
      recommended: false
    },
    schema: []
  },

  create (context) {
    function report (node) {
      if (node.async) {
        context.report({
          node,
          message: "async functions are disallowed for Node 6.x compatibility."
        })
      }
    }

    return {
      FunctionDeclaration: report,
      FunctionExpression: report,
      ArrowFunctionExpression: report
    }
  }
}
