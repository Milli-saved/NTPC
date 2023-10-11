import React, { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import QRScanner from "react-qr-scanner";
import { Attendance, getPrograms } from "../../store/program/programSlice";

const AttendanceRegister = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrograms());
  }, [dispatch]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [scan, setScan] = useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow1 = (id) => {
    setSelectedProgram(id);
    setShow1(true);
  };
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  const handleClose1 = () => setShow1(false);
  const { programs } = useSelector((state) => state.program);
  const handleScan = (event) => {
    if (event) {
      setValue(event.text);
    }
  };
  const handleError = (err) => {
    setError(err);
  };
  const scanButton = () => {
    setScan(!scan);
    setError("");
  };

  const submitHandler = () => {
    let data = {
      programId: selectedProgram,
      member: value,
    };
    dispatch(Attendance(data));
    setValue("");
  };
  let now = new Date();
  return (
    <>
      <div
        className="mb-3"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Modal show={show} onHide={handleClose}></Modal>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Scan Attendance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                display: "d-flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <div>
                <Button
                  onClick={scanButton}
                  type="button"
                  variant="btn btn-primary"
                >
                  Scan QR
                </Button>
                {error && (
                  <p style={{ color: "red" }}>Requested Device Not Found.</p>
                )}
              </div>
              <div
                className="mt-2"
                style={{
                  display: "d-flex",
                  justifyContent: "center",
                }}
              >
                {scan === true ? (
                  <QRScanner
                    onScan={handleScan}
                    onError={handleError}
                    style={{ width: 200, height: 200 }}
                  />
                ) : undefined}
              </div>
            </div>
            <div
              style={{
                display: "d-flex",
                justifyContent: "center",
              }}
            >
              <div className="col-md-4 ">
                <div className="form-group inline">
                  <label className="form-label">ID </label>
                  <input
                    className="form-control"
                    type="text"
                    value={value ? value : ""}
                    onChange={changeHandler}
                  />
                </div>
              </div>
            </div>
            <div>
              <Button
                onClick={submitHandler}
                type="submit"
                variant="btn btn-primary"
              >
                Submit
              </Button>
              {error && (
                <p style={{ color: "red" }}>Requested Device Not Found.</p>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </div>
      <Row style={{ marginTop: "30px" }}>
        {programs.map((eachProgram) => {
          return (
            <Col md="3" key={eachProgram._id} style={{ margin: "20px" }}>
              <Card
                sx={{ maxWidth: 455 }}
                onClick={() => handleShow1(eachProgram._id)}
              >
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
    </>
  );
};

export default AttendanceRegister;
