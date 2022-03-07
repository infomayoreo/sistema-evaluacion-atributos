import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { startLogout } from '../../../../redux/actions';
import './Sidebar.scss';

export const Sidebar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( startLogout() )
    };


    return (
        <div className={`sidebar__container`}>
            
            <ul className="sidebar-menu__container">
                <li className="group-item">
                    <Link className="link" to='/admin'>Admin</Link>
                </li>
                <li className="group-item">
                    <Link className="link" to='/reuniones'>Reuniones</Link>
                </li>
                <li className="group-item">
                    <Link className="link" to='/reportes'>Reportes</Link>
                </li>
                <li className="group-item" style={{ cursor: "pointer" }}>
                    <div onClick={ handleLogout }>Logout</div> {/*Eliminar*/}
                </li>
            </ul>


        </div>
    )
}
