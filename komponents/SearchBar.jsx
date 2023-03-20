import React, { useState } from 'react';
import SubjectSelection from '../komponents/SubjectSelection.jsx';
import ResultTable from '../komponents/ResultTable.jsx';

const SearchBar = () => {
  const [input, setInput] = useState(''); // used to pick up text in searchBar
  const [books, setBooks] = useState([]); // used to contain searchressults from API .docs
  const [numFound, setNumFound] = useState([]); // used to contain searchressults from API .numFound

  const searchKey = 'Title';
  const placeholderText = 'Search on ' + searchKey + '...';

  //this is the fetch data argument

  async function getData() {
    await fetch(`https://openlibrary.org/search.json?title=${input}`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.docs);
        setNumFound(data.numFound);
      });
  }

  const clickSearch = () => {
    getData();
  };
  //this is the fetch data argument

  console.log(books);
  console.log(numFound);
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
        <ResultTable props={books} />
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
