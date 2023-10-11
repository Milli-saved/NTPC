import React, { useEffect, memo, Fragment, useContext } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

//react-shepherd
import { ShepherdTourContext } from "react-shepherd";

// header
import Header from "../../components/partials/dashboard/HeaderStyle/header";

//subheader
import SubHeader from "../../components/partials/dashboard/HeaderStyle/sub-header";

//sidebar
import SidebarPro from "../../views/program/SidebarPro";

//footer
import Footer from "../../components/partials/dashboard/FooterStyle/footer";

//seetingoffCanvas
import SettingOffCanvas from "../../components/setting/SettingOffCanvas";

// Import selectors & action from setting store
import * as SettingSelector from "../../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

const Tour = () => {
  const tour = useContext(ShepherdTourContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      pathname === "/dashboard" &&
      sessionStorage.getItem("tour") !== "true"
    ) {
      tour?.start();
    }
  });
  return <Fragment></Fragment>;
};

const ProDefault = memo((props) => {
  const { member } = useSelector((state) => state.member);
  const appName = useSelector(SettingSelector.app_name);

  return (
    <>
      {member === null ? (
        <Navigate to="/" />
      ) : (
        <Fragment>
          <SidebarPro app_name={appName} />
          <Tour />
          <main className="main-content">
            <div className="position-relative">
              <Header />
              <SubHeader />
            </div>
            <div className="py-0 conatiner-fluid content-inner mt-n5">
              <Outlet />
            </div>
            <div className="btn-download "></div>
            <Footer />
          </main>
          <SettingOffCanvas />
        </Fragment>
      )}
    </>
  );
});

ProDefault.displayName = "ProDefault";
export default ProDefault;
