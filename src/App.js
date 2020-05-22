import React from 'react';
import './App.css';
import CenterGoogle from "./components/CenterGoogle"
import HeaderGoogle from "./components/HeaderGoogle"
import FooterGoogle from "./components/FooterGoogle"

function App() {
  return (
    <div className="App">
      <div className ="header">
        <HeaderGoogle/>
      </div>
      <div className ="center">
        <CenterGoogle/>
      </div>
      <div className = "footer">
        <FooterGoogle/>
      </div>
    </div>
  );
}

export default App;
