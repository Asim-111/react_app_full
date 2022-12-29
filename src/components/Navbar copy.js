import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand fs-3"style={{}} href="/">{props.title}</a>
      <img src="%PUBLIC_URL%/favicon-16x16.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"></img>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <div className={`form-check form-switch my-3 mx-2 text-${props.mode==='light'?'dark':'light'}`}>
          <input  onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>  Enable Mode
        </div>
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