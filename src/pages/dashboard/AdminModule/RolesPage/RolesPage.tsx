import FormRoles from "../../../../components/FormRoles"
export const RolesPage = (): JSX.Element => {
  return (
    <div>
      <h1>Roles</h1>
      <div style={{display: "flex",}}>
        <form action="">
          <input 
            type="text"
            placeholder="Buscar"
            />
        </form>
        <button>+ Crear Rol</button>


      </div>

      <table>
          <thead>
            <tr>
              <th>Nombre Rol</th>
              <th>Permisos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <FormRoles/>
    </div>
  )
}
