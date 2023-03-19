import React, { useState } from 'react';
import SubjectSelection from '../komponents/SubjectSelection.jsx';
import ResultCard from '../komponents/ResultCard.jsx';

const SearchBar = () => {
  const [input, setInput] = useState(''); // used to pick up text in searchBar
  const emptyArray = []; //this hides search results when SearchBar is not used.
  const filteredFilms = input
  ? props.films.filter(
      (item) =>
        item.title.toLowerCase().includes(search) ||
        item.director.toLowerCase().includes(search) ||
        item.opening_crawl.toLowerCase().includes(search)
    )
  : emptyArray; 

  console.log(filteredFilms)

  return (
    <>
      <div className='search-bar'>
        <SubjectSelection/>
        <input
          className="imput-box"
          type="search"
          id="search"
          placeholder={}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className='search-butten'>
          Search
        </button>
      </div> 
      <div className="card-container">
        <ResultCard/>
      </div>
    </>
  );
};

export default SearchBar;
