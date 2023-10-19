import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import * as XLSX from "xlsx";

import { Link } from "react-router-dom";
// img
import avatars1 from "../../../assets/images/avatars/01.png";
import avatars2 from "../../../assets/images/avatars/avtar_1.png";
import avatars3 from "../../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../../assets/images/avatars/avtar_5.png";
import { register, registerExcel } from "../../../store/member/memberSlice";
import { useDispatch, useSelector } from "react-redux";

const SidebarItem = (props) => {
  const active = props.active ? "active" : "";
  return (
    <div className={`admin-sidebar-item ${active}`}>
      <div className="admin-sidebar-icon">
        <box-icon
          type={props.icon_name === "school" ? "solid" : ""}
          name={props.icon_name}
        ></box-icon>
      </div>
      <div className="admin-sidebar-name">{props.name}</div>
    </div>
  );
};

const UserAdd = () => {
  const dispatch = useDispatch();
  const [validFile, setValidFile] = useState(false);
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [memberData, setMemberData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const inputRef = useRef(null);

  const resetFileInput = () => {
    // 👇️ reset input value
    setValidFile(false);
    inputRef.current.value = null;
    setMemberData([]);
    setMessage("");
  };

  const { isSuccess, isError, isSuccessExcel, isErrorExcel } = useSelector(
    (state) => state.member
  );
  // if (isSuccess) {
  //   resetFileInput();
  // }

  useEffect(() => {
    if (isSuccessExcel) {
      resetFileInput();
    }
    if (isError) {
      setErrorMessage("Unable to Add excel data.");
    }
  }, []);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        try {
          const bufferArray = e.target.result;
          const workBook = XLSX.read(bufferArray, { type: "buffer" });
          const workSheetName = workBook.SheetNames[0];
          const workSheet = workBook.Sheets[workSheetName];
          workSheet.A1.w = "IdNumber";
          workSheet.C1.w = "firstName";
          workSheet.D1.w = "middleName";
          workSheet.E1.w = "lastName";
          workSheet.G1.w = "gender";
          workSheet.H1.w = "phoneNumber";
          workSheet.J1.w = "dateOfBirth";
          workSheet.K1.w = "martialStatus";
          workSheet.P1.w = "city";
          workSheet.Q1.w = "subCity";
          workSheet.R1.w = "woreda";
          workSheet.S1.w = "houseNumber";
          workSheet.T1.w = "specificAddressName";
          workSheet.U1.w = "baptized";
          workSheet.W1.w = "learningDicipleshipClass";
          workSheet.X1.w = "emergencyContactFullName";
          workSheet.Y1.w = "emergencyContactPhonenumber";
          workSheet.Z1.w = "previousChurchName";
          workSheet.AA1.w = "educationBackground";
          workSheet.AB1.w = "profession";
          workSheet.AC1.w = "workingInCompany";
          workSheet.AD1.w = "timeOfArrival";
          workSheet.AF1.w = "department";
          workSheet.AI1.w = "knowOfOurChurch";
          workSheet.AJ1.w = "previousTeams";
          workSheet.AK1.w = "vision";
          workSheet.AL1.w = "churchName";
          workSheet.AM1.w = "churchBranch";

          const memberData = XLSX.utils.sheet_to_json(workSheet);
          resolve(memberData);
          setValidFile(true);
        } catch (error) {
          setMessage("Invalid data type or format.");
          setValidFile(false);
          setMemberData([]);
          setTimeout(() => {
            setMessage("");
            resetFileInput();
          }, 5000);
        }
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
    promise.then((data) => {
      setMemberData(data);
    });
  };

  const inserExcelData = () => {

    for (const singleMember of memberData) {
      const ExcelMember = {
        IdNumber: singleMember.IdNumber,
        firstName: singleMember.firstName,
        middleName: singleMember.middleName,
        lastName: singleMember.lastName,
        userName: singleMember.firstName + singleMember.middleName,
        password: singleMember.firstName + singleMember.middleName,
        gender: singleMember.gender,
        phoneNumber: singleMember.phoneNumber,
        dateOfBirth: singleMember.dateOfBirth,
        martialStatus: singleMember.martialStatus,
        city: singleMember.city,
        subCity: singleMember.subCity,
        woreda: singleMember.woreda,
        houseNumber: singleMember.houseNumber,
        specificAddressName: singleMember.specificAddressName,
        baptized: singleMember.baptized === "yes" ? true : false,
        learningDicipleshipClass:
          singleMember.learningDicipleshipClass === "yes" ? true : false,
        emergencyContactFullName: singleMember.emergencyContactFullName,
        emergencyContactPhonenumber: singleMember.emergencyContactPhonenumber,
        previousChurchName: singleMember.previousChurchName,
        educationalBackground: singleMember.educationalBackground,
        profession: singleMember.profession,
        workingInCompany: singleMember.workingInCompany,
        timeOfArrival: singleMember.timeOfArrival,
        department: singleMember.department,
        knowOfOurChurch: singleMember.knowOfOurChurch,
        previousTeams: singleMember.previousTeams,
        vision: singleMember.vision,
        churchName: singleMember.churchName,
        churchBranch: singleMember.churchBranch,
        onlineMember: false,
        role: "member",
      };
      const memberDataExcel = { ...ExcelMember };
      dispatch(registerExcel(memberDataExcel));
    }
  };

  return (
    <>
      <div>
        <Row>
          <Col xl="3" lg="4" className="">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Add New User</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="form-group">
                    <div className="profile-img-edit position-relative">
                      <Image
                        className="theme-color-default-img  profile-pic rounded avatar-100"
                        src={avatars1}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-purple-img profile-pic rounded avatar-100"
                        src={avatars2}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-blue-img profile-pic rounded avatar-100"
                        src={avatars3}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-green-img profile-pic rounded avatar-100"
                        src={avatars5}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-yellow-img profile-pic rounded avatar-100"
                        src={avatars6}
                        alt="profile-pic"
                      />
                      <Image
                        className="theme-color-pink-img profile-pic rounded avatar-100"
                        src={avatars4}
                        alt="profile-pic"
                      />
                      <div className="upload-icone bg-primary">
                        <svg
                          className="upload-button"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#ffffff"
                            d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
                          />
                        </svg>
                        <Form.Control
                          className="file-upload"
                          type="file"
                          accept="image/*"
                        />
                      </div>
                    </div>
                    <div className="img-extension mt-3">
                      <div className="d-inline-block align-items-center">
                        <span>Only</span> <Link to="#">.jpg</Link>{" "}
                        <Link to="#">.png</Link> <Link to="#">.jpeg</Link>{" "}
                        <span>allowed</span>
                      </div>
                    </div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Form.Label>User Role:</Form.Label>
                    <select
                      name="type"
                      className="selectpicker form-control"
                      data-style="py-0"
                    >
                      <option>Member</option>
                      <option>Online Member</option>
                      <option>Disciple</option>
                      <option>Elder</option>
                    </select>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h5 className="card-title">Add New User From Excel File.</h5>
                  {isSuccessExcel ? (
                    <p style={{ color: "green" }}>Successfully added.</p>
                  ) : (
                    ""
                  )}
                </div>
              </Card.Header>
              <Card.Body>
                <div>
                  <section
                    style={{
                      border: "dotted",
                      width: "auto",
                      height: "250px",
                    }}
                  >
                    <form>
                      <h3
                        style={{
                          lineHeight: "2em",
                          textAlign: "center",
                          fontWeight: "bold",
                        }}
                      >
                        Upload an excel file here
                      </h3>
                      <input
                        ref={inputRef}
                        type="file"
                        style={{
                          lineHeight: "2em",
                          outline: "none",
                          margin: "65px",
                          display: "flex",
                        }}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (Math.round(file.size / 1000) > 5000) {
                            setMessage("File size to big.");
                            setTimeout(() => resetFileInput(), 5000);
                            setTimeout(() => setMessage(""), 5000);
                          } else {
                            readExcel(file);
                          }
                        }}
                      ></input>
                      <div
                        onClick={resetFileInput}
                        style={{
                          position: "absolute",
                          top: "85%",
                          left: "75%",
                        }}
                      >
                        {" "}
                        <p style={{ fontSize: "12px", color: "blue" }}>
                          Remove
                        </p>
                      </div>
                    </form>
                    <div
                      style={{
                        lineHeight: "2em",
                        position: "absolute",
                        left: "22%",
                        top: "69%",
                      }}
                    >
                      <button
                        className="admin-sidebar-link"
                        onClick={inserExcelData}
                      >
                        <div className=" pointer">
                          <SidebarItem
                            active={validFile ? true : false}
                            name="&nbsp;&nbsp;Register Now &nbsp;&nbsp;&nbsp;"
                            icon_name="edit"
                          />
                        </div>
                      </button>
                      <p
                        id="errMsg"
                        className={errMsg ? "errMsg" : "offscreen"}
                        aria-live="assertive"
                      >
                        {" "}
                        {message}{" "}
                      </p>
                    </div>
                  </section>
                  {isError ? <div>{errorMessage}</div> : undefined}
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="9" lg="8">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">New User Information</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <div className="new-user-info">
                  <form>
                    <div className="row">
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="fname">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="fname"
                          placeholder="First Name"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="lname">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="lname"
                          placeholder="Last Name"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="add1">Middle Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="add1"
                          placeholder="Middle Name"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="add2">Street Address</Form.Label>
                        <Form.Control
                          type="text"
                          id="add2"
                          placeholder="Street Address"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-12 form-group">
                        <Form.Label htmlFor="cname">Company Name</Form.Label>
                        <Form.Control
                          type="text"
                          id="cname"
                          placeholder="Company Name"
                        />
                      </Form.Group>
                      <Form.Group className="col-sm-12 form-group">
                        <Form.Label>Country</Form.Label>
                        <select
                          name="type"
                          className="selectpicker form-control"
                          data-style="py-0"
                        >
                          <option>Select Country</option>
                          <option>Addis Ababa</option>
                          <option>Hawasa</option>
                          <option>Adama</option>
                          <option>Jimma</option>
                          <option>Sodo</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="col-md-6  form-group">
                        <Form.Label htmlFor="mobno">Mobile Number</Form.Label>
                        <Form.Control
                          type="text"
                          id="mobno"
                          placeholder="Mobile Number"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6  form-group">
                        <Form.Label>Martial Status</Form.Label>
                        <select
                          name="type"
                          className="selectpicker form-control"
                          data-style="py-0"
                        >
                          <option>Married</option>
                          <option>Single</option>
                        </select>
                      </Form.Group>
                      <Form.Group className="col-md-6  form-group">
                        <Form.Label htmlFor="email">Email:</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          placeholder="Email"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="pno">Date Of Birth:</Form.Label>
                        <Form.Control
                          type="text"
                          id="pno"
                          placeholder="Date Of Birth"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-12 form-group">
                        <Form.Label htmlFor="city">Town/City:</Form.Label>
                        <Form.Control
                          type="text"
                          id="city"
                          placeholder="Town/City"
                        />
                      </Form.Group>
                    </div>
                    <hr />
                    <h5 className="mb-3">Security</h5>
                    <div className="row">
                      <Form.Group className="col-md-12 form-group">
                        <Form.Label htmlFor="uname">User Name:</Form.Label>
                        <Form.Control
                          type="text"
                          id="uname"
                          placeholder="User Name"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="pass">Password:</Form.Label>
                        <Form.Control
                          type="password"
                          id="pass"
                          placeholder="Password"
                        />
                      </Form.Group>
                      <Form.Group className="col-md-6 form-group">
                        <Form.Label htmlFor="rpass">
                          Repeat Password:
                        </Form.Label>
                        <Form.Control
                          type="password"
                          id="rpass"
                          placeholder="Repeat Password "
                        />
                      </Form.Group>
                    </div>

                    <Button type="button" variant="btn btn-primary">
                      Add New User
                    </Button>
                  </form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserAdd;
