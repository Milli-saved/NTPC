import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import imag from "../../../src/assets/images/auth/09.png";
import { Fragment } from "react";
import { Col, Row, Modal, Button, Form } from "react-bootstrap";
import { getPrograms, registerNewPro } from "../../store/program/programSlice";
import { getAllDepartment } from "../../store/department/departmentSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

export default function ImgMediaCard() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { programs } = useSelector((state) => state.program);
  const { departments } = useSelector((state) => state.department);

  const [programName, setProgramName] = useState("");
  const [department, setDepartment] = useState("");
  const [programDate, setProgramDate] = useState("");
  const [programTime, setprogramTime] = useState("");
  const [loader, setLoader] = useState(false);
  // const [programType, setProgramType] = useState("");
  // const [valid, setValid] = useState(false);

  const programNameHandler = (e) => {
    setProgramName(e.target.value);
  };
  const departmentHandler = (e) => {
    setDepartment(e.target.value);
  };
  const programDateHandler = (e) => {
    setProgramDate(e.target.value);
  };
  const programTimeHandler = (e) => {
    setprogramTime(e.target.value);
  };

  useEffect(() => {
    dispatch(getPrograms());
    dispatch(getAllDepartment());
  }, [dispatch]);

  const programSubmitHandler = () => {
    setLoader(true);
    let programData = {
      programName,
      department,
      programDate: new Date(`${programDate}T${programTime}`),
    };
    dispatch(registerNewPro(programData));
    setTimeout(() => {
      dispatch(getPrograms());
      setShow(false);
      setLoader(false);
    }, 3000);

    // history("/dashboard");
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
                  onChange={programNameHandler}
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
                  onChange={departmentHandler}
                >
                  <option></option>
                  {departments.map((eachDept) => {
                    return (
                      <option key={eachDept._id} value={eachDept._id}>
                        {eachDept.departmentName}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Program Date</Form.Label>
                <Form.Control
                  onChange={programDateHandler}
                  type="date"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label>Program Time</Form.Label>
                <Form.Control
                  onChange={programTimeHandler}
                  type="time"
                  placeholder=""
                  required
                />
              </Form.Group>
              <Button
                onClick={programSubmitHandler}
                variant="success"
                style={{ margin: "10px" }}
              >
                {loader ? <Loader /> : ""}
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
        {programs.map((eachProgram) => {
          return (
            <Col md="3" key={eachProgram._id} style={{ margin: "20px" }}>
              <Card sx={{ maxWidth: 455 }}>
                {/* <CardMedia
                  component="img"
                  alt="friday"
                  height="300"
                  src={imag}
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {eachProgram.programName}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {eachProgram.programDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    An Amazing program on the book of John. A revelation on the
                    true identity and purpose of Jesus Christ by Pastor Yonatan
                    Aklilu. Every Friday from 11:00 to 2:00 (LC)
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
        })}
      </Row>
    </Fragment>
  );
}
