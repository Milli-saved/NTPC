import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPrograms } from "../../../store/program/programSlice";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Loader from "../../../components/Loader";
import { getAllDepartment } from "../../../store/department/departmentSlice";
import { getAllMembers } from "../../../store/member/memberSlice";

const Example = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMembers());
    dispatch(getPrograms());
    dispatch(getAllDepartment());
  }, [dispatch]);
  const { members, member } = useSelector((state) => state.member);
  const { programs } = useSelector((state) => state.program);

  let memberData = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "firstName",
      headerName: "Member Name",
      editable: true,
      width: 200,
    },
    {
      field: "middleName",
      headerName: "Member Middle Name",
      editable: true,
      width: 200,
    },
    {
      field: "lastName",
      headerName: "Member Last Name",
      editable: true,
      width: 200,
    },
  ];

  const changeToDate = (date) => {
    let currentDate = new Date(date);
    return currentDate;
  };
  let filterdPro = [];

  if (programs) {
    programs.forEach((eachPro) => {
      if (eachPro.churchBranch === member.member.churchBranch) {
        filterdPro.push(eachPro);
      }
    });
  }

  filterdPro.forEach((eachProgram) => {
    memberData.push({
      _idd: eachProgram._id,
      field: eachProgram._id,
      headerName: `${eachProgram.programName} (${changeToDate(
        eachProgram.programDate
      )})`,
      editable: false,
      width: 150,
    });
  });

  //column definitions...
  const columns = memberData;
  //end

  let rowData = [];

  if (members.member) {
    members.member.forEach((eachMember) => {
      if (eachMember.churchBranch === member.member.churchBranch) {
        rowData.push({
          _id: eachMember._id,
          firstName: eachMember.firstName,
          middleName: eachMember.middleName,
          lastName: eachMember.lastName,
        });
      }
    });
  }
  if (rowData.length !== 0) {
    rowData.forEach((eachRowData) => {
      filterdPro.forEach((eachProgram) => {
        let field = eachProgram._id;
        let keyToFind = "memberId";
        let valueToFind = eachRowData._id;
        let found = eachProgram.attendedMembers.some(
          (obj) => obj[keyToFind] === valueToFind
        );
        if (found) {
          eachRowData[field] = "P";
        } else {
          eachRowData[field] = "A";
        }
      });
    });
  }
  //data definitions...
  const rows = rowData;
  return (
    <Box sx={{ height: 600, width: "100%", marginTop: "50px" }}>
      {rows ? (
        <DataGrid
          slots={{ toolbar: GridToolbar }}
          getRowId={(row) => row._id}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 7,
              },
            },
          }}
          pageSizeOptions={[5, 7, 10]}
          disableRowSelectionOnClick
        ></DataGrid>
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default Example;
