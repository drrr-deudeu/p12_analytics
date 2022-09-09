import { createContext, useState } from "react"

/**
 *
 * React Context
 *
 */
export const DataContext = createContext()
/**
 * React component allowing to share the isMockData boolean value for all pages.
 * @param {JSX.Element} param0
 */
export const DataProvider = ({ children }) => {
  const [isMockdata, setIsMockData] = useState(false)
  const toggleData = () => {
    setIsMockData((prev) => !prev)
  }

  return (
    <DataContext.Provider value={{ isMockdata, toggleData }}>
      {children}
    </DataContext.Provider>
  )
}
