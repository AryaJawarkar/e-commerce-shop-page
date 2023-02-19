import React from 'react'
import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'
import {BsCartPlus} from  'react-icons/bs'

const Product = ({title,brand,rating,price,images}) => {
  return (
    <Wrapper>
    <div>
        <img src={images[0]} alt={title} />
    </div>
      <h5>{title}</h5>
      <div className='info'>
      <p>{`Brand : ${brand}`}</p>
      <p className='rate'>{rating}<AiFillStar/></p>
      </div>
      <div className="price">
      <p>${price}</p>
      <p>Add to cart <BsCartPlus/></p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
box-shadow: var(--light-shadow);
margin-top: 20px;
line-height : 1.5;
div{
    img{
        width: 90%;
        margin: auto;
  height: 250px;
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
}
.price{
    display : flex;
    align-items : center;
    justify-content : space-between;
}
p{
    font-size: 16px;
}
`
export default Product
