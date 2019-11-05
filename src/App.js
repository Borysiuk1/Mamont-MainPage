import React from 'react';
import './App.css';
import { directive } from '@babel/types';
import MainScreen from './components/MainScreen';
import History from './components/History';
import AboutUs from './components/AboutUs';
// import Slider from './components/Slider';

function App() {
  return (
    <>
      <MainScreen />
      <History />
      <AboutUs />
      {/* <Slider /> */}
    </>
  );
}

export default App;
