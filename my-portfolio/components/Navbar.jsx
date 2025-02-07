import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/projects" style={{ marginRight: "15px" }}>Projects</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact" style={{ marginLeft: "15px" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;