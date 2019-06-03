import React from "react"
// Components
import { Button, RefContext, Image, ScrollerIcon, Icon } from "../../components"
// Hooks
import { useScroll, useWindowSize } from "../../hooks"
// Animation
import Fade from "react-reveal/Fade"
// Styled Components
import styled from "styled-components"

const ContainerFirstPage = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const ContainerFirstPageText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 7%;
  @media (max-width: 1100px) {
    padding-left: 0;
  }
`

const TitleFirstPage = styled.h1`
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
  font-size: 70px;
  @media (max-width: 1100px) {
    font-size: 50px;
  }
  @media (max-width: 411px) {
    font-size: 45px;
  }
`

const SubtitleTitleFirstPage = styled.p`
  word-break: break-word;
  color: #4a4a4a;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  font-size: 40px;
  @media (max-width: 1100px) {
    font-size: 30px;
  }
  @media (max-width: 411px) {
    font-size: 25px;
  }
`

export const FirstPage = () => {
  const { refAboutMe } = React.useContext(RefContext)
  const windowSize = useWindowSize()

  const scrollToAboutMe = () => {
    if (refAboutMe && refAboutMe.current) {
      useScroll(refAboutMe, refAboutMe.current.offsetTop - 178 / 2)
    }
  }
  return (
    <section style={{ padding: "0 0 20em 0" }}>
      <ContainerFirstPage>
        <Image imgSource={require("../../images/surf.svg")} />
        <ContainerFirstPageText>
          <Fade left>
            <TitleFirstPage>Hi!</TitleFirstPage>
            <SubtitleTitleFirstPage>
              I'm Matthew Atkinson
              <br /> a Frontend Developer
            </SubtitleTitleFirstPage>
            <div
              className={`buttons ${
                windowSize.width && windowSize.width <= 1100
                  ? " is-centered"
                  : ""
              }`}
            >
              <Button
                className={`is-primary ${
                  windowSize.width && windowSize.width <= 1100
                    ? "is-medium"
                    : "is-large"
                }`}
                to="https://github.com/Matth10"
              >
                <Icon name="fa-lg fa-github" className="is-large" />
                <span>Github</span>
              </Button>
              <Button
                className={`is-primary ${
                  windowSize.width && windowSize.width <= 1100
                    ? "is-medium"
                    : "is-large"
                }`}
                to="https://www.linkedin.com/in/matthew-atkinson-b350a4130/?locale=en_US"
              >
                <Icon name="fa-lg fa-linkedin-in" className="is-large" />
                <span>Linkedin</span>
              </Button>
            </div>
          </Fade>
        </ContainerFirstPageText>
      </ContainerFirstPage>
      <ScrollerIcon onClick={scrollToAboutMe} />
    </section>
  )
}
