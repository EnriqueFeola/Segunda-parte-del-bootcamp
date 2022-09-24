import "./navbar.css";
import logo from "../assets/logo192.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header navbar">
          <img className="logo" src={logo} alt="logo" />
          <div className={`nav-items ${isOpen && "open"}`}>
            <NavLink to="/greeting">Greeting</NavLink>
            <NavLink to="/counter">Counter</NavLink>
            <NavLink to="/task">Task</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
