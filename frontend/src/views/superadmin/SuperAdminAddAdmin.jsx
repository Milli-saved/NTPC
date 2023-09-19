import { useEffect, useState } from "react";
import { getAllMembers, updateMember } from "../../store/member/memberSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";
import { Group } from "@material-ui/icons";
import { Modal, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Loader from "../../components/Loader";

const SuperAdminAddAdmin = () => {
  const dispatch = useDispatch();

  const { members } = useSelector((state) => state.member);
  const [show, setShow] = useState(false);
  const [role, setRole] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClose = () => {
    setSelectedMember({});
    setShow(false);
  };

  const actionHandler = (row) => {
    setShow(true);
    setSelectedMember(row);
    setRole(row.role);
  };

  const roleHanlder = (e) => {
    setRole(e.target.value);
  };

  const updateHandler = () => {
    let data = {
      id: selectedMember._id,
      role: role,
    };
    dispatch(updateMember(data));
    setTimeout(() => {
      dispatch(getAllMembers());
      setShow(false);
    }, 3000);
  };

  useEffect(() => {
    dispatch(getAllMembers());
  }, [dispatch]);

  // Column
  let columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "firstName",
      headerName: "First name",
      width: 250,
    },
    {
      field: "middleName",
      headerName: "Middle Name",
      width: 250,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 250,
    },
    {
      field: "martialStatus",
      headerName: "Martial Stauts",
      width: 250,
    },
    {
      field: "role",
      headerName: "Role",
      width: 250,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: ({ row }) => {
        return (
          <Box width="50%" p="5px" display="flex">
            <Button variant="outlined" onClick={() => actionHandler(row)}>
              <Group />
            </Button>
          </Box>
        );
      },
    },
  ];

  const rows = members;

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
                  Member Role
                </Typography>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasictext">
                    <Form.Label>Role</Form.Label>
                    <Form.Select
                      id="role"
                      name="role"
                      value={role ? role : ""}
                      onChange={roleHanlder}
                    >
                      <option value="Admin">Admin</option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Member">Member</option>
                    </Form.Select>
                  </Form.Group>
                  <Button
                    variant="success"
                    style={{ margin: "10px" }}
                    onClick={updateHandler}
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
        {rows.member ? (
          <DataGrid
            slots={{ toolbar: GridToolbar }}
            getRowId={(row) => row._id}
            rows={rows.member}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 7,
                },
              },
            }}
            pageSizeOptions={[5,7,10]}
            disableRowSelectionOnClick
          ></DataGrid>
        ) : (
          <Loader />
        )}
      </Box>
    </>
  );
};

export default SuperAdminAddAdmin;
