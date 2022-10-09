import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { login, register, reset } from "../features/auth/authSlice";
import Spinner from "./Spinner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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

    if (password !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  const onDemoClick = () => {
    const userData = {
      email: import.meta.env.VITE_DEMO_USER || process.env.VITE_DEMO_USER,
      password: import.meta.env.VITE_DEMO_PASS || process.env.VITE_DEMO_PASS,
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
          Already have an account?{" "}
          <Link className="link link-accent" to="/login">
            Sign In Here!
          </Link>
        </p>
        {(import.meta.env.VITE_MODE === "demo" ||
          process.env.VITE_MODE === "demo") && (
          <p>
            Don&apos;t want to make an account?
            <button
              className="link link-accent"
              type="button"
              onClick={onDemoClick}
            >
              Sign in with demo user
            </button>
          </p>
        )}
      </div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label flex-col items-start px-0" htmlFor="name">
            <p className="label-text px-4">Your Name </p>
            <input
              type="text"
              className="input input-bordered justify-center w-full"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={onChange}
            />
          </label>
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
          <label
            className="label flex-col items-start px-0"
            htmlFor="password2"
          >
            <p className="label-text px-4">Confirm Password </p>
            <input
              type="password"
              className="input input-bordered justify-center w-full"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={onChange}
            />
          </label>
          <button
            type="submit"
            className="btn btn-accent btn-wide mx-auto my-4"
          >
            Signup
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
