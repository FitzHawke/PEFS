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
      <ul className="menu p-4 overflow-y-auto flex-nowrap w-80 bg-base-100 text-base-content">
        <li className="w-full">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink to="/run-dash">Runs Dashboard</NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/runs">Runs Overview</NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal("run"))}
          >
            Add New Run
          </button>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink to="/bike-dash">Biking Dashboard</NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/bikes">Biking Overview</NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal("ride"))}
          >
            Add New Bike Ride
          </button>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink to="/strength">Weightlifting Dashboard</NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/strength-dash">Weightlifting Overview</NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal("weight"))}
          >
            Add New Weights Session
          </button>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li className="w-full">
          <button className="btn-ghost" type="button" onClick={onLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
