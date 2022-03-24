import { Link } from "react-router-dom"

export const HomePage = (): JSX.Element => {
    return (
      <>
        <div>HomePage</div>
		<hr />

        <ul>
          <li>
            <Link to='/admin'>Administración</Link>
          </li>
          <li>
            <Link to='/evaluaciones'>Evaluaciones</Link>
          </li>
          <li>
            <Link to='/reportes'>Reportes</Link>
          </li>
        </ul>

      </>
    )
}
