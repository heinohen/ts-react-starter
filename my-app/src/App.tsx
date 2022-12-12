import React from 'react';
import './App.css';
import Person from './components/Person';

const App: React.FC = () => {
  return (
    <div>
      <Person name = 'Jon' age={443} />
    </div>
  );
};

export default App;
