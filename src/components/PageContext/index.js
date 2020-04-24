import React, { useContext } from "react"

const PageContext = React.createContext({ pageContext: null })

export function PageContextProvider(props) {
  const { pageContext, children } = props

  return (
    <PageContext.Provider value={{ pageContext }}>
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const { pageContext } = useContext(PageContext)
  return pageContext
}
