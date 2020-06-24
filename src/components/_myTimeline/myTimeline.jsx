// React
import React from "react"
// Components
import { Timeline, Tag } from "../../components"
// Animation
import Fade from "react-reveal/Fade"

export const MyTimeline = () => (
  <section>
    <Fade right>
      <div
        className="title is-3 has-text-centered"
        style={{ marginBottom: "7rem" }}
      >
        Works & Education
      </div>
    </Fade>
    <Timeline className="is-centered">
      <Timeline.Header>
        <Tag
          className="is-rounded is-large has-text-weight-semibold has-text-white-bis"
          style={{
            background: "linear-gradient(180deg, #87BDFC 0%, #8CBEF6 100%)",
          }}
        >
          Start
        </Tag>
      </Timeline.Header>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">March 2016</p>
          <p>Humanitarian raid 4L Trophy</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">September 2016</p>
          <p>Starting Superior Engineering School of Rennes (ESIR)</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Header>
        <Tag
          className="is-rounded is-large has-text-weight-semibold has-text-white-bis"
          style={{
            background: "linear-gradient(180deg, #A2C2DA 0%, #A6C3D5 100%)",
          }}
        >
          2017
        </Tag>
      </Timeline.Header>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">June 2017, 1 month</p>
          <p>Research Scientist, Internship at Inria</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Header>
        <Tag
          className="is-rounded is-large has-text-weight-semibold has-text-white-bis"
          style={{
            background: "linear-gradient(180deg, #C0C8B5 0%, #C4C9B1 100%)",
          }}
        >
          2018
        </Tag>
      </Timeline.Header>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">June 2018, 3 months</p>
          <p>Software Engineer, Intership at Smartmoov</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">September 2018, 4 months</p>
          <p>Software Engineer, Co-op programm at Tech4Race</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Header>
        <Tag
          className="is-rounded is-large has-text-weight-semibold has-text-white-bis"
          style={{
            background: "linear-gradient(180deg, #E4D08A 0%, #E7D187 100%)",
          }}
        >
          2019
        </Tag>
      </Timeline.Header>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">January 2019, 6 months</p>
          <p>Software Engineer, Co-op programm at Zenika</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">September 2019</p>
          <p>Graduate from ESIR</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Marker />
        <Timeline.Content>
          <p className="heading">October 2019, present</p>
          <p>Frontend engineer, at OllieOrder</p>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Header>
        <Tag
          className="is-rounded is-large has-text-weight-semibold has-text-white-bis"
          style={{
            background: "linear-gradient(180deg, #F9D573 0%, #FCD670 100%)",
          }}
        >
          To be continued...
        </Tag>
      </Timeline.Header>
    </Timeline>
  </section>
)
