import { Outlet } from 'react-router-dom';
import { Sidebar } from './shared';
import './MainLayout.scss';

export const MainLayout = () => {

  return (
    <div className="main__container">
			{/* Sidebar */}
			<Sidebar />
			
			{/* Main content */}
			<div className="main-content__container">
				{/* Navbar */}
				{/* <Navbar /> */}

				{/* Content container */}
				<div className="content__container">
					<Outlet />
				</div>

			</div>
		</div>
  )
}
