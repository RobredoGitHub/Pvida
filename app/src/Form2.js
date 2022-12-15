import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/* fetch('http://localhost:8000/form')
            .then((response) => response.json)
            .then((data) => console.log("todo bien")) */

const request = async (data) => {
    /*                 console.log(data); */
    try {
        const response = await fetch('http://localhost:8000/form', {
            method: 'GET',
        });

        /*         const body = await response.json(); */

        if (response.ok) {
            // onSuccess(body);
            console.log('Todo bien');
        } else {
            throw new Error('Error');
        }
    } catch (error) {
        console.error(error);
    }
};

function App() {
    const [form, setForm] = useState({
        input1: '',
        input2: '',
    });

    /*     const [adaptado, setAdaptado] = useState(0); */
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <input
                    type='number'
                    value={form.input1}
                    onChange={(e) =>
                        setForm((lastValue) => ({
                            ...lastValue,
                            input1: e.target.value,
                        }))
                    }
                />
                <input
                    type='number'
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
                        const data = await request(form);
                        setForm(data);
                    }}
                    /* onSubmit={(ev) => {
                            ev.preventDefault();
                            console.log('hola');
                        }} */
                >
                    TEST
                </button>
                {/*                 <div>{adaptado}</div> */}
            </header>
        </div>
    );
}

export default App;
