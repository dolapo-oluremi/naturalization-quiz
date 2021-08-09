import React from 'react';
import "./Navbar.css"
import logo from "../components/images/flag-logo.png";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img src={logo} alt="" className="w-25"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item p-1">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item p-1">
          <a class="nav-link" href="#">Resources</a>
        </li>
        <li class="nav-item p-1">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item p-1">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
