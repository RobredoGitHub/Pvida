import logo from './logo.svg';
import './App.css';
import { useState} from 'react'

const request = async data => {
    console.log(data)
   const result = await fetch('http://localhost:8080/form')
   const text = await result.text();
   const { adaptable } = JSON.parse(text)
   console.log(' El sofa es adaptable', adaptable);
}



function App() {
    const [form, setForm] = useState({
        input1: 'puerta1',
        input2: 'techo3'
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={form.input1} onChange={e => setForm(lastValue => ({...lastValue, input1: e.target.value }))} />
        <input type="text" value={form.input2} onChange={e => setForm(lastValue => ({...lastValue, input2: e.target.value }))} />

        <button onClick={() => request(form)}> TEST </button> 
      </header>
    </div>
  );
}

export default App;
