import React from "react";
import { NavLink } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { useContext } from "react";
import { Usercontext } from "../App";

function Navbar() {
  const { state, dispatch } = useContext(Usercontext);
  const Routing = () => {
    if (!state) {
      return (
        <>
          <NavLink to="/signin" className="l-r">
            Login
          </NavLink>
          <NavLink to="/signup" className="l-r">
            Register
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/logout" className="logout">
            Logout
          </NavLink>
        </>
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <span className="logo">C</span>areer<span className="logo">Vision</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/college">
                  Colleges
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cource">
                  Cources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/guidance">
                  Services
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <Routing />
            </form>
          </div>
        </div>
      </nav>
     
    {/* <footer id="sticky-footer" class="flex-shrink-0">
        <div class="container text-center">
          <small>
            <a href="" style="text-decoration: none; color: black;">About us</a> | <a href=""
                    style="text-decoration: none; color: black;">Contact us</a></small>
        </div>
        <div class="container text-center">
            <small>Copyright &copy; Career Vision</small>
        </div>
    </footer> */}
      
    </>
  );
}

export default Navbar;
