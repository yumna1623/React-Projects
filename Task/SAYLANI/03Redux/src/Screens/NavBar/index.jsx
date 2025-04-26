import "./NavBar.css"; 
import { useSelector } from "react-redux";

const NavBar = () => {
    const isUserLogin = useSelector((state) => state.auth.isLoggedin);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
         {isUserLogin? "Home":"LogIn"}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
