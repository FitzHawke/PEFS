import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RideTable from "../components/RideTable";
import RunTable from "../components/RunTable";

function Overview({ content }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  let tableType = null;

  switch (content) {
    case "run":
      tableType = <RunTable />;
      break;
    case "ride":
      tableType = <RideTable />;
      break;
    default:
      tableType = null;
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <div className="overflow-auto">{tableType}</div>;
}

export default Overview;
