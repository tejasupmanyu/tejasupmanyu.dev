var React = require("react")

// Hack, to reorder the helmet components as first in <head> tag
exports.onPreRenderHTML = function onPreRenderHTML({
  getHeadComponents,
  replaceHeadComponents,
}) {
  const headComponents = getHeadComponents()
  headComponents.sort((a, b) => {
    if (a.type === b.type || (a.type !== "style" && b.type !== "style")) {
      return 0
    }

    if (a.type === "style") {
      return 1
    } else if (b.type === "style") {
      return -1
    }

    return 0
  })

  replaceHeadComponents(headComponents)
}
