import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <div className="logo">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src="/PEFS_logo_black.png" className='max-h-12 w-auto' alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {user ? (
            <li>
              <button className="btn btn-ghost" onClick={onLogout}>
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
