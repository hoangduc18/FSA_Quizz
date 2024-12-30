import { Link } from "react-router-dom";
import { faUserFriends, faQuestionCircle, faUser, faUserShield} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Sidebar() {
    return (
        <aside className="w-48 border-r border-slate-300">
            <nav>
                <div className="sidebar-title text-2xl font-semibold p-3">Menu</div>
                <ul>
                    <li>
                        <Link className="block p-3 hover:bg-gray-300" to="/manager/quiz"><FontAwesomeIcon icon={faUserFriends}/> Quiz Management</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-gray-300" to="/manager/question"><FontAwesomeIcon icon={faQuestionCircle}/>Question Management</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-gray-300" to="/manager/user"><FontAwesomeIcon icon={faUser}/>User Management</Link>
                    </li>
                    <li>
                        <Link className="block p-3 hover:bg-gray-300" to="/manager/role"><FontAwesomeIcon icon={faUserShield}/>Role Management</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;