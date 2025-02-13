import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import user1 from "../../../assets/user.png";
import { AuthContext } from "../../../providers/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
      <li>
        <NavLink to="/Login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100  ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={handleSignOut} class="btn btn-outline btn-info">
            Sign out
          </button>
        ) : (
          <Link to="/Login">
            <button class="btn btn-outline btn-info">Login</button>
          </Link>
        )}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full bg-purple-600">
            <img alt="Tailwind CSS Navbar component" src={user1} />
          </div>
        </div>
      </div>
    </div>
  );
}
