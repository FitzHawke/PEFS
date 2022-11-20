import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RideDash from "../components/dashboards/RideDash";
import RunDash from "../components/dashboards/RunDash";
import WeightDash from "../components/dashboards/WeightDash";
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

  if (content === "weight") {
    return <WeightDash />;
  }

  return (
    <div className="mx-auto px-2 max-w-5xl flex flex-col justify-center items-center h-full">
      <h2 className="max-w-3xl ">
        This dashboard is still being implemented! Go add some rides and runs
        from the menu on the left then view them in the overview and respective
        dashboards!
      </h2>
    </div>
  );
}

export default Dashboard;
