import { Link } from 'react-router-dom';

const NavBar = () => {
  
  return ( 
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-content-elements">
          <Link className="navbar-content-elements-item" to="/">Home</Link>
          <Link className="navbar-content-elements-item" to="/about">About</Link>
          <Link className="navbar-content-elements-item" to="/education">Education</Link>
          <Link className="navbar-content-elements-item" to="/work">Work</Link>
          <Link className="navbar-content-elements-item" to="/projects">Projects</Link>
          <Link className="navbar-content-elements-item" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );

}
 
export default NavBar;