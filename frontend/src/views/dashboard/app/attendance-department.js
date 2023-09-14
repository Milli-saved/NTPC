import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllDepartment } from "../../../store/department/departmentSlice";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Loader from "../../../components/Loader";
import { getPrograms } from "../../../store/program/programSlice";
import { getAllMembers } from "../../../store/member/memberSlice";
import { SettingsCellSharp } from "@material-ui/icons";

const AttendanceDepartment = () => {
  const dispatch = useDispatch();

  const { departments } = useSelector((state) => state.department);
  const { member, members } = useSelector((state) => state.member);
  const { programs } = useSelector((state) => state.program);

  let deptOfThisChurch = [];

  if (departments) {
    departments.forEach((eachDept) => {
      if (eachDept.churchBranch === member.member.churchBranch) {
        deptOfThisChurch.push(eachDept);
      }
    });
  }

  useEffect(() => {
    dispatch(getAllDepartment());
    dispatch(getPrograms());
    dispatch(getAllMembers());
  }, [dispatch]);

  const [deptName, setDeptName] = useState("");
  const [startingDate, setStartingDate] = useState();
  const [endingDate, setEndingDate] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleStartingDate = (event) => {
    let date = event.target.value;
    // let formatted = date.toLocaleDateString("en-GB");
    setStartingDate(date);
  };

  const handleSearch = () => {
    let data = {
      deptName,
      startingDate: new Date(startingDate),
      endingDate: new Date(endingDate),
    };
    console.log("the data: ", data);
    handleShow();
  };

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

  let filterdPro = [];

  if (programs) {
    programs.forEach((eachPro) => {
      if (eachPro.churchBranch === member.member.churchBranch) {
        filterdPro.push(eachPro);
      }
    });
  }

  const changeToDate = (date) => {
    let currentDate = new Date(date);
    return currentDate;
  };

  filterdPro.forEach((eachProgram) => {
    if (eachProgram.department._id === deptName) {
      let thyDate = new Date(eachProgram.programDate);
      if (
        thyDate >= new Date(startingDate) &&
        new Date(endingDate) >= thyDate
      ) {
        memberData.push({
          _idd: eachProgram._id,
          field: eachProgram._id,
          headerName: `${eachProgram.programName} (${changeToDate(
            eachProgram.programDate
          )})`,
          editable: false,
          width: 150,
        });
      }
    }
  });

  //column definitions...
  let columns = memberData;

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
    <>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attendance Based On Selection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
      </Modal>
      <Row className="justify-content-center">
        <Box sx={{ height: "auto", width: "100%", marginTop: "50px" }}>
          <p style={{ color: "black" }}>
            With our user-friendly system, you have the flexibility to choose
            your desired Department, and we will generate an accurate attendance
            report based on the members assigned to that department. Our
            advanced software streamlines the process, ensuring that you can
            effortlessly track and manage attendance for each department.
          </p>
        </Box>
        <Col md="8">
          <Form.Group>
            <Form.Label style={{ color: "black" }}>
              Select Department
            </Form.Label>
            <select
              className="form-select"
              id="department"
              name="department"
              required
              value={deptName ? deptName : ""}
              onChange={(e) => setDeptName(e.target.value)}
            >
              <option></option>
              {deptOfThisChurch
                ? deptOfThisChurch.map((eachDepartment) => (
                    <option key={eachDepartment._id} value={eachDepartment._id}>
                      {eachDepartment.departmentName}
                    </option>
                  ))
                : ""}
            </select>
          </Form.Group>
          <Row style={{ marginTop: "15px" }}>
            <Col md="6">
              <Form.Group>
                <Form.Label>Attendance Starting Date</Form.Label>
                <Form.Control
                  onChange={handleStartingDate}
                  type="date"
                  name="stratingDate"
                />
              </Form.Group>
            </Col>
            <Col md="6">
              <Form.Group>
                <Form.Label>Attendance Ending Date</Form.Label>
                <Form.Control
                  onChange={(e) => setEndingDate(e.target.value)}
                  type="date"
                  name="endingDate"
                />
              </Form.Group>
            </Col>
          </Row>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AttendanceDepartment;
