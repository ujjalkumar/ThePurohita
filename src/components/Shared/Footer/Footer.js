import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-secondary text-white pt-5 pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase font-weight-bold">About Us</h5>
                        <p>
                            At ThePurohita.com, we connect you with experienced Purohit services for all your pooja and Hindu rituals.
                            Our mission is to make spiritual services accessible and personalized to suit your needs.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase font-weight-bold">Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" className="text-white">Puja Booking</a></li>
                            <li><a href="#!" className="text-white">Homa Services</a></li>
                            <li><a href="#!" className="text-white">Astrology Consultations</a></li>
                            <li><a href="#!" className="text-white">Personalized Rituals</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
                        <p>Email: <a href="mailto:support@thepurohita.com" className="text-white">support@thepurohita.com</a></p>
                        <p>Mobile: <a href="tel:+919674738311" className="text-white">+91 9674738311</a></p>
                        <p>Phone: <a href="tel:03329568311" className="text-white">+91 3329568311</a></p>
                        <h5 className="text-uppercase font-weight-bold mt-3">Follow Us</h5>
                        <div>
                            <a href="#!" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="#!" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                            <a href="#!" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
                            <a href="#!" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <hr className="my-4 bg-light" />
                <div className="text-center">
                    <p className="mb-0">&copy; {new Date().getFullYear()} ThePurohita.com | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
