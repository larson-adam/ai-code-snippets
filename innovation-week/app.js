import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorkstationSetup from './WorkstationSetup';
import MacSetup from './MacSetup'; // Import your Mac setup component
import WindowsSetup from './WindowsSetup'; // Import your Windows setup component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WorkstationSetup} />
        <Route path="/mac" component={MacSetup} />
        <Route path="/windows" component={WindowsSetup} />
      </Switch>
    </Router>
  );
}

export default App;
