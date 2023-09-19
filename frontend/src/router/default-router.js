import React from "react";
import Index from "../views/dashboard/index";
// import { Switch, Route } from 'react-router-dom'
// user
import UserProfile from "../views/dashboard/app/user-profile";
import UserAdd from "../views/dashboard/app/user-add";
import UserList from "../views/dashboard/app/user-list";
import AttendList from "../views/dashboard/app/attend-list";
// import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from "../views/dashboard/widget/widgetbasic";
import Widgetcard from "../views/dashboard/widget/widgetcard";
import Widgetchart from "../views/dashboard/widget/widgetchart";
// icon

// Form
import FormElement from "../views/dashboard/from/form-element";
import FormValidation from "../views/dashboard/from/form-validation";
import FormWizard from "../views/dashboard/from/form-wizard";
// table
import BootstrapTable from "../views/dashboard/table/bootstrap-table";
import TableData from "../views/dashboard/table/table-data";
import ProgramCalander from "../views/program/ProgramCalander";
import ErrorBoundary from "../views/dashboard/admin/Errorboundary";

import Timeline from "../views/dashboard/special-pages/timeline";
import Program from "../views/dashboard/special-pages/calender";
import RtlSupport from "../views/dashboard/special-pages/RtlSupport";

//admin
import Admin from "../views/dashboard/admin/admin";
import Default from "../layouts/dashboard/default";
import QRCode from "../views/dashboard/admin/qrcode";
import ProDefault from "../layouts/programs/Prodefault";
import ProgramHome from "../views/program/ProgramHome";
import AttendanceRegister from "../views/program/AttendanceRegister";
import ProgarmReports from "../views/program/ProgramReports";
import SuperAdminHome from "../views/superadmin/SuperAdminHome";
import SuperAdmindefault from "../layouts/superAdmin/SuperAdmindefault";
import SuperAdminMain from "../views/superadmin/SuperAdminMain";
import ChurchBranch from "../views/dashboard/churchbranch/branchlist";
import Members from "../views/dashboard/Members/memberslist";
import Department from "../views/dashboard/Departments/departmentlist";
import SuperAdminAddChurch from "../views/superadmin/SuperAdminAddChurch";
import SuperAdminAddAdmin from "../views/superadmin/SuperAdminAddAdmin";
import AttendanceDepartment from "../views/dashboard/app/attendance-department";

export const DefaultRouter = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "dashboard",
        element: <Index />,
      },
      {
        path: "dashboard/special-pages/calender",
        element: <Program />,
      },
      {
        path: "dashboard/special-pages/timeline",
        element: <Timeline />,
      },
      {
        path: "dashboard/special-pages/rtl-support",
        element: <RtlSupport />,
      },
      {
        path: "dashboard/app/user-profile",
        element: <UserProfile />,
      },
      {
        path: "dashboard/app/user-add",
        element: <UserAdd />,
      },
      {
        path: "dashboard/app/user-list",
        element: <UserList />,
      },
      {
        path: "dashboard/app/attend-list",
        element: <AttendList />,
      },
      {
        path: "dashboard/app/attendance-department",
        element: <AttendanceDepartment />,
      },
      {
        path: "dashboard/admin/admin",
        element: <Admin />,
      },
      {
        path: "dashboard/admin/qrcode",
        element: <QRCode />,
      },
      // Widget
      {
        path: "dashboard/widget/widgetbasic",
        element: <Widgetbasic />,
      },
      {
        path: "dashboard/widget/widgetchart",
        element: <Widgetchart />,
      },
      {
        path: "dashboard/widget/widgetcard",
        element: <Widgetcard />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "dashboard/Members/memberslist",
        element: <Members />,
      },
      {
        path: "dashboard/churchbranch/branchlist",
        element: <ChurchBranch />,
      },
      {
        path: "dashboard/Departments/departmentlist",
        element: <Department />,
      },
      // Map

      // Form
      {
        path: "dashboard/form/form-element",
        element: <FormElement />,
      },
      {
        path: "dashboard/form/form-wizard",
        element: <FormWizard />,
      },
      {
        path: "dashboard/form/form-validation",
        element: <FormValidation />,
      },
      // Table
      {
        path: "dashboard/table/bootstrap-table",
        element: <BootstrapTable />,
      },
      {
        path: "dashboard/table/table-data",
        element: <TableData />,
      },
      // Icon
    ],
  },
  {
    path: "program",
    element: <ProDefault />,
    children: [
      {
        path: "/program",
        element: <ProgramHome />,
      },
      {
        path: "/program/timeline",
        element: <ProgramCalander />,
      },
      {
        path: "/program/attendance",
        element: <AttendanceRegister />,
      },
      {
        path: "/program/reports",
        element: <ProgarmReports />,
      },
    ],
  },
  {
    path: "superadmin",
    element: <SuperAdmindefault />,
    children: [
      {
        path: "/superadmin",
        element: <SuperAdminMain />,
      },
      {
        path: "/superadmin/addchurch",
        element: <SuperAdminAddChurch />,
      },
      {
        path: "/superadmin/addadministrator",
        element: <SuperAdminAddAdmin />,
      },
    ],
  },
];
