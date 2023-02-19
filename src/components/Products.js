import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import Product from './Product';
const Products = () => {

const {products} = useGlobalContext();

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Products</h1>
      <Wrapper>
{
    products.map((product)=>{
        return <Product key={product.id} {...product} />
    })
}
      </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(5,280px);
grid-auto-rows: 380px;
justify-content: center;
gap:20px;
 
 @media screen and (max-width: 1600px){
    grid-template-columns: repeat(4,280px);

 }
 @media screen and (max-width: 1320px){
    grid-template-columns: repeat(3,280px);

 }
 @media screen and (max-width: 986px){
    grid-template-columns: repeat(2,280px);

 }
 @media screen and (max-width: 657px){
    grid-template-columns: repeat(1,280px);

 }

`
export default Products
