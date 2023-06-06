import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import { setChecked } from "../../features/ui/sideBarSlice";
import DayNightSwitch from "./DayNightSwitch";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { checked } = useSelector((state) => state.sideBar);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="logo">
          <Link
            to="/"
            className="hidden text-xl normal-case lg:block btn btn-ghost"
          >
            <h1 className="text-3xl font-bold align-bottom font-logo">PEFS</h1>
          </Link>
        </div>
        <button
          className="block lg:hidden"
          type="button"
          htmlFor="my-drawer-2"
          onClick={() => dispatch(setChecked(!checked))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-current"
          >
            <path d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z" />
          </svg>
        </button>
      </div>
      <div className="navbar-end">
        <ul className="p-0 menu menu-horizontal">
          <li>
            <DayNightSwitch />
          </li>
          <li>
            <button
              className="text-center btn btn-ghost"
              type="button"
              onClick={onLogout}
            >
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
