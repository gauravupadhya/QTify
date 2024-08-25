import Search from '../Search/Search';
import Logo from '../Assets/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <Search />
      <button className="nav-btn">Give Feedback</button>
    </nav>
  );
};

export default Navbar;
