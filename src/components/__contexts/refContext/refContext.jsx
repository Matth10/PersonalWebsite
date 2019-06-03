import React from "react"

export const RefContext = React.createContext()

export const RefProvider = ({ children }) => {
  const refFirstPage = React.useRef()
  const refAboutMe = React.useRef()
  const refMyTimeline = React.useRef()
  const refFooter = React.useRef()

  return (
    <RefContext.Provider
      value={{ refFirstPage, refAboutMe, refMyTimeline, refFooter }}
    >
      {children}
    </RefContext.Provider>
  )
}
