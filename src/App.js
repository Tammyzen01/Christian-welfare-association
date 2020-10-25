import React from 'react';
import { Route }  from 'react-router-dom';
import Home from '../src/screens/home';
import Community from '../src/screens/committe';
import Contact from '../src/screens/contact';
import About from '../src/screens/about';

function App() {
  return (
        <div>
          <Route component={Home} exact path='/' />
          <Route component={Community} exact path='/committe' />
          <Route component={Contact} exact path='/contact' />
          <Route component={About} exact path='/about'/>
        </div>
  );
}

export default App;
