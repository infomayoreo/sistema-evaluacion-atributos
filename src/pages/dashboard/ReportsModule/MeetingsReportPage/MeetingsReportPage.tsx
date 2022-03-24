import { Link } from "react-router-dom"
import { paths } from "../../../../routers/routerPaths"

export const MeetingsReportPage = (): JSX.Element => {
	return (
		<>
			<div>SingleReportPage</div>

			<ul>
				<li>
					<Link to={`/${paths.reportes_reuniones_detail}/reunion-1`}>Reunión 1</Link>
				</li>
				<li>
					<Link to={`/${paths.reportes_reuniones_detail}/reunion-2`}>Reunión 2</Link>
				</li>
				<li>
					<Link to={`/${paths.reportes_reuniones_detail}/reunion-3`}>Reunión 3</Link>
				</li>
			</ul>
		</>
	)
}
