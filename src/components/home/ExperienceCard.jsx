import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} width="359" height="186" style={{border: '3px solid #6c757d',borderRadius: '10px'}} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;