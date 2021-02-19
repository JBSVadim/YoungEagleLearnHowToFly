import React, { Children } from 'react';
import './App.css';
// import StopWatch from './components/StopWatch';
// import Aloha from './components/Aloha';
// import SignInForm from './components/SignInForm'
// import Counter from './components/CountControl/Count'
import CountControl from './components/CountControl'
import Carusel from './components/Slaider/Carusel'
import FlexContainer from './components/FlexContainer'


function App(props) {
  return (
    <>
      <Carusel/>
      <CountControl/>
    <FlexContainer jc='center' ai='center'>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </FlexContainer>
    </>
  );
}

export default App;