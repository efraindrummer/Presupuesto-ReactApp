import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);

        //construir gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        console.log(gasto);
        //pasar el gasto al componente principal

        //resetar el form
    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            {
                error ? <Error mensaje="Ambos campos son obligatorio o Presupuesto Incorrecto" /> : null 
            }

            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="0"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}
 
export default Formulario;