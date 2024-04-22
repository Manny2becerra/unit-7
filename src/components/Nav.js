import React from "react";
import {NavLink} from 'react-router-dom';

const Nav = () => {

    //navigates user to default routes upon navigation interaction
    return (
        <nav className="main-nav">
        <ul>
          <li><NavLink to="/Cats">Cats</NavLink></li>
          <li><NavLink to="/Dogs">Dogs</NavLink></li>
          <li><NavLink to="/Robots">Robot</NavLink></li>
        </ul>
      </nav>
    )
}

export default Nav;