import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import WorkstationSetup from './WorkstationSetup';
import MacSetup from './MacSetup'; // Import your Mac setup component
import WindowsSetup from './WindowsSetup'; // Import your Windows setup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkstationSetup />} />
        <Route path="/mac" element={<MacSetup />} />
        <Route path="/windows" element={<WindowsSetup />} />
      </Routes>
    </Router>
  );
}

export default App;
