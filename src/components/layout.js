// React
import React from "react"
import PropTypes from "prop-types"
// Gatsby
import { StaticQuery, graphql } from "gatsby"
// CSS
import "../styles/main.scss"
import "@fortawesome/fontawesome-free/css/all.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
