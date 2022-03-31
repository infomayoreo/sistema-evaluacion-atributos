import {Formik, Form, Field} from "formik";


const FormUsers = () => {
  return (
        <>
        <form>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <input 
                type="text"
                id="nombre"
                placeholder='Nombre'
             />

        </div>
        <div>
            <label htmlFor="apellido">Apellido</label>
            <input 
                type="text"
                id="apellido"
                placeholder='Apellido'
             />

        </div>
        <div>
            <label htmlFor="correo">Correo</label>
            <input 
                type="email"
                id="correo"
                placeholder='Correo'
             />

        </div>
        <div>
            <label htmlFor="cedula">Cédula</label>
            <input 
                type="text"
                id="cedula"
                placeholder='Cédula'
             />

        </div>
        <div>
            <label htmlFor="cliente">Cliente</label>
            <input 
                type="text"
                id="cliente"
                placeholder='Cliente'
             />

        </div>
        <div>
            <select name="" id="">
                <option value="">Rol</option>
            </select>

        </div>
        <div>
            <select name="" id="">
                <option value="">Permisos</option>
            </select>

        </div>
        </form>

        <button type="submit">
            cargar
        </button>
    </>
       
  )
}

export default FormUsers