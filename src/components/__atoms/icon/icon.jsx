// React
import React from "react"

export const Icon = ({ className = "", name, type, ...rest }) => {
  switch (type) {
    case "bold": {
      return (
        <span className={"icon " + className} {...rest}>
          <i className={`fas ${name}`} />
        </span>
      )
    }
    case "light": {
      return (
        <span className={"icon " + className} {...rest}>
          <i className={`fal ${name}`} />
        </span>
      )
    }
    case "normal": {
      return (
        <span className={"icon " + className} {...rest}>
          <i className={`far ${name}`} />
        </span>
      )
    }
    default: {
      return (
        <span className={"icon " + className} {...rest}>
          <i className={`fab ${name}`} />
        </span>
      )
    }
  }
}
