import React from "react"

export const Timeline = ({ children, className }) => (
  <div className={"timeline " + className}>{children}</div>
)

const Header = ({ children, className }) => (
  <div className={"timeline-header " + className}>{children}</div>
)

const Item = ({ children, className }) => (
  <div className={"timeline-item " + className}>{children}</div>
)

const Content = ({ children, className }) => (
  <div className={"timeline-content " + className}>{children}</div>
)

const Marker = ({ children, className }) => (
  <div className={"timeline-marker " + className}>{children}</div>
)

Timeline.Header = Header
Timeline.Item = Item
Timeline.Content = Content
Timeline.Marker = Marker
