import React from "react"
// Styled Components
import styled from "styled-components"

const TextFooter = styled.p`
  text-transform: uppercase;
  border-bottom: #4a4a4a 3px solid;
  display: table;
`

export const Footer = () => (
  <footer
    className="is-flex is-column is-center-vertical has-text-centered"
    style={{
      padding: "2.5rem",
      background: "linear-gradient(180deg, #F9D573 0%, #FCD670 100%)",
    }}
  >
    © {new Date().getFullYear()}, This website was craft by Matthew Atkinson
    <br />
    <TextFooter>Powered By</TextFooter>
    <span>
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
  </footer>
)
