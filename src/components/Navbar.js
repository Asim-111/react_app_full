import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.css';

export default function Navbar(props) {
  return (
   
    <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand fs-3" href="/"><img src="favicon-32x32.png" alt="Logo" width="40" height="40"
       className="d-inline-block align-text-top"></img> {props.title}</a>
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/regform">Register</a>
        </li>
        </ul>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <div className={`form-check form-switch my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`}>
          <input  onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>  Enable Mode
        </div>
      </div>
      <div className="dropdown mx-4">
  <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Colored Background
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" onClick={props.changegreen} href="#">Green</a></li>
    <li><a className="dropdown-item" onClick={props.changered} href="#">Red</a></li>
    <li><a className="dropdown-item" onClick={props.changeyellow} href="#">Yellow</a></li>
  </ul>
</div>
  </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    // address: PropTypes.object,
    // friends: PropTypes.array,
  }

  Navbar.defaultProps = {
    title: 'Default Title',
    link: 'Defeult link'
  }