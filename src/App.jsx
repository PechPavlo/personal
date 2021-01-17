import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Contacts} path="/contacts" />
        <Route component={Home} path="/" exact />
        <Route component={Projects} path="/projects" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
