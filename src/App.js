import {BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component = {About} path='/About' />
      <Route component = {Contacts} path='/Contacts'/>
      <Route component = {Home} path='/' exact/>
      <Route component = {NavBar} path='/NavBar'/>
      <Route component = {Portfolio} path='/Portfolio'/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
