import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  ListGroup,
  Alert,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";

// img
import facebook from "../../../assets/images/brands/fb.svg";
import google from "../../../assets/images/brands/gm.svg";
import instagram from "../../../assets/images/brands/im.svg";
import linkedin from "../../../assets/images/brands/li.svg";
import auth5 from "../../../assets/images/auth/08.png";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../store/member/memberSlice";
import { getChurch } from "../../../store/church/churchSlice";
import { getChruchBranch } from "../../../store/churchBranch/churchBranchSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [martialStatus, setMartialStatus] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [memberType, setMemberType] = useState("");
  const [churchName, setChurchName] = useState("");
  const [churchBranch, setChurchBranch] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const { isError, message } = useSelector((state) => state.member);
  const { churchs } = useSelector((state) => state.church);
  const { churchBranchs } = useSelector((state) => state.churchbranch);

  let optionsOfChurchBranch = [];
  if (churchName) {
    churchBranchs.forEach((eachChurchBranch) => {
      if (eachChurchBranch.church === churchName) {
        optionsOfChurchBranch.push(eachChurchBranch);
      }
    });
  }

  const onSignUpHandler = () => {
    let memberData
    if(churchName){
      memberData = {
        firstName,
        middleName,
        lastName,
        userName,
        password,
        confirmPassword,
        role,
        dateOfBirth,
        martialStatus,
        phoneNumber,
        memberType,
        churchName,
        churchBranch,
      };
    }else{
      memberData = {
        firstName,
        middleName,
        lastName,
        userName,
        password,
        confirmPassword,
        role,
        dateOfBirth,
        martialStatus,
        phoneNumber,
        memberType,
      };
    }
    console.log("member Data: ", memberData);
    dispatch(register(memberData));
    navigate("/");
  };
  useEffect(() => {
    dispatch(getChurch());
    dispatch(getChruchBranch());
  }, [dispatch]);

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col
            md="6"
            className="d-md-block d-none bg-white p-0 mt-n1 vh-100 overflow-hidden"
            style={{
              borderRight: "solid 10px",

              color: "#b92389",
            }}
          >
            <div className="h-100 d-flex align-items-center justify-content-center">
              <Image
                src={auth5}
                style={{
                  width: "500px",
                  height: "500px",
                }}
                className="Image-fluid gradient-main justify-content-center "
                alt="images"
              />
            </div>
          </Col>

          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                  <Card.Body>
                    <Link
                      to="/dashboard"
                      className="navbar-brand d-flex align-items-center mb-3"
                    >
                      <svg
                        width="30"
                        // className="text-primary"
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
                    <h2 className="mb-2 text-center">Sign Up</h2>
                    {isError ? <Alert>{message}</Alert> : ""}
                    <p className="text-center"></p>
                    <Form
                      noValidate
                      validated={validated}
                      onClick={handleSubmit}
                    >
                      <Row>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="first-name" className="">
                              First Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="first-name"
                              placeholder=" "
                              name="firstName"
                              required
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="middle-name" className="">
                              Middle Name
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="middle-name"
                              placeholder=" "
                              name="middleName"
                              required
                              onChange={(e) => setMiddleName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="last-name" className="">
                              Last Name
                            </Form.Label>
                            <Form.Control
                              type="last-name"
                              className=""
                              id="last-name"
                              placeholder=" "
                              name="lastName"
                              required
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="userName" className="">
                              Username
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="userName"
                              placeholder=" "
                              name="userName"
                              required
                              onChange={(e) => setUserName(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Password
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              id="password"
                              placeholder=" "
                              name="password"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            {password !== confirmPassword ? (
                              <Form.Label
                                htmlFor="confirm-password"
                                className=""
                                style={{ color: "red" }}
                              >
                                Confirm Password
                              </Form.Label>
                            ) : (
                              <Form.Label
                                htmlFor="confirm-password"
                                className=""
                              >
                                Confirm Password
                              </Form.Label>
                            )}
                            <Form.Control
                              type="password"
                              className=""
                              id="confirm-password"
                              placeholder=" "
                              name="confirmPassword"
                              required
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="phoneNumber" className="">
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              id="phoneNumber"
                              placeholder="+251"
                              name="phoneNumber"
                              required
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="role" className="">
                              Role
                            </Form.Label>
                            <select
                              className="form-select"
                              id="role"
                              name="role"
                              required
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <option></option>
                              <option value="Member">Member</option>
                              {/* <option value="Lead Pastor">Lead Pastor</option> */}
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="dateOfBirth" className="">
                              Date Of Birth
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              name="dateOfBirth"
                              id="dateOfBirth"
                              placeholder=" "
                              required
                              onChange={(e) => setDateOfBirth(e.target.value)}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="martialStatus" className="">
                              Martial Status
                            </Form.Label>
                            <select
                              className="form-select"
                              id="martialStatus"
                              name="martialStatus"
                              required
                              onChange={(e) => setMartialStatus(e.target.value)}
                            >
                              Select Martial Status
                              <option></option>
                              <option value="Single">Single</option>
                              <option value="Married">Married</option>
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Label>Online Member?</Form.Label>
                          <select
                            className="form-select"
                            id="onlineMember"
                            name="onlineMember"
                            required
                            onChange={(e) => setMemberType(e.target.value)}
                          >
                            <option></option>
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                          </select>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="martialStatus" className="">
                              Church Name
                            </Form.Label>
                            <select
                              className="form-select"
                              id="churchName"
                              name="churchName"
                              required
                              onChange={(e) => setChurchName(e.target.value)}
                            >
                              Select Church
                              <option></option>
                              {churchs.map((eachChurch) => {
                                return (
                                  <option
                                    key={eachChurch._id}
                                    value={eachChurch._id}
                                  >
                                    {eachChurch.churchName}
                                  </option>
                                );
                              })}
                            </select>
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="churchBranch">
                              Church Branch
                            </Form.Label>
                            <select
                              className="form-select"
                              id="churchBranch"
                              name="churchBranch"
                              required
                              onChange={(e) => setChurchBranch(e.target.value)}
                            >
                              <option></option>
                              {optionsOfChurchBranch
                                ? optionsOfChurchBranch.map((eachOption) => (
                                    <option value={eachOption._id}>
                                      {eachOption.churchBranchName}
                                    </option>
                                  ))
                                : ""}
                            </select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={onSignUpHandler}
                          type="button"
                          variant="primary"
                        >
                          Sign Up
                        </Button>
                      </div>
                      <p className="text-center my-3"></p>
                      <div className="d-flex justify-content-center">
                        <ListGroup
                          as="ul"
                          className="list-group-horizontal list-group-flush"
                        >
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={facebook} alt="fb" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={google} alt="gm" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={instagram} alt="im" />
                            </Link>
                          </ListGroup.Item>
                          <ListGroup.Item
                            as="li"
                            className="list-group-item border-0 pb-0"
                          >
                            <Link to="#">
                              <Image src={linkedin} alt="li" />
                            </Link>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                      <p className="mt-3 text-center">
                        Already have an Account{" "}
                        <Link to="/auth/sign-in" className="text-underline">
                          Sign In
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg sign-bg-right">
              <svg
                width="280"
                height="230"
                viewBox="0 0 421 359"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-15.0845"
                    y="154.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -15.0845 154.773)"
                    fill="#3A57E8"
                  />
                  <rect
                    x="149.47"
                    y="319.328"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 149.47 319.328)"
                    fill="#3A57E8"
                  />
                  <rect
                    x="203.936"
                    y="99.543"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 203.936 99.543)"
                    fill="#3A57E8"
                  />
                  <rect
                    x="204.316"
                    y="-229.172"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 204.316 -229.172)"
                    fill="#3A57E8"
                  />
                </g>
              </svg>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignUp;
