import React from "react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg bg-white px-4 py-2">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/images/logo.png" alt="Logo" className="header-img" />
          <h2 className="text-success mb-0">MindMirror</h2>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-end">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="tasks">Mental Health Tasks</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/quotes">Quotes for You</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
