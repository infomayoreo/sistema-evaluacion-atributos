import React from 'react'

const FormRoles = () => {
  return (
    <div>
        <h2>Crear Rol</h2>
        <form  action="">
            <input 
                type="text"
                placeholder='Nombre Rol'
            />
        <select name="" id="">
            <option value="">Permisos</option>
        </select>
        <button>Cancelar</button>
        <button type="submit">Guardar</button>
        </form>
    </div>
  )
}

export default FormRoles