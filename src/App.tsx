import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Land } from './pages/land';
import { Migrate } from './pages/migrate';
import { RiskyGame } from './pages/riskyGame';
import { Pouches } from './pages/pouches';

import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
          <Route path="/risky-game" component={RiskyGame} />
          <Route path="/pouches" component={Pouches} />
          <Route path="/land" component={Land} />
          <Route path="/" component={Migrate} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
