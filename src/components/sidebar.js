import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

const Burger = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }

    // This can be used to close the menu, e.g. when a user clicks a menu item
  const closeMenu = () => {
    setMenuOpen(false)
  }
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="burger-menu"> 
      <Menu 
          right 
          isOpen={menuOpen}
          onStateChange={state=> handleStateChange(state)}>
        <a id="home" className="menu-item" href="/"> 🏠 Home</a>
        <a id="about" className="menu-item" href="/about">🔍 About</a>
        <a id="contact" className="menu-item" href="/all-recipes">📝 All recipes</a>
        <a id="contact" className="menu-item" href="/resources">📚 Resources</a>
        <a id="contact" className="menu-item" href="/tags">🏷 Tags</a>
      </Menu>
      </div> 
      )
  } 


export default Burger 