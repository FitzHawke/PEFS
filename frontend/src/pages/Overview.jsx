import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RideTable from "../components/tables/RideTable";
import RunTable from "../components/tables/RunTable";
import WeightTable from "../components/tables/WeightTable";

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
    case "weight":
      tableType = <WeightTable />;
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
