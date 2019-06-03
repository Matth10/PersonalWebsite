import React from "react"
import PropTypes from "prop-types"

export const Button = ({ children, className, onClick, to }) => {
  return to ? (
    <a className={`button ${className}`} href={to}>
      {children}
    </a>
  ) : (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: "",
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}
