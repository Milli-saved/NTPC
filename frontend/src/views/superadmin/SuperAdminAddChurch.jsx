import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { getChurch, registerNewChurch } from "../../store/church/churchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllMembers } from "../../store/member/memberSlice";

export default function SuperAdminAddChurch() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { churchs, church } = useSelector((state) => state.church);
  const { members } = useSelector((state) => state.member);
  const [churchName, setChurchName] = useState("");
  const [churchAdmin, setchurchAdmin] = useState("");

  const churchNameHandler = (e) => {
    setChurchName(e.target.value);
  };
  const churchAdminHandler = (e) => {
    setchurchAdmin(e.target.value);
  };

  useEffect(() => {
    dispatch(getChurch());
    dispatch(getAllMembers());
  }, [dispatch, church]);

  function checkAdmin(eachMember) {
    return eachMember.role === "Admin";
  }
  let allAdmins;
  if (members.member) {
    allAdmins = members.member.filter(checkAdmin);
  }

  const addChurchHandler = () => {
    let data;
    if (churchAdmin) {
      data = {
        churchName,
        leadPastor: churchAdmin,
      };
    } else {
      data = {
        churchName,
      };
    }

    dispatch(registerNewChurch(data));
    handleClose();
  };

  return (
    <Fragment>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          className="text-center btn-primary btn-icon mt-lg-0 mt-md-0 mt-3"
          type="button"
          onClick={handleShow}
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
          <span>Add New Church</span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Church</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Church Name</Form.Label>
                <Form.Control
                  onChange={churchNameHandler}
                  type="dropdown"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Head Admin</Form.Label>
                <Form.Select
                  id="department"
                  name="department"
                  required
                  onChange={churchAdminHandler}
                >
                  <option> Select Admin</option>
                  {allAdmins
                    ? allAdmins.map((eachAdmin) => {
                        return (
                          <option value={eachAdmin._id}>
                            {eachAdmin.firstName + " " + eachAdmin.middleName}
                          </option>
                        );
                      })
                    : ""}
                </Form.Select>
              </Form.Group>
              <Button
                onClick={addChurchHandler}
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

      <Row>
        {!churchs.message &&
          churchs.map((eachChurch) => {
            return (
              <Col md="3" key={eachChurch._id} style={{ margin: "20px" }}>
                <Card sx={{ maxWidth: 455 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {eachChurch.churchName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      Lead Pastor:{" "}
                      {eachChurch.leadPastor && eachChurch.leadPastor.firstName
                        ? eachChurch.leadPastor.firstName
                        : ""}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An Amazing program on the book of John. A revelation on
                      the true identity and purpose of Jesus Christ by Pastor
                      Yonatan Aklilu. Every Friday from 11:00 to 2:00 (LC)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {eachChurch.updatedAt}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="btn btn-primary" size="small">
                      Edit
                    </Button>
                    <Button className="btn btn-primary" size="small">
                      Action
                    </Button>
                  </CardActions>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Fragment>
  );
}
