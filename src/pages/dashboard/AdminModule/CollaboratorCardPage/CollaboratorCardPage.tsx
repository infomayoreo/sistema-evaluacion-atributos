
export const CollaboratorCardPage = () => {
  return (
    <div>
      <div>

        <h1>Tarjeta de Colaborador</h1>

        <form className="filtros">

          <input type="search" name="" id="" placeholder="Cliente" />
          <input type="search" name="" id="" placeholder="Cargo" />
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
              <th>Cargo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

</div>
    </div>
  )
}
