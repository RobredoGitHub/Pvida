import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const request = async (data) => {
    /*     console.log(data);
    const result = await fetch('http://localhost:8080/form');
    const text = await result.text();
    const { adaptable } = JSON.parse(text); */
    return 5;
};

function App() {
    const [form, setForm] = useState({
        input1: '',
        input2: '',
    });
    const [adaptado, setAdaptado] = useState(0);
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <input
                    type='text'
                    value={form.input1}
                    onChange={(e) =>
                        setForm((lastValue) => ({
                            ...lastValue,
                            input1: e.target.value,
                        }))
                    }
                />
                <input
                    type='text'
                    value={form.input2}
                    onChange={(e) =>
                        setForm((lastValue) => ({
                            ...lastValue,
                            input2: e.target.value,
                        }))
                    }
                />

                <button
                    onClick={async () => {
                        const porcentaje = await request(form);
                        setAdaptado(porcentaje);
                    }}
                >
                    {' '}
                    TEST{' '}
                </button>
                <div>{adaptado}</div>
            </header>
        </div>
    );
}

export default App;
