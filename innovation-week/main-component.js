import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define your initial data for Mac and Windows setup instructions
const macInstructions = [
  'Install Visual Studio Code',
  'Install Homebrew',
  'Install Node.js',
  // Add more Mac-specific instructions
];

const windowsInstructions = [
  'Install Visual Studio Code',
  'Install Chocolatey',
  'Install Node.js',
  // Add more Windows-specific instructions
];

const WorkstationSetup = () => {
  // State to keep track of which OS is selected
  const [selectedOS, setSelectedOS] = useState(null);

  // Function to toggle the instructions for the selected OS
  const toggleInstructions = (os) => {
    setSelectedOS(selectedOS === os ? null : os);
  };

  return (
    <div>
      <h1>Welcome to Workstation Setup</h1>
      <p>Please select your operating system:</p>

      {/* Button to select Mac */}
      <button onClick={() => toggleInstructions('mac')}>Mac</button>

      {/* Button to select Windows */}
      <button onClick={() => toggleInstructions('windows')}>Windows</button>

      {/* Display instructions based on the selected OS */}
      {selectedOS === 'mac' && (
        <div>
          <h2>Mac Setup Instructions</h2>
          <ul>
            {macInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedOS === 'windows' && (
        <div>
          <h2>Windows Setup Instructions</h2>
          <ul>
            {windowsInstructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Link to navigate to the next step */}
      {selectedOS && (
        <Link to={`/${selectedOS}`}>
          <button>Next</button>
        </Link>
      )}
    </div>
  );
};

export default WorkstationSetup;
