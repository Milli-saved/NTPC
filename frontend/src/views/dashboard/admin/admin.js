import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Fragment } from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import {
  getPrograms,
  registerNewPro,
} from "../../../store/program/programSlice";
import { getAllDepartment } from "../../../store/department/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import { getOneAccess } from "../../../store/access/accessSlice";

export default function ImgMediaCard() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { programs, isLoading } = useSelector((state) => state.program);
  const { departments } = useSelector((state) => state.department);
  const { member } = useSelector((state) => state.member);
  const { access } = useSelector((state) => state.access);

  let deptOfThisChurch = [];

  if (departments) {
    departments.forEach((eachDetp) => {
      if (eachDetp.churchBranch === member.member.churchBranch) {
        deptOfThisChurch.push(eachDetp);
      }
    });
  }

  const [programName, setProgramName] = useState("");
  const [department, setDepartment] = useState("");
  const [programDate, setProgramDate] = useState("");
  const [programTime, setprogramTime] = useState("");
  const [programType, setProgramType] = useState("");

  useEffect(() => {
    dispatch(getPrograms());
    dispatch(getAllDepartment());
    dispatch(getOneAccess(member.member._id));
  }, [dispatch]);

  const programSubmitHandler = () => {
    let programData = {
      programName,
      department,
      programDate: `${programDate}T${programTime}+00:00`,
      // programTime,
      programType,
      churchBranch: member.member.churchBranch,
    };
    dispatch(registerNewPro(programData));
    setTimeout(() => {
      dispatch(getPrograms());
      handleClose(false);
    }, 3000);
  };

  let filteredPro = [];
  if (programs) {
    programs.forEach((eachPro) => {
      if (eachPro.churchBranch === member.member.churchBranch) {
        filteredPro.push(eachPro);
      }
    });
  }

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
          <span>New Program</span>
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Program</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Program Name</Form.Label>
                <Form.Control
                  onChange={(e) => setProgramName(e.target.value)}
                  type="dropdown"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Department</Form.Label>
                <Form.Select
                  className="department"
                  id="department"
                  name="department"
                  placeholder="Department"
                  required
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option></option>
                  {deptOfThisChurch
                    ? deptOfThisChurch.map((eachDept) => {
                        return (
                          <option key={eachDept._id} value={eachDept._id}>
                            {eachDept.departmentName}
                          </option>
                        );
                      })
                    : ""}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Program Date</Form.Label>
                <Form.Control
                  onChange={(e) => setProgramDate(e.target.value)}
                  type="date"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Program Time</Form.Label>
                <Form.Control
                  type="time"
                  onChange={(e) => setprogramTime(e.target.value)}
                  required
                  placeholder="Time"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Program Type</Form.Label>
                <Form.Select onChange={(e) => setProgramType(e.target.value)}>
                  <option></option>
                  <option value={"permanent"}>Permanent</option>
                  <option value={"event"}>Event</option>
                </Form.Select>
              </Form.Group>
              <Button
                onClick={programSubmitHandler}
                variant="success"
                style={{ margin: "10px" }}
              >
                {isLoading ? <Loader /> : ""}
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
        {filteredPro ? (
          filteredPro.map((eachProgram) => {
            return (
              <Col md="3" key={eachProgram._id} style={{ margin: "20px" }}>
                <Card sx={{ maxWidth: 455 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {eachProgram.programName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {eachProgram.programDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An Amazing program on the book of John. A revelation on
                      the true identity and purpose of Jesus Christ by Pastor
                      Yonatan Aklilu. Every Friday from 11:00 to 2:00 (LC)
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className="btn btn-primary" size="small">
                      Share
                    </Button>
                    <Button className="btn btn-primary" size="small">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Col>
            );
          })
        ) : (
          <Loader />
        )}
      </Row>
    </Fragment>
  );
}
