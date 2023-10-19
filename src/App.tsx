import React from 'react';
import TableStudents from './Student/TableStudents';
import './App.css';

function App() {
  console.log('Hello e')
  return (
    <div className="App">
      <header className="App-header">
       Learn React
       <TableStudents/>
      </header>
    </div>
  );
}

export default App;
