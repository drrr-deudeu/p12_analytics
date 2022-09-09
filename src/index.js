import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import User from "./pages/User"
import Usage from "./pages/Usage"
import NotFound from "./pages/NotFound"
import "./sass/main.scss"
import { DataProvider } from "./utils/dataContext"
const root = ReactDOM.createRoot(document.getElementById("root"))
/**
 * The App's Routes
 */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Usage />}></Route>
          <Route path='/user/:userId' element={<User />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
)
