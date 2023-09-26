import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './WorkstationSetup.css'; // Import the CSS file

const WorkstationSetup = () => {
  const [selectedOS, setSelectedOS] = useState(null);

  const toggleInstructions = (os) => {
    setSelectedOS(selectedOS === os ? null : os);
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1>Welcome to Workstation Setup</h1>
        <p>Please select your operating system:</p>

        <button className="btn btn-primary mx-2" onClick={() => toggleInstructions('mac')}>
          Mac
        </button>

        <button className="btn btn-primary mx-2" onClick={() => toggleInstructions('windows')}>
          Windows
        </button>

        {selectedOS === 'mac' && (
          <div>
            <h2>Mac Setup Instructions</h2>
            <ul>
              {/* Add your Mac setup instructions here */}
            </ul>
          </div>
        )}

        {selectedOS === 'windows' && (
          <div>
            <h2>Windows Setup Instructions</h2>
            <ul>
              {/* Add your Windows setup instructions here */}
            </ul>
          </div>
        )}

        {selectedOS && (
          <Link to={`/${selectedOS}`}>
            <button className="btn btn-primary">Next</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorkstationSetup;
