import { useEffect, memo, Fragment, useContext } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";

//react-shepherd
import { ShepherdTourContext } from "react-shepherd";

//react-bootstrap

// header
import Header from "../../components/partials/dashboard/HeaderStyle/header";

//subheader
import SubHeader from "../../components/partials/dashboard/HeaderStyle/sub-header";

//sidebar
import SideBarSuperAdmin from "../../views/superadmin/SideBarSuperAdmin";

//footer
import Footer from "../../components/partials/dashboard/FooterStyle/footer";

//default
// import {DefaultRouter} from '../../router/default-router'

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
  const appName = useSelector(SettingSelector.app_name);
  const { member } = useSelector((state) => state.member);

  return (
    <>
      {member === null ? (
        <Navigate to="/" />
      ) : (
        <Fragment>
          <SideBarSuperAdmin app_name={appName} />
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
