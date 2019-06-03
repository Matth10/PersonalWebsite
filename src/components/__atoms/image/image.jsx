// React
import React from "react"

export const Image = ({ imgSource, altImage, className, ...rest }) => (
  <figure className={"image " + className} {...rest}>
    <img src={imgSource} alt={altImage} />
  </figure>
)
