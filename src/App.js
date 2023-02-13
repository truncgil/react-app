import logo from './logo.svg';
import './App.css';
import React, {  useState, useEffect } from 'react';

function App() {

  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    fetch('https://finans.truncgil.com/v4/today.json')
      .then((response) => response.json())
      .then((data) => {
       console.log(data);
       console.log(Object.entries(data));
        setCurrencies(Object.entries(data));
        
      })
      .catch((err) => {
        console.log(err.message);
     });
  });

  return (
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Welcome Truncgil Technology
        </p>
        <a
          className="App-link"
          href="https://truncgi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Truncgil
        </a>
        <table>
          <thead>
            <tr>
              <td>Tür</td>
              <td>Alış</td>
              <td>Satış</td>
            </tr>
          </thead>
          <tbody>
            
          {Array.isArray(currencies) 
          ? currencies.map((currency, index) => {
            return (
              <tr>
                <td>{currency[0]}</td>
                <td>{currency[1].Buying}</td>
                <td>{currency[1].Selling}</td>
              </tr>
            )
            
          }) : null }
          </tbody>
        </table>
        
      </header>
    </div>
  );
}

export default App;
