import React from "react"
// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FirstPage,
  AboutMe,
  MyTimeline,
  MySkills,
  Icon,
  Footer,
  Image,
  RefProvider,
} from "../components"

const images = {
  adventure: require("../images/adventure.svg"),
}

const IndexPage = () => (
  <RefProvider>
    <Layout>
      <SEO title="Matthew's Website" />
      <FirstPage />
      <AboutMe />
      <MySkills />
      <MyTimeline />
      <div
        className="is-flex is-column is-center-vertical"
        style={{ paddingTop: "5rem" }}
      >
        <Image
          altImage={"adventure"}
          imgSource={images.adventure}
          style={{ height: "auto", width: "300px" }}
        />
      </div>
      <Footer />
    </Layout>
  </RefProvider>
)

export default IndexPage
