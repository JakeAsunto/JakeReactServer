import "./Home.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
    <nav className="navbar">
      <div className="eps" id="navbartoggle">
      <ul>
        <Link to="/" className="hm">Home</Link>
        <Link to="/about" className="about">About</Link>
        <Link to="/api" className="api" target="_blank">API</Link>
      </ul>
      </div>
    </nav>
  </>
  );
}