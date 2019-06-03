// React
import React from "react"
// Components
import { Image, RefContext } from "../../components"
// Styled Components
import styled from "styled-components"

const img = require("../../images/profil.svg")

const ContainerAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -150px;
  padding-bottom: 7rem;
`

export const AboutMe = () => {
  const { refAboutMe } = React.useContext(RefContext)
  return (
    <section
      className="has-text-centered"
      style={{
        padding: "3rem",
        background: "linear-gradient(180deg, #96C5FD 0%, #8CBEF6 100%)",
      }}
      ref={refAboutMe}
    >
      <ContainerAboutMe>
        <Image alt="profil" imgSource={img} style={{ width: "178px" }} />
        <h5
          style={{ marginTop: "1rem" }}
          className="title is-4 has-text-white-bis"
        >
          About Me
        </h5>
        <p className="has-text-white-bis is-size-5">
          Passionate about new technologies since my childhood, I decided to
          start my training at the ESIR engineering school, in the Internet of
          Things, security, smart cities. During these 5 years, I did
          internships in different companies as a web developer. These
          professional experiences allowed me to acquire good practices in
          application development, but also teamwork and communication.
        </p>
      </ContainerAboutMe>
    </section>
  )
}
