import {memo,Fragment} from 'react'
import {Row,Col,Image} from 'react-bootstrap'
import Card from '../../../components/Card'

//progressbar
import Progress from '../../../components/progress.js'

import {Link} from 'react-router-dom'
// img
import avatars11 from '../../../assets/images/avatars/01.png'
import avatars22 from '../../../assets/images/avatars/avtar_1.png'
import avatars33 from '../../../assets/images/avatars/avtar_2.png'
import avatars44 from '../../../assets/images/avatars/avtar_3.png'
import avatars55 from '../../../assets/images/avatars/avtar_4.png'
import avatars66 from '../../../assets/images/avatars/avtar_5.png'

//Count-up
import CountUp from 'react-countup';

const Widgetbasic = memo(() => {
    return (
      <Fragment>
         {/* <Row>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Impressions</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border  bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="danger" color="danger" className="shadow-none w-100" value={50} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Engagements Rate</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="info" color="info" className="shadow-none w-100" value={70} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Reach</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border bg-soft-success rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                        <Progress softcolors="success" color="success" className="shadow-none w-100" value={75} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="text-center">AVG Transport</div>
                     <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                           <h2 className="counter"><CountUp  start={0.563} end={2.648} duration={3}  decimals={3}/></h2>
                           26.84%
                        </div>
                        <div className="border  bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                           </svg>
                        </div>
                     </div>
                     <div className="mt-4">
                           <Progress softcolors="primary" color="primary" className="shadow-none w-100" value={60} minvalue={0} maxvalue={100} style={{height: "6px"}} />
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6" className="col-lg-3 col-md-6">
               <Card className="bg-soft-info">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-info rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={565} end={5600} duration={3} /></h2>
                           Doctors
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-warning">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-warning rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={513} end={5600} duration={3} /></h2>
                           Nurses
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-danger rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                           </svg>
                        </div>
                        <div className="text-end">
                           <h2 className="counter"><CountUp  start={584} end={3500} duration={3} /></h2>
                           Patients
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="bg-soft-primary">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-soft-primary rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                              <h2 className="counter"><CountUp  start={546} end={4500} duration={3}/></h2>
                           Pharmacists
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-info text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Customers
                              <h2 className="counter"><CountUp  start={15} end={75} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-warning text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Products
                              <h2 className="counter"><CountUp  start={19} end={60} duration={3}/></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-success text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           User
                              <h2 className="counter"><CountUp  start={24} end={80} duration={3}/></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card>
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div className="bg-danger text-white rounded p-3">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <div className="text-end">
                           Category
                              <h2 className="counter"><CountUp  start={8} end={45} duration={3} /></h2>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-primary">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Today</span>
                        </div>
                        <div>
                           <span>08:00 Hr</span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-info">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Week</span>
                        </div>
                        <div>
                           <span>40:00 Hr</span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-danger">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Issue</span>
                        </div>
                        <div>
                           <span className="counter"><CountUp  start={275} end={1200} duration={3}/></span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
            <Col lg="3" md="6">
               <Card className="border-bottom border-4 border-0 border-warning">
                  <Card.Body>
                     <div className="d-flex justify-content-between align-items-center">
                        <div>
                           <span>Worked Income</span>
                        </div>
                        <div>
                           <span className="counter">$<CountUp  start={10000} end={54000} duration={3}/></span>
                        </div>
                     </div>
                  </Card.Body>
               </Card>
            </Col>      
            
         </Row> */}
      </Fragment>
    )
}
)

Widgetbasic.displayName="Widgetbasic"
export default Widgetbasic
