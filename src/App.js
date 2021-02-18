import React from 'react';
import './App.css';
import StopWatch from './components/StopWatch';
import Aloha from './components/Aloha';
import SignInForm from './components/SignInForm'
import Counter from './components/CountControl/Count'
import CountControl from './components/CountControl'
import Carusel from './components/Slaider/Carusel'


function App(props) {
  return (
    <>
      <Carusel/>
      <CountControl/>
    </>
  );
}

export default App;