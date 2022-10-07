import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RideDash from "../components/RideDash";
import RunDash from "../components/RunDash";
import { reset } from "../features/auth/authSlice";

function Dashboard({ content }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => dispatch(reset());
  }, [user]);

  if (content === "run") {
    return <RunDash />;
  }

  if (content === "ride") {
    return <RideDash />;
  }

  return (
    <div className="mx-auto px-2 max-w-5xl flex flex-col justify-center items-center h-full">
      <h2 className="max-w-3xl ">
        Currently the Biking and Runs overview is implemented! Go add some rides
        and runs from the menu on the left and view them in the overview!
      </h2>
    </div>
  );
}

export default Dashboard;
