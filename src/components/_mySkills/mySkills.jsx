// React
import React from "react"
// Components
import { Columns, Column, Box, Card } from "../../components"
// Animation
import Fade from "react-reveal/Fade"

const images = {
  frontend: require("../../images/frontend.svg"),
  development: require("../../images/development.svg"),
  backend: require("../../images/backend.svg"),
}

export const MySkills = () => (
  <section className="mySkills--position">
    <div className="container">
      <Box
        className="has-background-white-bis"
        style={{ borderRadius: "50px", padding: "0" }}
      >
        <Columns className="has-text-centered">
          <Column style={{ padding: "2.5rem" }}>
            <Card
              iconSource={images.frontend}
              altImage={"fontend"}
              className="is-flex is-column is-center-vertical"
            >
              <Card.Title style={{ marginTop: "15px" }}>Frontend</Card.Title>
              <Card.Text>
                Javascript - Typescript
                <br /> ReactJS - Redux
                <br /> Angular
                <br /> CSS - Sass
                <br /> HTML
              </Card.Text>
            </Card>
          </Column>
          <Column
            style={{
              borderLeft: "1px solid #E6ECF8",
              borderRight: "1px solid #E6ECF8",
              padding: "2.5rem",
            }}
          >
            <Card
              iconSource={images.development}
              altImage={"development"}
              className="is-flex is-column is-center-vertical"
            >
              <Card.Title style={{ marginTop: "15px" }}>Development</Card.Title>
              <Card.Text>
                Agile methodes <br />
                Git <br />
                Testing <br />
                Npm, Webpack
              </Card.Text>
            </Card>
          </Column>
          <Column style={{ padding: "2.5rem" }}>
            <Card
              iconSource={images.backend}
              altImage={"backend"}
              className="is-flex is-column is-center-vertical"
            >
              <Card.Title style={{ marginTop: "15px" }}>Backend</Card.Title>
              <Card.Text>
                Node Js
                <br />
                Api : RESTful - GraphQL <br />
                Docker <br />
                MongoDB, SQL
              </Card.Text>
            </Card>
          </Column>
        </Columns>
      </Box>
    </div>
  </section>
)
