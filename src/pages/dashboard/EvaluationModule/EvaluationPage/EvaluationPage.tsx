import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const EvaluationPage = (): JSX.Element => {
	return (
		<>
			<div>EvaluationPage</div>

			<ul>
				<li>
					<Link to={`/${paths.evaluaciones_evaluar_detail}/colaborador-1`}>Colaborador 1</Link>
				</li>
				<li>
					<Link to={`/${paths.evaluaciones_evaluar_detail}/colaborador-2`}>Colaborador 2</Link>
				</li>
				<li>
					<Link to={`/${paths.evaluaciones_evaluar_detail}/colaborador-3`}>Colaborador 3</Link>
				</li>
			</ul>

		</>
	)
}
