import React from "react"
import { Link } from "gatsby"
import Burger from "../components/sidebar"



const Layout = ({ children }) => {

  return (
    <div >
    <Burger />  
      <header >                 
        </header>
              
       <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <main>{children}</main>
      <footer>
      </footer>
      </div>
    </div>
  )
}

export default Layout


