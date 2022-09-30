import React from "react";

function SideBar() {
  return (
    <div className="drawer-side">
      <div className="drawer-overlay" />
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/">Runs</a>
        </li>
        <li>
          <a href="/">Bike Rides</a>
        </li>
        <li>
          <a href="/">Workouts</a>
        </li>
        <li>
          <a href="/">Settings</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
