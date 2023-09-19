
import React, { useState } from "react";
import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, useNavigate } from "react-router-dom";
// import BasicDatePicker from "../app/datepicker";

// img
import imgsuccess from "../../../assets/images/pages/img-success.png";
const FormWizard = () => {
    const navigtate = useNavigate()

    const [show, AccountShow] = useState('A')
    const [married, setMarried] = useState(false);
    const [noOfChildren, setNoOfChildren] = useState(0);
    const martialStatusHandler = () => {
        setMarried(!married);
    };
    const numberOfChildrenHandler = (e) => {
        setNoOfChildren(e.target.value);
    };
    let childInputFields = [];
    if (noOfChildren !== 0) {
        for (let i = 0; i < noOfChildren; i++) {
            childInputFields.push(
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label">Child Name {i + 1}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phno_2"
                            placeholder={`Child name ${i + 1}`}
                        />
                    </div>
                </div>
            );
        }
    }

    const onFinishHandler = () => {
        navigtate('/dashboard')

    }
    return (
        <>
            <div>
                <Row>
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Simple Wizard</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form id="form-wizard1" className="text-center mt-3">
                                    <ul id="top-tab-list" className="p-0 row list-inline">
                                        <li className={` ${show === 'Image' ? ' active done' : ''} ${show === 'Address' ? ' active done' : ''} ${show === 'Additional' ? ' active done' : ''}${show === 'Personal' ? ' active done' : ''} ${show === 'Account' ? ' active done' : ''} ${show === 'A' ? 'active' : ''} col-lg-3 col-md-6 text-start mb-2 active`} id="account">
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <span>Account</span>
                                            </Link>
                                        </li>
                                        <li id="personal" className={`${show === 'Personal' ? ' active done' : ''}${show === 'Additional' ? ' active done' : ''} ${show === 'Address' ? ' active done' : ''} ${show === 'Image' ? ' active done' : ''} ${show === 'Account' ? 'active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <span>Personal</span>
                                            </Link>
                                        </li>
                                        <li id="address" className={`${show === 'Address' ? ' active done' : ''}${show === 'Additional' ? ' active done' : ''} ${show === 'Image' ? ' active done' : ''} ${show === 'Personal' ? 'active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-32" height="32"><path fillRule="evenodd" clipRule="evenodd" d="M8.53162 2.93677C10.7165 1.66727 13.402 1.68946 15.5664 2.99489C17.7095 4.32691 19.012 6.70418 
                                                18.9998 9.26144C18.95 11.8019 17.5533 14.19 15.8075 16.0361C14.7998 17.1064 13.6726 18.0528 12.4488 18.856C12.3228 18.9289 12.1848 18.9777 12.0415 19C11.9036 18.9941 11.7693 18.9534 11.6508 18.8814C9.78243 17.6746 8.14334 16.134 6.81233 14.334C5.69859 12.8314 
                                                5.06584 11.016 5 9.13442C4.99856 6.57225 6.34677 4.20627 8.53162 2.93677ZM9.79416 10.1948C10.1617 11.1008 11.0292 11.6918 11.9916 11.6918C12.6221 11.6964 13.2282 11.4438 13.6748 10.9905C14.1214 10.5371 14.3715 9.92064 14.3692 9.27838C14.3726 8.29804 13.7955 7.41231 
                                                12.9073 7.03477C12.0191 6.65723 10.995 6.86235 10.3133 7.55435C9.63159 8.24635 9.42664 9.28872 9.79416 10.1948Z" fill="currentColor"></path><ellipse opacity="0.4" cx="12" cy="21" rx="5" ry="1" fill="currentColor">
                                                        </ellipse>
                                                    </svg>
                                                </div>
                                                <span>Address</span>
                                            </Link>
                                        </li>
                                        <li id="payment" className={`${show === 'Image' ? ' active done' : ''}${show === 'Additional' ? ' active done' : ''} ${show === 'Address' ? 'active' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-32" width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd"
                                                        d="M9.5 12.5537C12.2546 12.5537 14.4626 10.3171 14.4626 7.52684C14.4626 4.73663 12.2546 2.5 9.5 2.5C6.74543 2.5 4.53737 4.73663 4.53737 7.52684C4.53737 10.3171 6.74543 12.5537
                                                 9.5 12.5537ZM9.5 15.0152C5.45422 15.0152 2 15.6621 2 18.2464C2 20.8298 5.4332 21.5 9.5 21.5C13.5448 21.5 17 20.8531 17 18.2687C17 15.6844 13.5668 15.0152 9.5 15.0152ZM19.8979 
                                                 9.58786H21.101C21.5962 9.58786 22 9.99731 22 10.4995C22 11.0016 21.5962 11.4111 21.101 11.4111H19.8979V12.5884C19.8979 13.0906 19.4952 13.5 18.999 13.5C18.5038 13.5 18.1 
                                                 13.0906 18.1 12.5884V11.4111H16.899C16.4027 11.4111 16 11.0016 16 10.4995C16 9.99731 16.4027 9.58786 16.899 9.58786H18.1V8.41162C18.1 7.90945 18.5038 7.5 18.999 7.5C19.4952 
                                                 7.5 19.8979 7.90945 19.8979 8.41162V9.58786Z" fill="currentColor"></path></svg>

                                                </div>
                                                <span>Church Background</span>
                                            </Link>
                                        </li>
                                        <li id="address" className={`${show === 'Additional' ? ' active done' : ''} ${show === 'Image' ? ' active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-32" height="32"><path opacity="0.4" d="M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 
                                                3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z" fill="currentColor"></path><path opacity="0.4" d="M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 
                                                20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z"
                                                            fill="currentColor"></path><path d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 
                                                3 8.87774 4.51298 8.87774 6.37856Z" fill="currentColor"></path><path d="M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 
                                                17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z" fill="currentColor"></path></svg>
                                                </div>
                                                <span>Additional Info</span>
                                            </Link>
                                        </li>
                                        <li id="confirm" className={`${show === 'Additional' ? ' active ' : ''} col-lg-3 col-md-6 mb-2 text-start`}>
                                            <Link to="#">
                                                <div className="iq-icon me-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <span>Finish</span>
                                            </Link>
                                        </li>
                                    </ul>
                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Account Information: </h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 1 - 4</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">ID: </label>
                                                        <input type="email" className="form-control" name="email" placeholder="Id" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Username: </label>
                                                        <input type="text" className="form-control" name="uname" placeholder="UserName" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Password: </label>
                                                        <input type="password" className="form-control" name="pwd" placeholder="Password" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Confirm Password: </label>
                                                        <input type="password" className="form-control" name="cpwd" placeholder="Confirm Password" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Account')} >Next</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Personal Information:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 2 - 6</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">First Name </label>
                                                        <input type="text" className="form-control" name="fname" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Middle Name </label>
                                                        <input type="text" className="form-control" name="fname" placeholder="Middle Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Last Name </label>
                                                        <input type="text" className="form-control" name="lname" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Phone Number </label>
                                                        <input type="text" className="form-control" name="phno" placeholder="Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Additional Number </label>
                                                        <input type="text" className="form-control" name="phno" placeholder="Additional Number" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label" for="exampleInputdate">Date of Birth</label>
                                                        <input type="date" id="exampleInputdate" className="form-control"  />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Emergency Contact Name </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Emergency Contact Number </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            Martial Status{" "}
                                                        </label>
                                                        <Form.Check className="mb-3">
                                                            <Form.Check.Input
                                                                type="checkbox"
                                                                className="me-2"
                                                                defaultValue
                                                                id="flexCheckDefault"

                                                            />
                                                            <Form.Check.Label htmlFor="flexCheckDefault">
                                                                Single
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                        <Form.Check className="mb-3">
                                                            <Form.Check.Input
                                                                type="checkbox"
                                                                className="me-2"
                                                                defaultValue
                                                                id="flexCheckDefault"
                                                                onChange={martialStatusHandler}
                                                            />
                                                            <Form.Check.Label htmlFor="flexCheckDefault">
                                                                Married
                                                            </Form.Check.Label>
                                                        </Form.Check>
                                                    </div>
                                                </div>
                                                {married && (
                                                    <>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label">
                                                                    Spouse Name{" "}
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="phno_2"
                                                                    placeholder="Spouse Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <Form.Group className="form-group">
                                                                    <Form.Label htmlFor="exampleInputNumber1">
                                                                        Number of Children
                                                                    </Form.Label>
                                                                    <Form.Control
                                                                        type="number"
                                                                        id="exampleInputNumber1"
                                                                        defaultValue=""
                                                                        onChange={(e) => numberOfChildrenHandler(e)}
                                                                    />
                                                                </Form.Group>
                                                            </div>
                                                        </div>
                                                        {childInputFields.map(
                                                            (eachChildInputs) => eachChildInputs
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Personal')} >Next</button>
                                        <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('A')} >Previous</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Personal' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Address Information:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 3 - 6</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Street Address </label>
                                                        <input type="text" className="form-control" name="fname" placeholder="Street address" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">City </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="City" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Subcity </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="Subcity" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Woreda </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="Woreda" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">House Number </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="House Number " />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Address')} >Next</button>
                                        <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('Account')} >Previous</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Address' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Background Info</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 3 - 4</h2>
                                                </div>
                                            </div>
                                            <div className="row">


                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Previous Church Name </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Previous Church Branch </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Baptized </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Yes</option>
                                                                <option value="2">No</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Have you taken Dicipleship class before? </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Yes</option>
                                                                <option value="2">No</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Previous Department </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">How did you hear about our church? </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Marsil TV</option>
                                                                <option value="2">Social Media</option>
                                                                <option value="2">Friends And Family</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                   
                                                    <div className="form-group">
                                                        <label className="form-label" for="exampleInputdate">When did you first join our church?</label>
                                                        <input type="date" id="exampleInputdate" className="form-control" />
                                                        </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Dicipleship Class </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Learning</option>
                                                                <option value="2">Not Learning</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Department </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Usher</option>
                                                                <option value="2">Victory</option>
                                                                <option value="2">Event Organization</option>
                                                                <option value="2">Naftalim</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>




                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Languages </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Amharic</option>
                                                                <option value="2">Afaan Oromo</option>
                                                                <option value="2">Tigregna</option>
                                                                <option value="2">English</option>

                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Member Type </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Christian</option>
                                                                <option value="2">Non Christian</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Church Branch </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">Gerji</option>
                                                                <option value="2">kera</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label className="form-label">Upload Your Photo:</label>
                                                    <input type="file" className="form-control" name="pic" accept="image/*" />
                                                </div>

                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Next" onClick={() => AccountShow('Image')} >Next</button>
                                        <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('Account')} >Previous</button>

                                    </fieldset>
                                    <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="mb-4">Additional Information:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 3 - 6</h2>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Academic Status </label>
                                                            <select className="form-select mb-3 shadow-none">
                                                                <option value="1">10th</option>
                                                                <option value="1">12th</option>
                                                                <option value="1">TVET</option>
                                                                <option value="1">TVET</option>
                                                                <option value="2">Diploma</option>
                                                                <option value="2">BA/BSc</option>
                                                                <option value="2">MS/MSc</option>
                                                                <option value="2">PHD</option>
                                                            </select>
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Profession </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Company Name</label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Work Place </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder=" " />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="form-label">Vision </label>
                                                        <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Form.Group className="form-group">
                                                            <label className="form-label">Skills</label>
                                                            <input type="text" className="form-control" name="phno_2" placeholder="" />
                                                        </Form.Group>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <button type="button" name="next" className="btn btn-primary next action-button float-end" value="Submit" onClick={() => AccountShow('Additional')} >Submit</button>
                                        <button type="button" name="previous" className="btn btn-dark previous action-button-previous float-end me-1" value="Previous" onClick={() => AccountShow('Address')} >Previous</button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Additional' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card">
                                            <div className="row">
                                                <div className="col-7">

                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 4 - 4</h2>
                                                </div>
                                            </div>
                                            <br /><br />
                                            <h2 className="text-success text-center"><strong>SUCCESS !</strong></h2>
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col-3"> <Image src={imgsuccess} className="img-fluid" alt="fit-image" /> </div>
                                            </div>
                                            <br /><br />
                                            <div className="row justify-content-center">
                                                <div className="col-7 text-center">
                                                    <h5 className="purple-text text-center">You Have Successfully Updated your Profile</h5>
                                                    <button onClick={onFinishHandler} type="button" name="next" className="btn btn-primary next action-button float-end">Finish</button>
                                                </div>

                                            </div>
                                        </div>
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}




export default FormWizard;
