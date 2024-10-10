import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SubHeader from "../SubHeader";
import "./Cancellation.css";

const Cancellation = () => {
    return (
        <>
            <Header/>
            <SubHeader title="Cancellation and Refund Policy" subtitle="We strive to provide the best services for all our clients. However, we understand that situations can change. This policy outlines the conditions under which cancellations and refunds are processed at ThePurohita.com." />

            <div className="container" style={{marginTop: 10, marginBottom: 10}}>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="refund-content">
                            <h4>1. Cancellation Policy</h4>
                            <p>If you need to cancel a booking, please do so at least 24 hours prior to the scheduled
                                service to avoid any charges. Any cancellations made less than 24 hours in advance may
                                incur a cancellation fee.</p>

                            <h4>2. Refund Conditions</h4>
                            <ul className="refund-list">
                                <li><strong>Full Refund:</strong> If a cancellation is made more than 24 hours in
                                    advance, you are eligible for a full refund.
                                </li>
                                <li><strong>Partial Refund:</strong> If a cancellation is made within 12 to 24 hours, a
                                    50% refund will be provided.
                                </li>
                                <li><strong>No Refund:</strong> Cancellations made less than 12 hours prior to the
                                    service will not be eligible for a refund unless approved under special
                                    circumstances.
                                </li>
                            </ul>

                            <h4>3. How to Request a Refund</h4>
                            <p>To request a refund, please contact us via email at <a
                                href="mailto:support@thepurohita.com">support@thepurohita.com</a>. Include your booking
                                reference number and a brief description of the reason for the cancellation.</p>

                            <h4>4. Processing Time</h4>
                            <p>All refunds will be processed within 7-10 business days. The amount will be credited to
                                your original method of payment.</p>

                            <h4>5. Exceptional Circumstances</h4>
                            <p>In rare cases where services cannot be rendered due to unforeseen circumstances (e.g.,
                                natural disasters, emergencies), a full refund or rescheduling will be provided, even if
                                the cancellation is made last minute.</p>

                            <h4>6. Contact Us</h4>
                            <p>If you have any questions or concerns regarding this policy, please reach out to our
                                support team at <a href="mailto:support@thepurohita.com">support@thepurohita.com</a>.
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    <Footer/>
</>
)
}
export default Cancellation;