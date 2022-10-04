import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    return () => dispatch(reset());
  }, [user]);

  return (
    <div className="flex justify-center items-center h-full">
      <h2 className="max-w-3xl ">
        Currently the Biking and Runs overview is implemented! Go add some rides
        and runs from the menu on the left and view them in the overview!
      </h2>
    </div>
  );
}

export default Dashboard;
