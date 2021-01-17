import './Search.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { searchKeyDown } from '../../actions'

const Search = () => {
  const dispatchKeyDown = useDispatch();
  const searchLabel = 'Search Pokemon';

  return (
    <div className="search">
      <label className="is-vHidden" htmlFor="search-pokemon">{searchLabel}</label>
      <input 
        id="search-pokemon"
        className="search__input" 
        type="text" 
        placeholder={searchLabel}
        onKeyUp={e => dispatchKeyDown(searchKeyDown(e.currentTarget.value))} 
      />
    </div>
  )
}

export default Search;