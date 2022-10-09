import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function EntryPage({ register }) {
  console.log(import.meta.env.VITE_MODE);
  console.log(import.meta.env.VITE_DEMO_USER);
  console.log(import.meta.env.VITE_DEMO_PASS);
  return (
    <div className="hero flex-grow h-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="sm:text-[12rem] text-8xl font-bold font-logo">PEFS</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        {register ? <RegisterForm /> : <LoginForm />}
      </div>
    </div>
  );
}

export default EntryPage;
