import React from 'react';
import Search from './Search';
import {BsCart} from  'react-icons/bs';
import styled from 'styled-components';
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
      <div className='cart'>
       <BsCart />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
max-width : var(--max-width);
display: flex;
justify-content: center;
align-items: center;
justify-content: space-between;
height: 5rem;
margin : auto;

span{
  color: blue;
}
ul{
    display: flex;
    gap : 20px;
    li{
        list-style-type: none
    }
}
@media screen and (max-width:767px){
      ul{
        display: none;
      }

.cart{
  display: none;
}
h1{
  font-size: 16px;
}
    }
`

export default Navbar
