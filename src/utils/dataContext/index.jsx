import { createContext, useState } from "react"

export const DataContext = createContext()
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
