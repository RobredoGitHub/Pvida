import './App.css';
import { useState } from 'react';

/* const request = async (data) => {
    console.log(data);
    const response = await fetch('http://localhost:8080/form');
}; */

function Form() {
    const [form, setForm] = useState({
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: '',
    });

    const request = async (data) => {
        console.log(data);
    };
    return (
        <div id='root'>
            <legend>Vivienda</legend>

            <fieldset>
                <legend>Suelos</legend>
                <div className='interior'>
                    <label>Interior</label>
                    <input type='checkbox' name='interior' />
                    <label>Material</label>
                    <input type='text' name='material' />
                    <label>Tipo de pendiente</label>
                    <select name='pendiente' id=''>
                        <option value=''>Clase 1</option>
                        <option value=''>Clase 2</option>
                        <option value=''>Clase 3</option>
                    </select>
                </div>
                <div className='exterior'>
                    <label>Exterior</label>
                    <input type='checkbox' name='exterior' />
                    <label>Tipo de pendiente</label>
                    <select name='pendiente' id=''>
                        <option value='1'>Clase 1</option>
                        <option value='2'>Clase 2</option>
                        <option value='3'>Clase 3</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <legend>Vestibulos</legend>
                <div className='vestibulo'>
                    <div>
                        <label>
                            Circunferencia libre no barrida por las puertas (cm)
                        </label>
                        <input
                            type='number'
                            name='vestibulo1'
                            value={form.input1}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input1: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <label>
                            Circunferencia libre frente ascensor accesible (cm)
                        </label>
                        <input
                            type='number'
                            name='vestibulo2'
                            value={form.input2}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input2: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Pasillos</legend>
                <div className='pasillo'>
                    <div className='ancho'>
                        <label>Anchura libre</label>
                        <input type='checkbox' name='anchuraLibre' id='' />
                        <label>Longitud del estrechamiento (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={form.input3}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input3: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className='estrecho'>
                        <label>Estrechamiento puntual</label>
                        <input type='checkbox' name='' id='' />
                        <label>Longitud del estrechamiento (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={form.input4}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input4: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div className='largo'>
                        <label>Pasillo largo</label>
                        <input type='checkbox' name='' id='' />
                        <label>Longitud del estrechamiento (cm)</label>
                        <input
                            type='number'
                            name='estrechamiento'
                            value={form.input5}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input5: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Huecos de paso</legend>
                <div className='hueco'>
                    <div>
                        <label>
                            Anchura libre de paso de las puertas de entrada (cm)
                        </label>
                        <input
                            type='number'
                            name='hueco1'
                            value={form.input6}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input6: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <label>
                            Espacio libre a ambas caras de las puertas (cm)
                        </label>
                        <input
                            type='number'
                            name='hueco2'
                            value={form.input7}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input7: e.target.value,
                                }))
                            }
                        />
                    </div>
                    <div>
                        <label>
                            Ángulo necesario de apertura de las puertas (90º)
                        </label>
                        <input type='checkbox' name='hueco2' />
                    </div>
                    <div className='apertura'>
                        <div>
                            <label>Altura de la manivela (cm)</label>
                            <input
                                type='number'
                                name='hueco4'
                                value={form.input8}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input8: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>
                                Separación del picaporte al plano de la puerta
                                (cm)
                            </label>
                            <input
                                type='number'
                                name='hueco5'
                                value={form.input9}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input9: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div>
                            <label>
                                Distancia desde el mecanismo hasta el encuentro
                                en rincón (cm)
                            </label>
                            <input
                                type='number'
                                name='hueco6'
                                value={form.input10}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input10: e.target.value,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                Distancia desde el mecanismo hasta el encuentro
                                en rincón (cm)
                            </label>
                            <input
                                type='number'
                                name='hueco6'
                                value={form.input11}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input11: e.target.value,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div>
                        <label>
                            Distancia desde el mecanismo hasta el encuentro en
                            rincón (cm)
                        </label>
                        <input
                            type='number'
                            name='hueco6'
                            value={form.input12}
                            onChange={(e) =>
                                setForm((lastValue) => ({
                                    ...lastValue,
                                    input12: e.target.value,
                                }))
                            }
                        />
                    </div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Ventanas de pasillo</legend>
                <div>
                    <label> Altura de ventana</label>
                    <input
                        type='number'
                        name='alturaV'
                        value={form.input13}
                        onChange={(e) =>
                            setForm((lastValue) => ({
                                ...lastValue,
                                input13: e.target.value,
                            }))
                        }
                    />
                </div>
            </fieldset>
            <div className='submitDiv'>
                <button
                    type='submit'
                    className='submit'
                    onClick={async () => {
                        const data = await request(form);
                        setForm(data);
                    }}
                >
                    Enviar
                </button>
            </div>
        </div>
    );
}
export default Form;
