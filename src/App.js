import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Greeting} />
    </BrowserRouter>
  );
}


export default App;
