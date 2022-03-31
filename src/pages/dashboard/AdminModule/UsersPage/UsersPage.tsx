import {useEffect} from "react"
import FormUsers from "../../../../components/FormUsers"
export const UsersPage = (): JSX.Element => {
  
    return (
      <div>

        <h1>Usuarios</h1>

        <form className="filtros">

          <input type="search" name="" id="" placeholder="Cliente" />
          <input type="search" name="" id="" placeholder="Rol" />
          <input type="search" name="" id="" placeholder="Buscar" />
        </form>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Cédula</th>
              <th>Cliente</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        
      </div>
    )
}

