/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { showModal } from "../../features/ui/modalSlice";
import { setChecked } from "../../features/ui/sideBarSlice";

function SideBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    dispatch(setChecked(false));
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="drawer-side">
      <div
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={() => dispatch(setChecked(false))}
      />
      <ul className="overflow-y-auto flex-nowrap p-4 w-80 h-full menu text-base-content">
        <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/dashboard"
            onClick={() => dispatch(setChecked(false))}
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
            onClick={() => dispatch(setChecked(false))}
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
            onClick={() => dispatch(setChecked(false))}
          >
            Runs Overview
          </NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => {
              dispatch(showModal({ type: "run" }));
              dispatch(setChecked(false));
            }}
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
            onClick={() => dispatch(setChecked(false))}
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
            onClick={() => dispatch(setChecked(false))}
          >
            Biking Overview
          </NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => {
              dispatch(showModal({ type: "ride" }));
              dispatch(setChecked(false));
            }}
          >
            Add New Bike Ride
          </button>
        </li>
        <div className="divider" />
        {/* <li className="w-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "!bg-accent !text-accent-content"
                : "active:bg-accent-focus"
            }
            to="/weight-dash"
            onClick={() => dispatch(setChecked(false))}
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
            onClick={() => dispatch(setChecked(false))}
          >
            Weight Overview
          </NavLink>
        </li>
        <li className="w-full">
          <button
            className="btn-ghost"
            type="button"
            onClick={() => {
              dispatch(showModal({ type: "weight" }));
              dispatch(setChecked(false));
            }}
          >
            Add New Weight
          </button>
        </li>
        <div className="divider" /> */}
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
