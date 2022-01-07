import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Land } from './pages/land';
import './App.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/land" component={Land} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
