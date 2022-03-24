import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const MeetingsPage = (): JSX.Element => {
	return (
		<>
			<div>MeetingsPage</div>

			<ul>
				<li>
					<Link to={`/${paths.evaluaciones_reuniones_detail}/reunion-1`}>Reunion 1</Link>
				</li>
				<li>
					<Link to={`/${paths.evaluaciones_reuniones_detail}/reunion-2`}>Reunion 2</Link>
				</li>
				<li>
					<Link to={`/${paths.evaluaciones_reuniones_detail}/reunion-3`}>Reunion 3</Link>
				</li>
			</ul>
		</>
	)
}
