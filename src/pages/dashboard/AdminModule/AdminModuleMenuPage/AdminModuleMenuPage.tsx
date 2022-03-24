import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const AdminModuleMenuPage = (): JSX.Element => {
	return (
		<>
			<div>AdminModuleMenuPage</div>
			<hr />

			<ul>
				<li>
					<Link to={'/'+paths.admin_roles}>Roles</Link>
				</li>
				<li>
					<Link to={'/'+paths.admin_atributos}>Atributos</Link>
				</li>
				<li>
					<Link to={'/'+paths.admin_usuarios}>Usuarios</Link>
				</li>
				<li>
					<Link to={'/'+paths.admin_tarjeta}>Tarjeta de colaborador</Link>
				</li>
			</ul>

		</>
	)
}

