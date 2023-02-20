import React from 'react';
import styled from 'styled-components';
import {AiFillStar} from 'react-icons/ai';
import {BsCartPlus} from  'react-icons/bs';

const Product = ({title,brand,rating,price,images}) => {
  return (
    <Wrapper>
    <div>
        <img src={images[0]} alt={title} />
    </div>
      <h5>{title}</h5>
      <div className='info'>
      <p>{`Brand : ${brand}`}</p>
      <p className='rate'>{rating.toFixed(1)}<AiFillStar/></p>
      </div>
      <div className="price">
      <p>${price}</p>
      <p className='cart'>Add to cart <BsCartPlus/></p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`

box-shadow: var(--light-shadow);
margin-top: 20px;
line-height : 1.4;
padding: 2px;
:hover{
  box-shadow: var(--dark-shadow)
}

div{
    img{
        width: 90%;
        margin: auto;
  height: 240px;
  display: block;
  object-fit: contain;
    }
}

.info{
    display: flex;
    align-items : center;
    justify-content : space-between;
}
.rate{
    display : flex;
    align-items : center;
    background-color: tomato;
    padding: 5px;
    color: white;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    }
.price{
    display : flex;
    align-items : center;
    justify-content : space-between;

}
.cart{
  background-color: powderblue;
  color: darkblue;
padding: 5px;
border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.cart:hover{
  background-color: blue;
  color: powderblue ;
  transition: 1s all;
 
}
p{
    font-size: 16px;
}
`
export default Product
