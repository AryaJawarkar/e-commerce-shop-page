import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import Loading from './Loading';
import Product from './Product';
const Products = () => {

const {products,loading} = useGlobalContext();


  return (
    <section className='section-center'>
      <h1 style={{textAlign:'center',color:'tan'}}>Products</h1>
      <Wrapper>
{
    products.map((product)=>{
        return <Product key={product.id} {...product} />
    })
}
      </Wrapper>
      {loading && <Loading/>}
    </section>
  )
}
const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(4,280px);
grid-auto-rows: 390px;
justify-content: center;
gap:20px;
 

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
