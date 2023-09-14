import React, { useEffect, useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loader";
import Alert from "react-bootstrap/Alert";

// features
import { login } from "../../../store/member/memberSlice";

// img
import auth1 from "../../../assets/images/auth/08.png";
// import { colorMix } from "../../../utilities/colors";

const SignIn = () => {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  // const [validated1, setValidated1] = useState(false);
  // const handleSubmit1 = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated1(true);
  // };
  //   let history = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { member, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.member
  );
  useEffect(() => {
    if (!member) {
      navigate("/");
    }
    if (member && member.member && member.member.role) {
      if (member.member.role === "Admin") {
        navigate("/dashboard");
      }
      if (member.member.role === "Super Admin") {
        navigate("/superadmin");
      }
      if (member.member.role === "program") {
        navigate("/program");
      }
      if (member.member.role === "Member") {
        navigate("/");
      }
    }
  }, [member, isError, isSuccess, navigate]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    let memberData = {
      userName,
      password,
    };
    dispatch(login(memberData));
  };

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    <Link
                      to="/dashboard"
                      className="navbar-brand d-flex align-items-center mb-3"
                    >
                      <svg
                        width="30"
                        // className="text-warning"
                        style={{ color: "#b92389" }}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-0.757324"
                          y="19.2427"
                          width="28"
                          height="4"
                          rx="2"
                          transform="rotate(-45 -0.757324 19.2427)"
                          fill="currentColor"
                        />
                        <rect
                          x="7.72803"
                          y="27.728"
                          width="28"
                          height="4"
                          rx="2"
                          transform="rotate(-45 7.72803 27.728)"
                          fill="currentColor"
                        />
                        <rect
                          x="10.5366"
                          y="16.3945"
                          width="16"
                          height="4"
                          rx="2"
                          transform="rotate(45 10.5366 16.3945)"
                          fill="currentColor"
                        />
                        <rect
                          x="10.5562"
                          y="-0.556152"
                          width="28"
                          height="4"
                          rx="2"
                          transform="rotate(45 10.5562 -0.556152)"
                          fill="currentColor"
                        />
                      </svg>
                      <h4
                        className="logo-title ms-3"
                        style={{ color: "#b92389" }}
                      >
                        New Testament Priests Church
                      </h4>
                    </Link>
                    <br></br>
                    <h2 className="mb-2 text-center">Sign In</h2>
                    <p className="text-center"></p>
                    <Form
                      noValidate
                      validated={validated}
                      onClick={handleSubmit}
                    >
                      <Row>
                        <Col lg="12">
                          {isError ? (
                            <Alert variant="danger" key="danger" dismissible>
                              {message}
                            </Alert>
                          ) : (
                            ""
                          )}
                        </Col>

                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="username" className="">
                              Username
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="username"
                              aria-describedby="username"
                              placeholder=" "
                              required
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              id="password"
                              aria-describedby="password"
                              placeholder=" "
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-between">
                          <Form.Check className="form-check mb-3">
                            <Form.Check.Input
                              type="checkbox"
                              id="customCheck1"
                            />
                            <Form.Check.Label htmlFor="customCheck1">
                              Remember Me
                            </Form.Check.Label>
                          </Form.Check>
                          <Link to="/auth/recoverpw">Forgot Password?</Link>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={onSubmit}
                          type="button"
                          variant="btn btn-primary"
                        >
                          {isLoading ? (
                            <div style={{ width: "5px" }}>
                              <Loader />
                            </div>
                          ) : undefined}
                          Sign In
                        </Button>
                      </div>
                      <p className="text-center my-3"></p>
                      <div className="d-flex justify-content-center"></div>
                      <p className="mt-3 text-center">
                        Don’t have an account?{" "}
                        <Link to="/auth/sign-up" className="text-underline">
                          Click here to sign up.
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg">
              <svg
                width="280"
                height="230"
                viewBox="0 0 431 398"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-157.085"
                    y="193.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -157.085 193.773)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="7.46875"
                    y="358.327"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 7.46875 358.327)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="61.9355"
                    y="138.545"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 61.9355 138.545)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="62.3154"
                    y="-190.173"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 62.3154 -190.173)"
                    fill="#3B8AFF"
                  />
                </g>
              </svg>
            </div>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-white p-0 mt-n1 vh-100 overflow-hidden"
            style={{
              borderLeft: "solid 10px",

              color: "#b92389",
            }}
          >
            <div className="h-100 d-flex align-items-center justify-content-center">
              <Image
                src={auth1}
                style={{
                  width: "500px",
                  height: "500px",
                }}
                className="Image-fluid gradient-main justify-content-center "
                alt="images"
              />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignIn;
