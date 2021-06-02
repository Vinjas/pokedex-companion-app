import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
      return (
        <nav className={"navbar"}>
            <button className="nav-button">
                <Link to={'/'} className="nav-link"> Pokemon </Link>
            </button>
            
            <button className="nav-button">
                <Link to={'/types'} className="nav-link"> Types </Link>
            </button>

            <button className="nav-button">
                <Link to={'/moves'} className="nav-link"> Moves </Link>
            </button>
        </nav>
      );
    }
  }


export default NavBar;