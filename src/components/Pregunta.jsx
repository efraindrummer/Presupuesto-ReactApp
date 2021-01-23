import React, { useState } from 'react'

const Pregunta = () => {

    //definir el state

    const [cantidad, guardarCantidad] = useState(0);

    //definir presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    //submit para defnir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>Coloca tu presupuesto</h2>

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </div>
    );
}
 
export default Pregunta;