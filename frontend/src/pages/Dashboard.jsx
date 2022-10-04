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

  return <div>Dash</div>;
}

export default Dashboard;
