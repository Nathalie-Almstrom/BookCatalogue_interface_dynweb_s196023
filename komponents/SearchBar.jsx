import React, { useState } from 'react';
import SubjectSelection from '../komponents/SubjectSelection.jsx';
import ResultTable from '../komponents/ResultTable.jsx';

const SearchBar = () => {
  const [input, setInput] = useState(''); // used to pick up text in searchBar
  const [books, setBooks] = useState([]); // used to contain searchressults from API .docs
  const [numFound, setNumFound] = useState([]); // used to contain searchressults from API .numFound
  const [pullSubject, setPullSubject] = useState('title');

  const searchKey = pullSubject;
  const placeholderText = 'Search on ' + searchKey + '...';

  //this function pickes up the value from subjectSelection conponent and uses it to determin what URL will be used for the search. 
  const pull_subject = (subjectFromChild) => {
    setPullSubject(subjectFromChild);
  };

  //this is the start of fetch data argument
  async function getData() {
    switch (pullSubject) {
      case 'title': {
        await fetch(`https://openlibrary.org/search.json?title=${input}`)
          .then((response) => response.json())
          .then((data) => {
            setBooks(data.docs);
            setNumFound(data.numFound);
          });
        break;
      }
      case 'author': {
        await fetch(`https://openlibrary.org/search.json?author=${input}`)
          .then((response) => response.json())
          .then((data) => {
            setBooks(data.docs);
            setNumFound(data.numFound);
          });
        break;
      }
      case 'subject': {
        await fetch(`https://openlibrary.org/search.json?subject=${input}`)
          .then((response) => response.json())
          .then((data) => {
            setBooks(data.docs);
            setNumFound(data.numFound);
          });
        break;
      }
    }
  }

  const clickSearch = () => {
    getData();
  };
  //this is the end of fetch data argument

  return (
    <>
      <div className="search-bar">
        <SubjectSelection func={pull_subject} />
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

      <ResultTable books={books} num={numFound} />
    </>
  );
};

export default SearchBar;
