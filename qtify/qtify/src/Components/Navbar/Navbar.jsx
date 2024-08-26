import Search from '../Search/Search';
import Logo from '../assets/Logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <Search />
      <button className="nav-btn">Give Feedback</button>
    </nav>
  );
}

export default Navbar;
