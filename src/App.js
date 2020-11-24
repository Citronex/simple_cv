import React from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';
import Skills from './components/pages/Skills';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import Portfolio from './components/pages/Portfolio';


function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component={Home} />
        <Switch>
          <Route path='/skills' component={Skills} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
