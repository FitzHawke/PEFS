import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "./Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        className: "alert alert-error",
      });
    }

    if (isSuccess || user) {
      navigate("/dashboard");
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
    <section className="flex justify-center">
      <div className="flex flex-col justify-center gap-8">
        <p>
          {" "}
          Don&apos;t have an account?{" "}
          <Link className="link link-accent" to="/register">
            Register Here!
          </Link>
        </p>
      </div>
      <form className="form-control form-control-lg" onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label flex-col items-start px-0" htmlFor="email">
            <p className="label-text px-4">Your Email </p>
            <input
              type="email"
              className="input input-bordered justify-center w-full"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={onChange}
            />
          </label>
          <label className="label flex-col items-start px-0" htmlFor="password">
            <p className="label-text px-4">Password </p>
            <input
              type="password"
              className="input input-bordered justify-center w-full"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onChange}
            />
          </label>
          <button
            type="submit"
            className="btn btn-accent btn-wide mx-auto my-4"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
