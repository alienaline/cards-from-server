/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Cards from './views/Cards/Cards';

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputvalue] = useState('');
  const [costSort, setCostSort] = useState(false);
  const [alphabetSort, setAlphabetSort] = useState(false);
  const [currentSort, setCurrentSort] = useState('');
  let hostUrl = 'https://my-json-server.typicode.com/alienaline/new_disk_json/cards';

  const request = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  };

  const sortByCost = (value) => {
    setCostSort(!costSort);
    setCurrentSort(value);
    costSort ? request(`${hostUrl}?_sort=rating&_order=desc`) : request(`${hostUrl}?_sort=rating`);
  };

  function sortByAlphabet(value) {
    setAlphabetSort(!alphabetSort);
    setCurrentSort(value);
    alphabetSort ? request(`${hostUrl}?_sort=fullName&_order=desc`) : request(`${hostUrl}?_sort=fullName`);
  }

  const handleSearch = (event) => {
    event.preventDefault();
    request(`${hostUrl}?fullName_like=${inputValue}`);
  };

  useEffect(() => {
    request(hostUrl);
  }, []);
  
  return (
    <div className="App">
      <Header />
      <h1 className='appHeader'>People Hunter</h1>
      <Search
        inputValue={inputValue}
        setInputvalue={setInputvalue}
        handleSearch={handleSearch} />
      <Cards
        data={data}
        costSort={costSort}
        alphabetSort={alphabetSort}
        currentSort={currentSort}
        sortByCost={sortByCost}
        sortByAlphabet={sortByAlphabet} />
    </div>
  );
}

export default App;
