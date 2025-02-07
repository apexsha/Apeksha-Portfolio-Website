import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Apeksha's Portfolio</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link to="/resume" className="hover:text-blue-400 transition">Resume</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
