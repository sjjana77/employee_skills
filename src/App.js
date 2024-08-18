import React from 'react';
import { EmployeeProvider } from './EmployeeContext';
import EmployeeList from './EmployeeList';
import WrappedSkillsDisplay from './WrappedSkillsDisplay';

const App = () => {
  return (
    <EmployeeProvider>
      <div style={{ margin: '20px' }}>
        <h1>Employee List</h1>
        <EmployeeList />
        <WrappedSkillsDisplay />
      </div>
    </EmployeeProvider>
  );
};

export default App;
