import React from 'react';
import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { showModal, resetModal } from '../features/ui/modalSlice';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        className: 'alert alert-error',
      });
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="py-12 max-w-full">
        <h1 className="text-4xl text-center">
          <FaSignInAlt className="inline pb-2" /> Sign in
        </h1>
        <p className="text-center">Log in and start setting workouts</p>
      </section>

      <section className="flex justify-center">
        <form onSubmit={onSubmit}>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered justify-center"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </div>
          <div className="form-control my-2">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered justify-center"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn btn-primary btn-wide mx-auto my-4"
            >
              Login
            </button>
          </div>
        </form>
        <button
          onClick={() => dispatch(showModal('run'))}
          className="btn btn-primary btn-wide mx-auto my-4"
        >
          Test
        </button>
      </section>
    </>
  );
}

export default Login;
