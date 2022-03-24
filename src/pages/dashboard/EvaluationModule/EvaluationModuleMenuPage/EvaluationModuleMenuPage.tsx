import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const EvaluationModuleMenuPage = (): JSX.Element => {
	return (
		<>
			<div>EvaluationModuleMenuPage</div>
			<hr />

			<ul>
				<li>
					<Link to={'/'+paths.evaluaciones_reuniones}>Reuniones</Link>
				</li>
				<li>
					<Link to={'/'+paths.evaluaciones_evaluar}>Evaluar a colaborador</Link>
				</li>
			</ul>

		</>
	)
}

