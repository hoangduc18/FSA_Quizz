<script src="https://cdn.tailwindcss.com"></script>
function Header() {
    return (
        <section>
        <header className="flex justify-center items-center bg-blue-600">
            <div className="flex">
                <img src='../../assets/logo.ico'></img>
            </div>
            <nav>
        <ul className="nav-menu flex justify-center">
          <li className="nav-item">
            <div className="nav-link block p-4 hover:bg-blue-700">Home</div>
          </li>
          <li className="nav-item">
            <div className="nav-link block p-4 hover:bg-blue-700">Quizzes</div>
          </li>
          <li className="nav-item">
            <div className="nav-link block p-4 hover:bg-blue-700">Management</div>
          </li>
          <li className="nav-item">
            <div className="nav-link block p-4 hover:bg-blue-700">About</div>
          </li>
          <li className="nav-item">
            <div className="nav-link block p-4 hover:bg-blue-700">Contact</div>
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