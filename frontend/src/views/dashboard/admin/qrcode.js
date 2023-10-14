import React, { useState, memo, Fragment } from "react";
import {
  Row,
  Col,
  Image,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Card } from "react-bootstrap";
import FsLightbox from "fslightbox-react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import {bindActionCreators} from "redux"
import QRCode from "react-qr-code";

import { Link } from "react-router-dom";
// img
import shap2 from "../../../assets/images/shapes/02.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap6 from "../../../assets/images/shapes/06.png";

import icon1 from "../../../assets/images/icons/01.png";
import icon2 from "../../../assets/images/icons/02.png";
import icon3 from "../../../assets/images/icons/03.png";
import icon4 from "../../../assets/images/icons/04.png";
import icon5 from "../../../assets/images/icons/05.png";

import icon8 from "../../../assets/images/icons/08.png";
import icon6 from "../../../assets/images/icons/06.png";
import icon7 from "../../../assets/images/icons/07.png";

import avatars11 from "../../../assets/images/avatars/01.png";
import avatars22 from "../../../assets/images/avatars/avtar_1.png";
import avatars33 from "../../../assets/images/avatars/avtar_2.png";
import avatars44 from "../../../assets/images/avatars/avtar_3.png";
import avatars55 from "../../../assets/images/avatars/avtar_4.png";
import avatars66 from "../../../assets/images/avatars/avtar_5.png";

import avatars2 from "../../../assets/images/avatars/02.png";
import avatars3 from "../../../assets/images/avatars/03.png";
import avatars4 from "../../../assets/images/avatars/04.png";
import avatars5 from "../../../assets/images/avatars/05.png";
import ShareOffcanvas from "../../../components/partials/components/shareoffcanvas";
// Circularprogressbar
import Circularprogressbar from "../../../components/circularprogressbar";
import { getAllMembers } from "../../../store/member/memberSlice";

const Widgetcard = memo((props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggler, setToggler] = useState(false);
  const { members } = useSelector((state) => state.member);
  console.log("this are the members: ", members);
  useEffect(() => {
    dispatch(getAllMembers());
  }, []);
  useEffect(() => {
    if (!members) {
      navigate("/");
    }
  }, [members]);

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
      <Row>
        {members.member
          ? members.member.map((eachMember, index) => {
              return (
                <Col lg="4" key={index}>
                  <Card>
                    <Card.Body>
                      <div className="d-flex justify-content-between mb-4"></div>
                      <div className="d-flex  justify-content-start align-items-center mb-3">
                        <div className="card-profile-progress">
                          <Circularprogressbar
                            stroke={props.colorprimarymode}
                            Linecap="rounded"
                            trailstroke="#ddd"
                            strokewidth="4px"
                            width="100"
                            height="100"
                            value={60}
                            style={{ width: "140px", height: "140px" }}
                          >
                            <Image
                              className="theme-color-default-img  img-fluid rounded-circle card-img"
                              src={avatars11}
                              alt="profile-pic"
                            />
                            <Image
                              className="theme-color-purple-img img-fluid rounded-circle card-img"
                              src={avatars22}
                              alt="profile-pic"
                            />
                            <Image
                              className="theme-color-blue-img img-fluid rounded-circle card-img"
                              src={avatars33}
                              alt="profile-pic"
                            />
                            <Image
                              className="theme-color-green-img img-fluid rounded-circle card-img"
                              src={avatars55}
                              alt="profile-pic"
                            />
                            <Image
                              className="theme-color-yellow-img img-fluid rounded-circle card-img"
                              src={avatars66}
                              alt="profile-pic"
                            />
                            <Image
                              className="theme-color-pink-img img-fluid rounded-circle card-img"
                              src={avatars44}
                              alt="profile-pic"
                            />
                          </Circularprogressbar>
                        </div>
                        <div className="px-3">
                          <h5 className="pb-2">ID: {eachMember.IdNumber}</h5>
                          <h6 className="pb-2">
                            Name: {eachMember.firstName} {eachMember.middleName}{" "}
                          </h6>
                          <h6 className="pb-2">Gender: {eachMember.gender}</h6>
                          <h6 className="mb-0">
                            Department:{" "}
                            {
                              eachMember.department && eachMember.department
                                .departmentName
                            }
                          </h6>
                        </div>
                        <div
                          style={{
                            position: "absolute",
                            top: "45%",
                            right: "3.5%",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <QRCode size={100} value={eachMember._id} />
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : "Nothing to show."}
      </Row>
    </Fragment>
  );
});

Widgetcard.displayName = "Widgetcard";
export default Widgetcard;
