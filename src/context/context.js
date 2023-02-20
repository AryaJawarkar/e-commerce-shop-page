import React,{ createContext, useContext, useEffect, useState } from 'react';
const AppContext = createContext();

const AppProvider = ({children}) => {
  const [limit,setLimit] = useState(8);
  const [text,setText] = useState('')
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);

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
  setLoading(true);
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    setLoading(false);
  setProducts(data.products);
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
}

const handleScroll = ()=>{
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setLimit((prev)=>{
        return prev + 8;
      })
  }
}


useEffect(()=>{
  window.addEventListener('scroll',handleScroll);
  return ()=> window.removeEventListener('scroll',handleScroll);
},[])

useEffect(()=>{
  fetchProducts(url);
},[text,limit])

  return <AppContext.Provider value={{
    text,setText,products,loading
  }}>
{children}
  </AppContext.Provider>
}
export const useGlobalContext=()=> useContext(AppContext)
export  {AppContext,AppProvider}
