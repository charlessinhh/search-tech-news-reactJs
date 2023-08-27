
import { useGlobalContext } from './Context';
import Clock from './Clock';

import React from 'react'

const Search = () => {
  const { query, searchPost} = useGlobalContext();

  return (
    <>
      <h1>Hello Stranger, Welcome!
      <Clock/>
      </h1>
      
      <form onSubmit={ (e) => e.preventDefault() } >
        <div>
          <input 
          type = "text"
          placeholder = "Search here ..."
          value = {query}
          onChange = {(e) => searchPost(e.target.value) }
          />
        </div>
      </form>
    </>
    
  )
}

export default Search