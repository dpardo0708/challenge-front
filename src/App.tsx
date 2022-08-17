import React from 'react';
import Header from './shared/components/header/header'
import Result from './pages/result/result';
import Detail from './pages/detail/detail';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.scss';

function App() {


  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route
      path='/'  element= {<Header/>}
      />
      <Route
      path='/items'  element= {<Result/>}
      />
        <Route
      path='/items/:id'  element= {<Detail/>}
      />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
