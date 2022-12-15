import './Form.css';
import { useState } from 'react';

function vestibulo1(x) {
    if (x >= 150) {
        const vest1 = 'El elemento1 se encuentra adaptado';
        console.log(vest1);
    } else {
        const vest1 = 'El elemento1 no se encuentra adaptado';
        console.log(vest1);
    }
}
function vestibulo2(x) {
    if (x >= 150) {
        const vest2 = 'El elemnto2 se encuentra adaptado';
        console.log(vest2);
    } else {
        const vest2 = 'El elemnto2 no se encuentra adaptado';
        console.log(vest2);
    }
}

function pasillo1(x) {
    if (x >= 120) {
        const pas1 = 'El elemnto3 se encuentra adaptado';
        console.log(pas1);
    } else {
        const pas1 = 'El elemnto3 no se encuentra adaptado';
        console.log(pas1);
    }
}

function pasillo2(x) {
    if (x <= 100) {
        const pas2 = 'El elemento4 se encuentra adaptado';
        console.log(pas2);
    } else {
        const pas2 = 'El elemento4 no se encuentra adaptado';
        console.log(pas2);
    }
}

function pasillo3(x) {
    if (x >= 150) {
        const pas3 = 'El elemento5 se encuentra adaptado';
        console.log(pas3);
    } else {
        const pas3 = 'El elemento5 no se encuentra adaptado';
        console.log(pas3);
    }
}

function huecos1(x) {
    if (x >= 80) {
        const hue1 = 'El elemento6 se encuentra adaptado';
        console.log(hue1);
    } else {
        const hue1 = 'El elemento6 no se encuentra adaptado';
        console.log(hue1);
    }
}

function huecos2(x) {
    if (x >= 120) {
        const hue2 = 'El elemento7 se encuentra adaptado';
        console.log(hue2);
    } else {
        const hue2 = 'El elemento7 no se encuentra adaptado';
        console.log(hue2);
    }
}

function huecos3(x) {
    if (x <= 120 && x >= 80) {
        const hue3 = 'El elemento8 se encuentra adaptado';
        console.log(hue3);
    } else {
        const hue3 = 'El elemento8 no se encuentra adaptado';
        console.log(hue3);
    }
}
function huecos4(x) {
    if (x === 120) {
        const hue4 = 'El elemento9 se encuentra adaptado';
        console.log(hue4);
    } else {
        const hue4 = 'El elemento9 no se encuentra adaptado';
        console.log(hue4);
    }
}
function huecos5(x) {
    if (x === 5) {
        const hue5 = 'El elemento10 se encuentra adaptado';
        console.log(hue5);
    } else {
        const hue5 = 'El elemento10 no se encuentra adaptado';
        console.log(hue5);
    }
}
function huecos6(x) {
    if (x >= 120) {
        const hue6 = 'El elemento11 se encuentra adaptado';
        console.log(hue6);
    } else {
        const hue6 = 'El elemento11 no se encuentra adaptado';
        console.log(hue6);
    }
}
function huecos7(x) {
    if (x >= 15) {
        const hue7 = 'El elemento12 se encuentra adaptado';
        console.log(hue7);
    } else {
        const hue7 = 'El elemento12 no se encuentra adaptado';
        console.log(hue7);
    }
}

function ventana(x) {
    if (x <= 110 && x >= 80) {
        const ven = 'El elemento13 se encuentra adaptado';
        console.log(ven);
    } else {
        const ven = 'El elemento13 no se encuentra adaptado';
        console.log(ven);
    }
}
function anguloV(x) {
    if (x === true) {
        const ang = 'El elemento14 se encuentra adaptado';
        console.log(ang);
    } else {
        const ang = 'El elemento14 no se encuentra adaptado';
        console.log(ang);
    }
}
function result() {
    return console.log(
        'El interior de su vivienda se encuentra adaptado en un 50%'
    );
}

/* function adaptado() {
    alert('su casa se encuentra adaptada en un 0%');
    window.location.reload();
}
 */

const request = async (data, onSuccess) => {
    console.log(data);
    try {
        /*  vestibulo1(data.input1); */

        vestibulo1(data.input1);
        vestibulo2(data.input2);
        pasillo1(data.input3);
        pasillo2(data.input4);
        pasillo3(data.input5);
        huecos1(data.input6);
        huecos2(data.input7);
        huecos3(data.input8);
        huecos4(data.input9);
        huecos5(data.input10);
        huecos6(data.input11);
        huecos7(data.input12);
        ventana(data.input13);
        anguloV(data.input14);
        result();
        const response = await fetch('http://localhost:8000/form', {
            method: 'GET',
        });

        const body = await response.json();

        if (response.ok) {
            onSuccess(body);
        } else {
            throw new Error(body.message);
        }
    } catch (error) {
        console.error(error);
    }
};

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
    return (
        <div id='root'>
            <h1>
                Herramienta para la medición y adaptación de la vivienda en
                interiores
            </h1>
            <fieldset>
                <legend>
                    <h2>Suelos</h2>
                </legend>
                <div className='interior'>
                    <p>
                        <strong>
                            Importante : Echemos un vistazo tanto al material
                            como a la inclinación del mismo, por favor, marque
                            la casilla para habilitar el resto de campos.
                        </strong>
                    </p>
                    <label>
                        <i>
                            En caso que quiera indicar la información en cuanto
                            al suelo interior de su hogar marque esta casilla...
                        </i>
                    </label>{' '}
                    <input type='checkbox' name='interior' />
                    <br></br>
                    <label>Material</label>
                    <input type='text' name='material' disabled />
                    <label>Tipo de pendiente</label>
                    <select name='pendiente' id='' disabled>
                        <option value=''>Clase 1</option>
                        <option value=''>Clase 2</option>
                        <option value=''>Clase 3</option>
                    </select>
                </div>
                <div className='exterior'>
                    <label>
                        <i>
                            En caso de suelo se encuentre en el exterior de su
                            hogar marque esta casilla...
                        </i>
                    </label>
                    <input type='checkbox' name='exterior' />
                    <br></br>
                    <label>Material</label>
                    <input type='text' name='material' disabled />
                    <label>Tipo de pendiente</label>
                    <select name='pendiente' id='' disabled>
                        <option value='1'>Clase 1</option>
                        <option value='2'>Clase 2</option>
                        <option value='3'>Clase 3</option>
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <legend>
                    <h2>Vestíbulos</h2>
                </legend>
                <div className='vestibulo'>
                    <div>
                        <p>
                            <strong>
                                Importante: En este caso deberá tomar medidas
                                del espacio libre del area que cubre la puerta
                                (tanto abierta como cerrada) de su hogar.
                            </strong>
                        </p>{' '}
                        <label>
                            Diametro de circunferencia libre no barrida por las
                            puertas (cm)
                        </label>
                        <input
                            type='number'
                            name='vestibulo2'
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
                            <i>
                                {' '}
                                En caso de ascensor marque aquí la misma medida
                                que en el caso anterior ( Diametro de
                                circunferencia libre no barrida por las puertas
                                del mismo) (cm)
                            </i>
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
                <legend>
                    <h2>Pasillos</h2>
                </legend>
                <div className='pasillo'>
                    <p>
                        <strong>
                            Importante: En lo referente al pasillo nos interesa
                            prestar atención al ancho del mismo. Este puede ser
                            de dos formas misma anchura(anchura libre) a largo
                            de todo el corredor, o por el contrario, sufrir
                            algún tipo estrechamiento en ciertos puntos
                            (entrechamiento puntual). Por favor, según el caso,
                            marque la casilla para habilitar el resto de campos.
                        </strong>
                    </p>{' '}
                    <div className='ancho'>
                        <label>
                            {' '}
                            <i>
                                En caso de que la anchura sea la misma a largo
                                del corredor marque esta casilla...
                            </i>
                        </label>
                        <input type='checkbox' name='anchuraLibre' id='' />
                        <br></br>
                        <label>Ancho libre (cm)</label>
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
                        <label>
                            <i>
                                En caso de que exista un estrechamiento puntual
                                marque esta casilla...
                            </i>
                        </label>
                        <input type='checkbox' name='' id='' />
                        <br></br>
                        <label>Anchura mínima del estrechamiento (cm)</label>
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
                        <label>
                            <i>
                                En caso de que su pasillo tenga una longitud de
                                10 metros o más indique por favor su anchura
                                (cm)
                            </i>
                        </label>

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
                <legend>
                    <h2>Huecos de paso</h2>
                </legend>
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
                <fieldset>
                    <legend>
                        <h3>Puertas de accesos interiores</h3>
                    </legend>
                    <p>
                        <strong>
                            Importante : En esta sección deberá tomar medidas de
                            los espacios cercanos a la puertas que acceden a las
                            diferentes habitaciones de su hogar
                        </strong>
                    </p>{' '}
                    <div className='hueco'>
                        {/*                         <p>
                            <strong>
                                Importante: En este caso deberá tomar medidas
                                del espacio libre del area que cubre la puerta
                                (al abrir y cerrar) de su hogar.
                            </strong>
                        </p>{' '} */}

                        <div>
                            <label>
                                Marque esta casilla en caso de que las puertas
                                interiores tengan un ángulo de 90º o superior
                            </label>
                            <input
                                type='checkbox'
                                name='hueco2'
                                value={form.input14}
                                onChange={(e) =>
                                    setForm((lastValue) => ({
                                        ...lastValue,
                                        input14: e.target.value,
                                    }))
                                }
                            />
                        </div>
                        <div className='apertura'>
                            <div>
                                <label>
                                    Distancia entre el suelo y el pomo (cm)
                                </label>
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
                                    Separación del picaporte al plano de la
                                    puerta (cm)
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
                                <br></br>
                                <label>
                                    <i>
                                        En caso de puertas
                                        acristaladas/transaparentes, existe
                                        señalización sobre las mismas
                                    </i>
                                </label>

                                <input
                                    type='checkbox'
                                    name='hueco6'
                                    value={form.input10}
                                    onChange={(e) =>
                                        setForm((lastValue) => ({
                                            ...lastValue,
                                            input10: e.target.value,
                                        }))
                                    }
                                ></input>
                                <br></br>
                                <label>Anchura de la señalización</label>
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
                                    <i>
                                        En caso de puertas de doble filo(puerta
                                        doble) con mecanismo automático (puerta
                                        automática)de apertura y cierre, marque
                                        esta casilla
                                    </i>
                                </label>

                                <input type='checkbox' name='hueco6'></input>
                                <br></br>
                                <label>
                                    Anchura máxima de paso entre ellas
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
                                Tiempo estimado para apertura/cierra (segundos)
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
            </fieldset>
            <fieldset>
                <legend>
                    <h2>Ventanas</h2>
                </legend>
                <p>
                    <strong>
                        Importante: En este campo se hace refrencia a la altura
                        a la que se encuentran en mecanismo de apertura de las
                        ventanas de su hogar. Esta medida se toma desde el suelo
                        hasta la manivela/pomo de la ventana.
                    </strong>
                </p>{' '}
                <div>
                    <label> Altura de ventanas</label>
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
                    /*                     onClick={async () => {
                        alert('su casa se encuentra adaptada en un 20%');
                    }} */
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
export default Form;
