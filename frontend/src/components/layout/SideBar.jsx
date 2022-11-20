import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { showModal } from "../../features/ui/modalSlice";

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
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/run-dash"
          >
            Runs Dashboard
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/runs"
          >
            Runs Overview
          </NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal({ type: "run" }))}
          >
            Add New Run
          </button>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/ride-dash"
          >
            Biking Dashboard
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/rides"
          >
            Biking Overview
          </NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal({ type: "ride" }))}
          >
            Add New Bike Ride
          </button>
        </li>
        <div className="divider" />
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/weight-dash"
          >
            Weight Dashboard
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/weight"
          >
            Weight Overview
          </NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => dispatch(showModal({ type: "weight" }))}
          >
            Add New Weight
          </button>
        </li>
        <div className="divider" />
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
