import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Movies from './pages/movies';
import Show from './pages/movies/show';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<Movies />} />
          <Route path="/movies/:id" children={<Show />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
