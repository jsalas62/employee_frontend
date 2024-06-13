import React from 'react';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management</h1>
        <EmployeeList />
      </header>
    </div>
  );
};

export default App;
