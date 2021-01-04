import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Contacts} path="/contacts" />
        <Route component={Home} path="/" exact />
        <Route component={Portfolio} path="/portfolio" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
