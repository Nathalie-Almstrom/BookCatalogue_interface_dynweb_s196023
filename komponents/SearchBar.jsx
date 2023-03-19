import React, { useState } from 'react';
import SubjectSelection from '../komponents/SubjectSelection.jsx';
import ResultCard from '../komponents/ResultCard.jsx';
import fetchData from '../utils/fetchData.js';


const SearchBar = () => {
  const [input, setInput] = useState(''); // used to pick up text in searchBar
  const [books, setBooks] = useState([]); // used to contain searchressults from API

  const searchKey = 'Title';
  const placeholderText = 'Search on ' + searchKey + '...';

  const titleAPI = fetchData(`https://openlibrary.org/search.json?title=${input}`);

    //This switch satment determines the API search: title, author, subject
    function clickSearch () {
      switch (searchKey) {
        case 'Title': {
            const data = titleAPI.read();
          break;
        }
        case 'Author': {
            console.log('this works')
          break;
        }
        case 'Subject': {
            console.log('this works')
          break;
        }
      }
    };

  return (
    <>
      <div className="search-bar">
        <SubjectSelection />
        <input
          className="imput-box"
          type="search"
          id="search"
          placeholder={placeholderText}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={clickSearch} className="search-butten">
          Search
        </button>
      </div>
      <div className="card-container">
        <ResultCard />
      </div>
    </>
  );
};

export default SearchBar;

 /*
  //3x function to fetch searched data.
  async function titleSearch(input) {
    await fetch(`https://openlibrary.org/search.json?title=${input}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.docs));
  };
  async function authorSearch(input) {
    await fetch(`https://openlibrary.org/search.json?author=$${input}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.docs));
  };
  async function subjectSearch(input) {
    await fetch(`https://openlibrary.org/search.json?subject=$${input}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.docs));
  };
  
  */