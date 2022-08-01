import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Spinner from './Spinner'

function App() {
  let [error, setError] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Spinner error={error}/>
        <label>
          <input type="checkbox" checked={error} onChange={()=>setError(v=>!v)}></input>
          error {JSON.stringify(error)}
          </label>

      </header>
    </div>
  );
}

export default App;
