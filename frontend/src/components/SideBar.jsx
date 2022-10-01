import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { showModal } from "../features/ui/modalSlice";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="drawer-side">
      <div className="drawer-overlay" />
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </li>
        <div className="divider" />
        <li>
          <NavLink to="/">Runs Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/">Runs Overview</NavLink>
        </li>
        <li>
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal("run"))}
          >
            Add New Run
          </button>
        </li>
        <div className="divider" />
        <li>
          <NavLink to="/">Biking Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/">Biking Overview</NavLink>
        </li>
        <li>
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal("ride"))}
          >
            Add New Bike Ride
          </button>
        </li>
        <div className="divider" />
        <li>
          <NavLink to="/">Weightlifting Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/">Weightlifting Overview</NavLink>
        </li>
        <li>
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal("weight"))}
          >
            Add New Weights Session
          </button>
        </li>
        <div className="divider" />
        <li>
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li>
          <button className="btn-ghost" type="button" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
