import React from 'react';
import { useGlobalContext } from '../context/context';

const Search = () => {

const {text,setText} = useGlobalContext();
  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
      <input type="text"
      className='input-form'
      placeholder='search'
      value={text}
      onChange={(e)=>setText(e.target.value)}
       />
      
    </form>
  )
}

export default Search
