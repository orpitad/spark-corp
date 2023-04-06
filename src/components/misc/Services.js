import React from 'react'
import './Pricing.css'
import './Services.css'
import ltPanel from '../../images/lt-panel.jpg';
import plcPanel from '../../images/plc-control-panel.jpg';
import flowMeter from '../../images/flowmeter.jpeg';
const Services = () => {
  return (
    <>
       <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header pan">LT Panel<br/></li>
                    <li className="grey">
                    <img src={ltPanel} className="panels" alt="lt-panel" />

                    </li>
                    {/* <li>12 consultation sessions</li>
                    <li>1 user</li>
                    <li>Same day audit logs</li>
                    <li>Communiity support</li>
                    <li className="grey"><button className="button">Sign Up</button></li> */}
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header pan">PLC Panel<br/></li>
                    <li className="grey">
                    <img src={plcPanel} className="panels" alt="plc-panel" />

                    </li>
                    {/* <li>Unlimited Consultation</li>
                    <li>10 - 25 Users</li>
                    <li>7 days Audit logs</li>
                    <li>3 days SLA support</li>
                    <li className="grey"><button className="button">Sign Up</button></li> */}
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header">Sensor fixing for 4200mm size ultra flux FlowMeter</li>
                    <li className="grey">
                    <img src={flowMeter} className="panels" alt="Flow Meter" />

                    </li>
                </ul>
            </div>
            </section>
    </>
  )
}

export default Services
