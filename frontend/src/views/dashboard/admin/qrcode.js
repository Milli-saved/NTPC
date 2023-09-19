import {useState,memo,Fragment} from 'react'
import {Row,Col,Image,Form,Button,InputGroup,FormControl} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import FsLightbox from 'fslightbox-react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect,  } from 'react';
import { useSelector } from "react-redux";

// import {bindActionCreators} from "redux"
import QRCode from 'react-qr-code';


import {Link} from 'react-router-dom'
// img
import shap2 from '../../../assets/images/shapes/02.png'
import shap4 from '../../../assets/images/shapes/04.png'
import shap6 from '../../../assets/images/shapes/06.png'

import icon1 from '../../../assets/images/icons/01.png'
import icon2 from '../../../assets/images/icons/02.png'
import icon3 from '../../../assets/images/icons/03.png'
import icon4 from '../../../assets/images/icons/04.png'
import icon5 from '../../../assets/images/icons/05.png'

import icon8 from '../../../assets/images/icons/08.png'
import icon6 from '../../../assets/images/icons/06.png'
import icon7 from '../../../assets/images/icons/07.png'

import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'

import avatars2 from '../../../assets/images/avatars/02.png'
import avatars3 from '../../../assets/images/avatars/03.png'
import avatars4 from '../../../assets/images/avatars/04.png'
import avatars5 from '../../../assets/images/avatars/05.png'
import ShareOffcanvas from '../../../components/partials/components/shareoffcanvas'
// Circularprogressbar
import Circularprogressbar from '../../../components/circularprogressbar'



const Widgetcard = memo((props) => {
    const navigate = useNavigate()
    const [toggler, setToggler] = useState(false);
    const { member } = useSelector((state) => state.member);

  useEffect(() => {
    if (!member) {
      navigate("/");
    }
  }, [member]);
    return (
        
        <Fragment>
          <FsLightbox
                toggler={ toggler }
                sources={ [icon4,shap2,icon8,shap4,icon2,shap6,icon5,shap4,icon1] }
            />
            <Row>
                {/* <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-center" style={{ alignSelf: 'left' }}>
                                <div className="d-flex flex-column text-center align-items-center justify-content-between ">
                                    <div >
                                    <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                    </div>
                                    <div className="mt-3 text-center text-black-50">
                                        <p>Slate helps you see how many more days you need</p>
                                    </div>
                                    <div className="d-flex icon-pill">
                                        <Link to="#" className="btn btn-sm rounded-pill px-2 py-2 ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-primary" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                        <Link to="#" className="btn btn-sm rounded-pill px-2 py-2  ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-danger" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                            </svg>
                                        </Link>
                                        <Link to="#" className="btn btn-sm rounded-pill px-2 py-2 ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-success" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>             */}
                {/* <Col md="4">
                    <Card>
                        <Card.Header>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div className="p-2 rounded bg-warning disabled">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="none" viewBox="0 0 24 24" stroke="white">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg> 
                                    </div>
                                    <h4 className="px-3">Conversion</h4>
                                </div> 
                                <div className="d-flex align-items-center justify-content-end">
                                    <Link to="#" className=" border rounded">
                                        <svg width="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9393 12.0129H15.9483" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11.9301 12.0129H11.9391" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M7.92128 12.0129H7.93028" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form className="d-grid gap-card">
                                <Form.Group className="mb-2">
                                    <InputGroup>
                                        <FormControl type="text" placeholder="1000" aria-label="Recipient's username" aria-describedby="basic-addon3"/>
                                        <InputGroup.Text as="span" className="input-group-text" id="basic-addon3">GRD</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <InputGroup>
                                        <FormControl type="text" placeholder="100" aria-label="Recipient's username" aria-describedby="basic-addon4"/>
                                        <InputGroup.Text as="span" className="input-group-text" id="basic-addon4">USD</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <InputGroup>
                                        <FormControl type="text" placeholder="150" aria-label="Recipient's username" aria-describedby="basic-addon4"/>
                                        <InputGroup.Text as="span" className="input-group-text" id="basic-addon4">Euro</InputGroup.Text>
                                    </InputGroup>
                                </Form.Group>
                                <Button variant="btn btn-primary">Archive</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col> */}
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG200</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG201</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG202</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG203</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG204</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG205</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG206</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG207</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                
                                
                            </div>
                            <div className="d-flex  justify-content-start align-items-center mb-3">
                            <div className="card-profile-progress">
                                        <Circularprogressbar  stroke={props.colorprimarymode} Linecap='rounded' trailstroke='#ddd' strokewidth="4px" width="100" height="100" value={60} style={{width:'140px', height:'140px',}}>
                                        <Image className="theme-color-default-img  img-fluid rounded-circle card-img" src={avatars11} alt="profile-pic"/>
                                        <Image className="theme-color-purple-img img-fluid rounded-circle card-img" src={avatars22} alt="profile-pic"/>
                                        <Image className="theme-color-blue-img img-fluid rounded-circle card-img" src={avatars33} alt="profile-pic"/>
                                        <Image className="theme-color-green-img img-fluid rounded-circle card-img" src={avatars55} alt="profile-pic"/>
                                        <Image className="theme-color-yellow-img img-fluid rounded-circle card-img" src={avatars66} alt="profile-pic"/>
                                        <Image className="theme-color-pink-img img-fluid rounded-circle card-img" src={avatars44} alt="profile-pic"/>    
                                        </Circularprogressbar>
                                    </div>
                                <div className='px-3'>
                                    <h5 className="pb-2">ID: NTPCG208</h5>
                                    <h6 className="pb-2">Name: </h6>
                                    <h6 className="pb-2">Department: </h6>
                                    <h6 className="mb-0">Role: </h6>
                                </div>
                                <div style={{position:'absolute',
                                top: '45%',
                            right: '3.5%'
                            }}>
                        
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <QRCode size={100} value={member.member._id} />
                        </div>
                      </div>
                            </div>
                            <div></div>
                            
                        </Card.Body>
                    </Card>
                </Col>
               
            </Row>
        </Fragment>
    )
}
)

Widgetcard.displayName="Widgetcard"
export default Widgetcard
