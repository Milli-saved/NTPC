import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  getAllDepartment,
  registerNewDepartment,
} from "../../../store/department/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../../components/Loader";
import { getAllMembers } from "../../../store/member/memberSlice";
import { getOneAccess } from "../../../store/access/accessSlice";

export default function CollapsibleTable() {
  const dispatch = useDispatch();

  const { departments } = useSelector((state) => state.department);
  const { member, members } = useSelector((state) => state.member);
  const { access } = useSelector((state) => state.access);

  useEffect(() => {
    dispatch(getAllDepartment());
    dispatch(getAllMembers());
    dispatch(getOneAccess(member.member._id));
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [departmentName, setDepartmentName] = useState("");
  const [deptLeader, setDeptLeader] = useState("");
  const [deptDate, setDeptDate] = useState("");

  const resetForm = () => {
    setDepartmentName("");
    setDeptLeader("");
    setDeptDate("");
  };

  const departmentSubmitHandler = () => {
    let data = {
      departmentName,
      departmentLeaders: deptLeader,
      departmentWeeklyProgram: deptDate,
      churchBranch: member.member.churchBranch,
    };
    dispatch(registerNewDepartment(data));
    setTimeout(() => {
      resetForm();
      dispatch(getAllDepartment());
      setShow(false);
    }, 3000);
  };

  let membersOfThisChurch = [];
  if (members.member) {
    members.member.forEach((eachMember) => {
      if (eachMember.churchName === member.member.churchName) {
        membersOfThisChurch.push(eachMember);
      }
    });
  }

  let columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "departmentName",
      headerName: "Department name",
      editable: true,
      width: 250,
    },
    {
      field: "departmentWeeklyProgram",
      headerName: "Department Weekly Pro",
      editable: true,
      width: 250,
    },
    {
      field: "departmentLeaders",
      headerName: "Department Leader",
      editable: true,
      width: 250,
    },
  ];

  let departmentsOfThis = [];
  if (departments) {
    departments.forEach((eachDept) => {
      if (eachDept.churchBranch === member.member.churchBranch) {
        departmentsOfThis.push(eachDept);
      }
    });
  }
  const rows = departmentsOfThis;

  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3"
          type="button"
          onClick={handleShow}
          disabled={access[0] ? !access[0].canAddDepartment : true}
        >
          <i className="btn-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </i>
          <span>New Department</span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Department</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Department Name</Form.Label>
                <Form.Control
                  onChange={(e) => setDepartmentName(e.target.value)}
                  value={departmentName ? departmentName : ""}
                  type="dropdown"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Leader</Form.Label>
                <Form.Select
                  onChange={(e) => setDeptLeader(e.target.value)}
                  value={deptLeader ? deptLeader : ""}
                  type="number"
                  placeholder=""
                  required
                >
                  <option></option>
                  {membersOfThisChurch
                    ? membersOfThisChurch.map((eachMember) => (
                        <option
                          key={eachMember._id}
                          value={
                            eachMember.firstName + " " + eachMember.middleName
                          }
                        >
                          {" "}
                          {eachMember.firstName + " " + eachMember.middleName}
                        </option>
                      ))
                    : ""}
                </Form.Select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Departments Weekly Program</Form.Label>
                <Form.Control
                  type="date"
                  name="deptDate"
                  onChange={(e) => setDeptDate(e.target.value)}
                  value={deptDate ? deptDate : ""}
                />
              </Form.Group>
              <Button
                onClick={departmentSubmitHandler}
                variant="success"
                style={{ margin: "10px" }}
              >
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <Box sx={{ height: 600, width: "100%" }}>
        {rows ? (
          <DataGrid
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
    </>
  );
}
