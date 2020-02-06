import React, { Component } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div id="title">
          <h1>The Dog App</h1>
        </div>
        <NavLink exact activeClassName="active-link" to="/">
          <i className="fas fa-dog"></i> Dogs
        </NavLink>
        <NavLink exact activeClassName="active-link-favorite" to="/favorites">
          <i className="far fa-heart"></i>Favorites
        </NavLink>
      </div>
    );
  }
}
