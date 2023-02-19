import React,{ createContext, useContext, useEffect, useState } from 'react'
const AppContext = createContext()

const AppProvider = ({children}) => {
  const [limit,setLimit] = useState(10);
  const [text,setText] = useState('')
  const [products,setProducts] = useState([]);
  let url;


  const mainUrl = `https://dummyjson.com/products?limit=${limit}`;
  const searchUrl = `https://dummyjson.com/products/search?q=${text}`
  if (text) {
    url = searchUrl;
  }
  else{
    url = mainUrl;
  }


const fetchProducts = async(url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
  setProducts(data.products);
  } catch (error) {
    console.log(error);
  }
}





useEffect(()=>{
  fetchProducts(url);
},[text])




  return <AppContext.Provider value={{
    text,setText,products
  }}>
{children}
  </AppContext.Provider>
}
export const useGlobalContext=()=> useContext(AppContext)
export  {AppContext,AppProvider}
