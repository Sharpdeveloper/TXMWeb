import React from 'react';
import './App.css';

import Layout from 'Components/UI/Layout/Layout.tsx';

function App() {
  const text: string = 'Hallo!';
  return (
    <div className="App">
      <Layout />
      {text}
    </div>
  );
}

export default App;
