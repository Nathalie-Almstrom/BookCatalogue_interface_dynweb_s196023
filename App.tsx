import React, { useState } from 'react';
import './style.css';
import SearchBar from './komponents/SearchBar.jsx';

export default function App() {
  return (
    <div className="app">
      <h1>Book Store Interface</h1>
      <p>Start by searching to see some magic happen :)</p>
      <SearchBar />
    </div>
  );
}
