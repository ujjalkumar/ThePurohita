import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Terms.css";
import SubHeader from "../SubHeader";

const Terms = () => {
    return (
        <>
            <Header/>
            <SubHeader title="Terms & Conditions" subtitle="Welcome to ThePurohita.com! These Terms and Conditions outline the rules and regulations for using our services. By accessing this website, you accept these terms in full. If you disagree with any part of the terms, please do not use our services." />

            <div className="container" style={{marginTop: 10, marginBottom: 10}}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="terms-content">
                            <h4>1. Introduction</h4>
                            <p>By accessing and using ThePurohita.com, you agree to comply with and be bound by the
                                following terms and conditions. These terms apply to all visitors, users, and others who
                                access or use the service.</p>

                            <h4>2. Services</h4>
                            <p>We provide booking services for Purohitas, priests, and astrology consultations. All
                                services are subject to availability and confirmation.</p>

                            <h4>3. User Obligations</h4>
                            <ul className="terms-list">
                                <li>Users must provide accurate and current information when creating an account or
                                    booking a service.
                                </li>
                                <li>Any misuse of the service, including fraudulent bookings or inappropriate behavior
                                    towards Purohitas, is strictly prohibited.
                                </li>
                            </ul>

                            <h4>4. Payment Terms</h4>
                            <p>All payments are processed through secure third-party gateways. By making a booking, you
                                agree to pay the total amount due at the time of booking.</p>

                            <h4>5. Cancellations and Refunds</h4>
                            <p>Cancellations must be made at least 24 hours in advance for a full refund. No refunds
                                will be issued for last-minute cancellations unless approved under special
                                circumstances.</p>

                            <h4>6. Limitation of Liability</h4>
                            <p>ThePurohita.com is not liable for any indirect, consequential, or incidental damages
                                arising out of or in connection with the use of our services.</p>

                            <h4>7. Changes to Terms</h4>
                            <p>We may revise these terms at any time. Continued use of the site after any changes
                                constitutes your acceptance of the new terms.</p>

                            <h4>8. Contact Us</h4>
                            <p>If you have any questions about these Terms and Conditions, please contact us at
                                <a href="mailto:support@thepurohita.com">support@thepurohita.com</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )}
export default Terms;