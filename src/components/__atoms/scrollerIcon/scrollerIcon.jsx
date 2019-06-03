import React from "react"
// Styled component
import styled, { keyframes } from "styled-components"

const ScrollContainer = styled.svg`
  max-width: 2.5rem;
  width: 100%;
  height: auto;
`

const ScrollLink = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`

const ScrollAnimation = keyframes`
  0%,
  20% {
    transform: translateY(0) scaleY(1);
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(36px) scaleY(2);
    opacity: 0.01;
  }
`

const Icon = styled.rect.attrs({
  stroke: "#42dff4",
  strokeWidth: "4",
})``

const Scroll = styled.circle`
  animation-name: ${ScrollAnimation};
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(0.65, -0.55, 0.25, 1.5);
  animation-iteration-count: infinite;
  transform-origin: 50% 20.5px;
  will-change: transform;
  fill: #42dff4;
`

export const ScrollerIcon = ({ onClick }) => (
  <ScrollLink onClick={onClick}>
    <ScrollContainer xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 130">
      <g fill="none">
        <Icon width="72" height="118" x="1.5" y="1.5" rx="36" />
        <Scroll cx="36.5" cy="31.5" r="4.5" />
      </g>
    </ScrollContainer>
  </ScrollLink>
)
