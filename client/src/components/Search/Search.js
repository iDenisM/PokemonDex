import React from 'react';
import { useDispatch } from 'react-redux';
import { searchKeyDown } from '../../actions'

const Search = () => {
  const dispatchKeyDown = useDispatch();

  return (
    <input 
      className="search" 
      type="text" 
      onKeyUp={e => dispatchKeyDown(searchKeyDown(e.currentTarget.value))} 
    />
  )
}

export default Search;