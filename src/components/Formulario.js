import React from 'react';

const Formulario = () => {
    return (
        <form>
            <h2>Agrega tus gastos aqui</h2>

            <div className="campo">
                <label>Nombre gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label>Cantidad gasto</label>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="300"
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