import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navebar() {
     let stylee={
          fontSize:'35px',
          fontWeight: '600',
          color:'#fff'
     };
     let back={
          backgroundColor:'#2c3e50'
     };
     let stylee2={
          fontSize:'20px',
          fontWeight: '500',
          color:'#fff'
     };
  return (
    <>
      <nav style={back} className="navbar navbar-expand-lg navbar-light  py-3">
        <div className="container">
          <Link className="navbar-brand   border-5"  style={stylee} to="/">Start Framework</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link  mx-2" aria-current="page" style={stylee2} to="about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" style={stylee2} to="proto">PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" style={stylee2} to="contact">CONTACT</NavLink>
              </li>
              
              
            </ul>
          
          </div>
        </div>
      </nav>
    </>
  );
};
