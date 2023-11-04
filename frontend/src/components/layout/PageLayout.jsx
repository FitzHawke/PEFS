import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setChecked } from "../../features/ui/sideBarSlice";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

function PageLayout({ children }) {
  const dispatch = useDispatch();
  const { checked } = useSelector((state) => state.sideBar);

  function onChange() {
    dispatch(() => setChecked(checked));
  }

  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <div className="h-full drawer lg:drawer-open">
        <input
          type="checkbox"
          id="my-drawer-2"
          className="drawer-toggle"
          checked={checked}
          onChange={onChange}
        />

        <div className="h-full drawer-content">
          {children}
        </div>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default PageLayout;