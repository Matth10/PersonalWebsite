// React
import React from "react"
// Component
import { Image } from "../../../components"
// Animation
import Fade from "react-reveal/Fade"

export const Card = ({ children, iconSource, altImage, ...rest }) => (
  <Fade bottom>
    <div {...rest}>
      <Image imgSource={iconSource} altImage={altImage} className="is-64x64" />
      {children}
    </div>
  </Fade>
)

const Title = ({ children, className, ...rest }) => (
  <div className={"title is-size-4 is-spaced " + className} {...rest}>
    {children}
  </div>
)
const Text = ({ children, ...rest }) => <p {...rest}>{children}</p>

Card.Title = Title
Card.Text = Text
