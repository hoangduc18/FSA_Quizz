import { Link } from "react-router-dom";

function Header() {
    return (
        <section>
        <header className="flex justify-between items-center bg-white shadow-md px-40 ">
          <div className="flex gap-2 items-center">
              <img src='../../assets/logo.ico'></img>
              <h3 className="text-[24px] text-black">Quizzes</h3>
          </div>
        <nav>
          <ul className="nav-menu flex justify-center">
            <li className="nav-item">
              <Link to="/" className="nav-link block p-4 hover:bg-blue-700">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/manager/quizzes" className="nav-link block p-4 hover:bg-blue-700">Quizzes</Link>
            </li>
            <li className="nav-item">
              <Link to="menu" className="nav-link block p-4 hover:bg-blue-700">Management</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link block p-4 hover:bg-blue-700">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link block p-4 hover:bg-blue-700">Contact</Link>
            </li>
          </ul>
        </nav>
      <div className="profile-menu">
          <ul className="nav-menu flex justify-center">
            <li className="nav-item">
              <div className="nav-link block p-4 hover:bg-blue-700">Welcome, Admin</div>
            </li>
            <li className="nav-item">
              <button className="nav-link block p-4 hover:bg-blue-700">Logout</button>
            </li>
          </ul>
      </div>
        </header>
        </section>
    )
}

export default Header;