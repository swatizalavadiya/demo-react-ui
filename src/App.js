import React from 'react';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
// import MobileHeader from './components/header/MobileHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
