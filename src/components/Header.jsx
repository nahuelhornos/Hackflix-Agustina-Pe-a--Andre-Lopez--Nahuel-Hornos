import './Header.css'
import { NavLink } from "react-router";
function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <nav>
          <ul>
 <li><NavLink to="/">Home</NavLink></li>
 <li><NavLink to="/InfoGraciasPorFumar">Gracias por fumar</NavLink></li>
</ul>
      </nav>
      </div>
    </header>
  )
}

export default Header

