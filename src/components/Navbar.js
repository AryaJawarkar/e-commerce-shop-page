import React from 'react'
import Search from './Search'
import {BsCart} from  'react-icons/bs'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <Nav>
      <div className="nav-header">
        <h1>ARYA<span> STORE</span></h1>
      </div>
      <Search />
      <div className="links">
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
      </div>
      <div>
        <BsCart />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
height: 5rem;
ul{
    display: flex;
    gap : 20px;
    li{
        list-style-type: none
    }
}
`

export default Navbar
