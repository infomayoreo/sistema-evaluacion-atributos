import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const ReportsModuleMenuPage = (): JSX.Element => {
	return (
		<>
			<div>ReportsModuleMenuPage</div>
			<hr />

			<ul>
				<li>
					<Link to={'/'+paths.reportes_tarjeta}>Reporte de tarjeta</Link>
				</li>
				<li>
					<Link to={'/'+paths.reportes_reuniones}>Reporte de reuniones</Link>
				</li>
				<li>
					<Link to={'/'+paths.reportes_individual}>Reporte individual</Link>
				</li>
				<li>
					<Link to={'/'+paths.reportes_multiples}>Reporte multiple</Link>
				</li>
			</ul>

		</>
	)
}

