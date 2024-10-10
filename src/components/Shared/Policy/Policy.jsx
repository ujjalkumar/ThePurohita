import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Policy.css";
import SubHeader from "../SubHeader";

const Policy = () => {
    return (
        <>
            <Header/>
            <SubHeader title="Privacy Policy" subtitle="Welcome to ThePurohita.com. We respect your privacy and are
                        committed to protecting your personal information. This Privacy Policy explains what information
                        we collect, how we use it, and your rights regarding your information." />

            <div className="container" style={{marginTop: 10, marginBottom: 10}}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="policy-content">
                            <h4>1. Information We Collect</h4>
                            <ul className="policy-list">
                                <li>
                                    <strong>Personal Information:</strong> Name, email address, phone number, and other
                                    details shared during the booking process.
                                </li>
                                <li>
                                    <strong>Payment Information:</strong> Processed by secure third-party payment
                                    gateways.
                                </li>
                                <li>
                                    <strong>Usage Information:</strong> Data related to your use of our website to
                                    improve our services.
                                </li>
                            </ul>
                            <h4>2. How We Use Your Information</h4>
                            <ul className="policy-list">
                                <li>Processing and managing bookings</li>
                                <li>Communication and customer support</li>
                                <li>Marketing and promotional purposes (with your consent)</li>
                            </ul>
                            <h4>3. Data Security</h4>
                            <p>We use industry-standard security measures to protect your information from unauthorized
                                access.</p>
                            <h4>4. Your Rights</h4>
                            <p>You have the right to access, modify, or delete your personal information by contacting
                                us at <a href="mailto:support@thepurohita.com">support@thepurohita.com</a>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
export default Policy;