import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const active = false;

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="logo">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <h1 className="font-logo text-3xl font-bold">PEFS</h1>
          </Link>
        </div>
      </div>
      {user && active && (
        <div className="btn-group navbar-center">
          <button className="btn btn-wide btn-active" type="button">
            Runs
          </button>
          <button className="btn btn-wide" type="button">
            Bike Rides
          </button>
          <button className="btn btn-wide" type="button">
            Workouts
          </button>
        </div>
      )}
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">
          {user ? (
            <li>
              <button
                className="btn btn-ghost"
                type="button"
                onClick={onLogout}
              >
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUser /> Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
