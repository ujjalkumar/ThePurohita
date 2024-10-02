import React from 'react';
import purohit_demo from "../../../images/purohit-demo.png"
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment my-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={purohit_demo} alt="Appointment"
                             className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-6 text-center text-md-left py-5">
                        <h5 className="brand-color text-uppercase">Book an Appointment</h5>
                        <h1 className="appointment-title">Make Your Spiritual Journey <br/> Today!</h1>
                        <p className="appointment-description">
                            Connect with our experienced Purohitas for all your poojas, homas, and rituals.
                            Our dedicated team is here to assist you in embracing the spiritual traditions that are
                            close to your heart.
                        </p>
                        <button className="btn btn-primary btn-lg">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;