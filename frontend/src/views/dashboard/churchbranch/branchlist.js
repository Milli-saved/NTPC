import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Form } from "react-bootstrap";
import { Box } from "@mui/material";
import Loader from "../../../components/Loader";
import { DataGrid } from "@mui/x-data-grid";
import {
  getOneChurchBranch,
  registerNewChurchBranch,
} from "../../../store/churchBranch/churchBranchSlice";
import { getAllMembers } from "../../../store/member/memberSlice";
import { getOneAccess } from "../../../store/access/accessSlice";

export default function CollapsibleTable() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { member, members } = useSelector((state) => state.member);
  const { churchBranchs } = useSelector((state) => state.churchbranch);
  const { access } = useSelector((state) => state.access);

  useEffect(() => {
    dispatch(getAllMembers());
    dispatch(getOneChurchBranch(member.member.churchName));
    dispatch(getOneAccess(member.member._id));
  }, []);

  const [churchBranchName, setchurchBranchName] = useState("");
  const [churchBranchLocation, setChurchBranchLocation] = useState("");
  const [churchBranchLeadPastor, setchurchBranchLeadPastor] = useState("");

  let columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "churchBranchName",
      headerName: "Church Branch Name",
      editable: true,
      width: 250,
    },
    {
      field: "churchBranchLocation",
      headerName: "Church Branch Location",
      editable: true,
      width: 250,
    },
    {
      field: "churchBranchLeadPastor",
      headerName: "Church Branch Pastor",
      editable: true,
      width: 250,
    },
    {
      field: "approvalStatus",
      headerName: "Approval Status",
      editable: true,
      width: 250,
    },
  ];

  let churchBranchRow = [];

  if (churchBranchs.length > 0) {
    churchBranchs.forEach((eachChurchBranch) => {
      churchBranchRow.push({
        _id: eachChurchBranch._id,
        churchBranchName: eachChurchBranch.churchBranchName,
        churchBranchLocation: eachChurchBranch.churchBranchLocation,
        churchBranchLeadPastor:
          eachChurchBranch.churchBranchLeadPastor.firstName +
          " " +
          eachChurchBranch.churchBranchLeadPastor.middleName,
        approvalStatus: eachChurchBranch.approvalStatus,
      });
    });
  }

  const rows = churchBranchRow;

  let membersOfThisChurch = [];
  if (members.member) {
    members.member.forEach((eachMember) => {
      if (eachMember.churchName === member.member.churchName) {
        membersOfThisChurch.push(eachMember);
      }
    });
  }

  const programSubmitHandler = () => {
    let data = {
      church: member.member.churchName,
      churchBranchName,
      churchBranchLocation,
      churchBranchLeadPastor,
    };
    dispatch(registerNewChurchBranch(data));
    console.log("data: ", data);
  };

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
          disabled={access[0] ? !access[0].canAddChurch : true}
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
          <span>New Branch</span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Branch</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Branch Name</Form.Label>
                <Form.Control
                  onChange={(e) => setchurchBranchName(e.target.value)}
                  type="dropdown"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Branch Location</Form.Label>
                <Form.Control
                  onChange={(e) => setChurchBranchLocation(e.target.value)}
                  type="dropdown"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Lead Pastor</Form.Label>
                <Form.Select
                  onChange={(e) => setchurchBranchLeadPastor(e.target.value)}
                  value={churchBranchLeadPastor ? churchBranchLeadPastor : ""}
                  type="number"
                  placeholder=""
                  required
                >
                  <option></option>
                  {membersOfThisChurch
                    ? membersOfThisChurch.map((eachMember) => (
                        <option key={eachMember._id} value={eachMember._id}>
                          {" "}
                          {eachMember.firstName + " " + eachMember.middleName}
                        </option>
                      ))
                    : ""}
                </Form.Select>
              </Form.Group>
              <Button
                onClick={programSubmitHandler}
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
      {loader ? <Loader /> : ""}
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
