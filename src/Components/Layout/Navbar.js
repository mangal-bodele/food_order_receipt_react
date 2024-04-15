import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Home">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/About">About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Add">Add</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/Show">Show</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar