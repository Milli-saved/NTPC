import React, { Fragment, useState } from "react";
import FsLightbox from "fslightbox-react";
import { Row, Col, Image, Nav, Tab } from "react-bootstrap";
import Card from "../../../components/Card";
import FormWizard from "../from/form-wizard";
import { Link } from "react-router-dom";

// img

import avatars11 from "../../../assets/images/avatars/01.png";
import avatars22 from "../../../assets/images/avatars/avtar_1.png";
import avatars33 from "../../../assets/images/avatars/avtar_2.png";
import avatars44 from "../../../assets/images/avatars/avtar_3.png";
import avatars55 from "../../../assets/images/avatars/avtar_4.png";
import avatars66 from "../../../assets/images/avatars/avtar_5.png";

import icon1 from "../../../assets/images/icons/01.png";
import icon2 from "../../../assets/images/icons/02.png";
import icon4 from "../../../assets/images/icons/04.png";
import icon8 from "../../../assets/images/icons/08.png";

import icon5 from "../../../assets/images/icons/05.png";
import shap2 from "../../../assets/images/shapes/02.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap6 from "../../../assets/images/shapes/06.png";

// import ShareOffcanvas from "../../../components/partials/components/shareoffcanvas";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [toggler, setToggler] = useState();
  const { memberEditing, member } = useSelector((state) => state.member);
  const [memberData, setMemberData] = useState(
    memberEditing ? memberEditing : null
  );
  return (
    <Fragment>
      <FsLightbox
        toggler={toggler}
        sources={[
          icon4,
          shap2,
          icon8,
          shap4,
          icon2,
          shap6,
          icon5,
          shap4,
          icon1,
        ]}
      />
      <Tab.Container defaultActiveKey="fourth">
        <Row>
          <Col md="12" sm="12" lg="12">
            <Card>
              <Card.Body>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
                      <Image
                        className="theme-color-default-img  img-fluid rounded-pill avatar-100"
                        src={avatars11}
                        alt="profile-pic"
                      />
                    </div>
                    <div className="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
                      <h4 className="me-2 h4">
                        {member.member.firstName} {member.member.middleName}
                      </h4>
                      <span> Administrator</span>
                    </div>
                  </div>
                  <Nav
                    as="ul"
                    className="d-flex nav-pills mb-0 text-center profile-tab"
                    data-toggle="slider-tab"
                    id="profile-pills-tab"
                    role="tablist"
                  >
                    <Nav.Item as="li">
                      <Nav.Link eventKey="fourth">Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                      <Nav.Link eventKey="second">Update Profile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            lg="12"
            md="12"
            sm="12"
            className="d-flex justify-content-center"
          >
            <Tab.Content className="profile-content">
              <Tab.Pane eventKey="second" id="profile-activity">
                <FormWizard />
              </Tab.Pane>

              <Tab.Pane eventKey="fourth" id="profile-profile">
                <Card style={{ width: "50%" }}>
                  <Card.Header>
                    <div className="header-title">
                      <h4 className="card-title" style={{ margin: "0 500px" }}>
                        Profile
                      </h4>

                      {!memberData && (
                        <h5
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            color: "red",
                          }}
                        >
                          Please select a member from member table
                        </h5>
                      )}
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="text-center">
                      <div className="user-profile">
                        <Image
                          className="theme-color-default-img  rounded-pill avatar-130 img-fluid"
                          src={avatars11}
                          alt="profile-pic"
                        />
                        <Image
                          className="theme-color-purple-img rounded-pill avatar-130 img-fluid"
                          src={avatars22}
                          alt="profile-pic"
                        />
                        <Image
                          className="theme-color-blue-img rounded-pill avatar-130 img-fluid"
                          src={avatars33}
                          alt="profile-pic"
                        />
                        <Image
                          className="theme-color-green-img rounded-pill avatar-130 img-fluid"
                          src={avatars55}
                          alt="profile-pic"
                        />
                        <Image
                          className="theme-color-yellow-img rounded-pill avatar-130 img-fluid"
                          src={avatars66}
                          alt="profile-pic"
                        />
                        <Image
                          className="theme-color-pink-img rounded-pill avatar-130 img-fluid"
                          src={avatars44}
                          alt="profile-pic"
                        />
                      </div>
                      <div className="mt-3">
                        <h3 className="d-inline-block">
                          {memberData && memberData.firstName}{" "}
                          {memberData && memberData.lastName}
                        </h3>
                        <br />
                        <p className="d-inline-block pl-3">
                          {memberData && memberData.role}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "400px" }}>
                  <Card.Header>
                    <div className="header-title">
                      <h4 className="card-title">Member Info</h4>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col lg="6">
                        <div className="user-bio">
                          <p></p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Joined</h6>
                          <p>Nov 15, 2022</p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Address</h6>
                          <p>City: {memberData && memberData.address.city}</p>
                          <p>
                            Sub City: {memberData && memberData.address.subCity}
                          </p>
                          <p>
                            Woreda: {memberData && memberData.address.woreda}
                          </p>
                          <p>
                            House Number:{" "}
                            {memberData && memberData.address.houseNumber}
                          </p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">phone Number</h6>
                          <p>
                            <Link to="#" className="text-body">
                              {" "}
                              {memberData && memberData.phoneNumber}
                            </Link>
                          </p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Department</h6>
                          <p>
                            <Link to="#" className="text-body" target="_blank">
                              {memberData &&
                                memberData.department.departmentName}
                            </Link>
                          </p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Gender</h6>
                          <p>{memberData && memberData.gender}</p>
                        </div>
                      </Col>
                      <Col lg="6">
                        <div className="mt-2">
                          <h6 className="mb-1">Martial Stauts</h6>
                          <p>{memberData && memberData.martialStatus}</p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Previous Church</h6>
                          <p>{memberData && memberData.previousChurchName}</p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Learning Decipleship class</h6>
                          <p>
                            {memberData && memberData.learningDicipleshipClass
                              ? "Yes, Learning Discipleship"
                              : "No, not learning Discipleship."}
                          </p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">Emergency Contact Name</h6>
                          <p>
                            {memberData && memberData.emergencyContactFullName}
                          </p>
                        </div>
                        <div className="mt-2">
                          <h6 className="mb-1">
                            EmergencyContact Phone Number
                          </h6>
                          <p>
                            {memberData &&
                              memberData.emergencyContactPhonenumber}
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

export default UserProfile;
