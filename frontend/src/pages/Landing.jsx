import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Landing({ register }) {
	return (
		<div className="hero h-full flex-grow">
			<div className="hero-content flex-col lg:flex-row">
				<div className="text-center lg:text-left">
					<h1 className="font-logo text-8xl font-bold sm:text-[12rem]">PEFS</h1>
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

export default Landing;
