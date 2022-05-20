import { useState } from 'react';
import logo from './logo.svg';
import './App.css';




function App({value}) {

  const [ counter, setCounter ] = useState( value );

  const add = () => {

      setCounter ( counter + 1 );        
  }

  const subtract = () => {

      setCounter ( counter - 1 );        
  }

  const reset = () => {

      setCounter ( value );        
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h4 className='Legend'>Your best investment</h4>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           How much are you willing to invest?
        </p>
        <div>          
          <button onClick= { subtract } >-1</button>
          <button onClick= { reset } > RESET </button>
          <button onClick= { add } > +1 </button>
          <h2> { counter }  millions of dollars</h2>  
        </div>
         <a
          className="App-link"
          href="https://github.com/FedeUno/business-rotondo.git" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out this project on GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
