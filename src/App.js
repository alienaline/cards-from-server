import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Cards from './views/Cards/Cards';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className='appHeader'>Каталог курсов</h1>
      <Search />
      <Cards />
    </div>
  );
}

export default App;
