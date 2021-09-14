import React from 'react';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <h4 className="navbar-brand" href="@">
          <img
            src={logo}
            alt="Spacestagram Logo"
            height="34"
            className="d-inline-block"
          />
          {' '}
          <span className="navbar-title">
            Spacestagram
          </span>
        </h4>
        <p>Brought to you by NASA APOD API</p>
      </div>
    </nav>
  );
}

export default Navbar;
