export const getResponsive = width => {
  if (width <= 1100 && width > 411) {
    return "tablet"
  }
  if (width <= 411) {
    return "mobile"
  }
  return "desktop"
}

export const getResponsiveSizeButton = width => {
  const device = getResponsive(width)
  switch (device) {
    case "tablet":
      return "is-medium"
    case "mobile":
      return "is-small"
    case "desktop":
      return "is-large"
    default:
      return "is-medium"
  }
}

export const getResponsiveSizeImage = width => {
  const device = getResponsive(width)
  switch (device) {
    case "tablet":
      return "is-150x150"
    case "mobile":
      return "is-100x100"
    case "desktop":
      return "is-178x178"
    default:
      return "is-178x178"
  }
}
