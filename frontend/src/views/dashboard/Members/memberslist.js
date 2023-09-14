import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PersonAddTwoTone, Settings } from "@material-ui/icons";
import { getAllMembers, updateMember } from "../../../store/member/memberSlice";
import Loader from "../../../components/Loader";
import { Grid, Typography } from "@mui/material";
import { getOneAccess, updateAccess } from "../../../store/access/accessSlice";

export default function CollapsibleTable() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [memberId, setMemberId] = useState("");

  const handleClose = () => {
    setSelectedMember({});
    setShow(false);
  };
  const handleClose1 = () => {
    setSelectedMember({});
    setShow1(false);
  };

  const [selectedMember, setSelectedMember] = useState(null);

  const { members, member } = useSelector((state) => state.member);
  const { access } = useSelector((state) => state.access);

  const actionHandler = (row) => {
    setShow(true);
    setMemberId(row._id);
    dispatch(getOneAccess(row._id));
    setSelectedMember(row);
    console.log("this is the ROW: ", row);
  };

  const actionHandler1 = (row) => {
    setShow1(true);
    setMemberId(row._id);
    setSelectedMember(row);
  };

  const [canAddMembers, setCanAddMember] = useState(
    access[0] ? access[0].canAddMembers : ""
  );
  const [canAddChurch, setCanAddChurch] = useState(
    access[0] ? access[0].canAddChurch : ""
  );
  const [canAddProgram, setCanAddProgram] = useState(
    access[0] ? access[0].canAddProgram : ""
  );
  const [canAddDepartment, setCanAddDepartment] = useState(
    access[0] ? access[0].canAddDepartment : ""
  );
  const [memberRole, setMemberRole] = useState(null);

  const updateHandler = () => {
    let data = {
      member: memberId,
      canAddMembers,
      canAddProgram,
      canAddDepartment,
      canAddChurch,
    };
    console.log("this is me: ", typeof data.canAddChurch);
    dispatch(updateAccess(data));
  };

  const updateMemberRole = () => {
    let memberData = {
      ...selectedMember,
      id: selectedMember._id,
      role: memberRole,
    };
    dispatch(updateMember(memberData));
    setTimeout(() => {
      // resetForm();
      dispatch(getAllMembers());
      setShow1(false);
    }, 3000);
  };

  // Column
  let columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "firstName",
      headerName: "First name",
      // editable: true,
      width: 250,
    },
    {
      field: "middleName",
      headerName: "Middle Name",
      // editable: true,
      width: 250,
    },
    {
      field: "lastName",
      headerName: "Last name",
      // editable: true,
      width: 250,
    },
    {
      field: "martialStatus",
      headerName: "Martial Stauts",
      // editable: true,
      width: 250,
    },
    {
      field: "role",
      headerName: "Role",
      // editable: true,
      width: 250,
    },
    {
      field: "actions",
      headerName: "View Access",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <Box width="50%" p="5px" display="flex">
            <Button variant="outlined" onClick={() => actionHandler(row)}>
              <Settings />
            </Button>
          </Box>
        );
      },
    },
    {
      field: "actions1",
      headerName: "Update Member",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <Box width="50%" p="5px" display="flex">
            <Button variant="outlined" onClick={() => actionHandler1(row)}>
              <PersonAddTwoTone />
            </Button>
          </Box>
        );
      },
    },
  ];

  //Rows

  const checkChurch = (eachMember) => {
    return eachMember.churchBranch === member.member.churchBranch;
  };

  let filteredMembers;
  if (members.member) {
    filteredMembers = members.member.filter(checkChurch);
  }
  const rows = filteredMembers;

  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>
              <Typography variant="h4">Member Details.</Typography>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width: "1000px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Form>
                  <Typography variant="h5">Member Status</Typography>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={
                        selectedMember
                          ? selectedMember.firstName +
                            " " +
                            selectedMember.middleName
                          : ""
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={
                        selectedMember ? "+" + selectedMember.phoneNumber : ""
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Martial Status</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={selectedMember ? selectedMember.martialStatus : ""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Online Member?</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={selectedMember ? selectedMember.onlineMember : ""}
                    />
                  </Form.Group>
                </Form>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" style={{ margin: "25px" }}>
                  Member Access
                </Typography>
                <Form>
                  <Form.Group>
                    <Form.Label>Can Add Members</Form.Label>
                    <select
                      className="form-select"
                      id="addMember"
                      name="addMember"
                      required
                      onChange={(e) => setCanAddMember(e.target.value)}
                      value={access[0] ? access[0].canAddMembers : false}
                    >
                      <option></option>
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Can Add Church</Form.Label>
                    <select
                      className="form-select"
                      id="addChurch"
                      name="addChurch"
                      required
                      onChange={(e) => setCanAddChurch(e.target.value)}
                      value={access[0] ? access[0].canAddChurch : false}
                    >
                      <option></option>
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Can Add Program</Form.Label>
                    <select
                      className="form-select"
                      id="canAddProgram"
                      name="canAddProgram"
                      required
                      onChange={(e) => setCanAddProgram(e.target.value)}
                      value={access[0] ? access[0].canAddProgram : false}
                    >
                      <option></option>
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Can Add Department</Form.Label>
                    <select
                      className="form-select"
                      id="canAddDepartment"
                      name="canAddDepartment"
                      required
                      onChange={(e) => setCanAddDepartment(e.target.value)}
                      value={access[0] ? access[0].canAddDepartment : false}
                    >
                      <option></option>
                      <option value={true}>True</option>
                      <option value={false}>False</option>
                    </select>
                  </Form.Group>

                  <Button
                    onClick={updateHandler}
                    variant="success"
                    style={{ margin: "10px" }}
                  >
                    Update
                  </Button>
                  <Button variant="danger" onClick={handleClose}>
                    Cancel
                  </Button>
                </Form>
              </Grid>
            </Grid>
          </Modal.Body>
        </Modal>
        <Modal show={show1} onHide={handleClose1} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>
              <Typography variant="h4">Member Details.</Typography>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width: "1000px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Form>
                  <Typography variant="h5">Member Status</Typography>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Member Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={
                        selectedMember
                          ? selectedMember.firstName +
                            " " +
                            selectedMember.middleName
                          : ""
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={
                        selectedMember ? "+" + selectedMember.phoneNumber : ""
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Martial Status</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={selectedMember ? selectedMember.martialStatus : ""}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Online Member?</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder=""
                      disabled
                      value={selectedMember ? selectedMember.onlineMember : ""}
                    />
                  </Form.Group>
                </Form>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" style={{ margin: "25px" }}>
                  Member Role
                </Typography>
                <Form>
                  <Form.Group>
                    <Form.Label>Member Role</Form.Label>
                    <select
                      className="form-select"
                      id="role"
                      name="role"
                      required
                      onChange={(e) => setMemberRole(e.target.value)}
                      value={memberRole ? memberRole : member.member.role}
                    >
                      <option></option>
                      <option value="program">Program</option>
                      <option value="Admin">Admin</option>
                      <option value="Member">Member</option>
                    </select>
                  </Form.Group>
                  <Button
                    onClick={updateMemberRole}
                    variant="success"
                    style={{ margin: "10px" }}
                  >
                    Update
                  </Button>
                  <Button variant="danger" onClick={handleClose1}>
                    Cancel
                  </Button>
                </Form>
              </Grid>
            </Grid>
          </Modal.Body>
        </Modal>
        <Button
          className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3"
          type="button"
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
          <Link to="/dashboard/app/user-add">
            <span className="text-white">New Member</span>
          </Link>
        </Button>
      </div>

      <Box sx={{ height: 600, width: "auto" }}>
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
    </>
  );
}
