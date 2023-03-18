import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Greeting} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
