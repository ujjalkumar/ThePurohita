import React, { useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from '../Shared/Header/Header';
import './index.css';
import SubHeader from '../Shared/SubHeader';
import { useContactMutation } from '../../redux/api/contactApi';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [contact, { isLoading, isError, error, isSuccess }] = useContactMutation();
    const { register, handleSubmit, reset } = useForm({});
    const onSubmit = (data) => {
        emailjs.send('service_giwzsb3', 'template_kgt7b5n', register, 'EM6lcH5scma4eQ9bp')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                reset();
            }, (err) => {
                console.error('Failed to send email:', err);
                alert('Failed to send email. Please try again later.');
            });
    };
    return (
        <>
            <Header />
            <SubHeader title="Contact Us" subtitle="Reach out to us for your spiritual guidance and support." />

            <section id="contact" className="contact-section">
                <div className="container mt-5 mb-5">
                    <div className="row">
                        {/* Contact Info Section */}
                        <div className="col-lg-4">
                            <div className="info-box rounded p-4 shadow">
                                <div className="d-flex mb-4 align-items-center">
                                    <FaLocationArrow className='icon' />
                                    <div className="ms-3">
                                        <h4>Location</h4>
                                        <p>Gopalnagar, Nayabad, Kolkata, West Bengal, 700150</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4 align-items-center">
                                    <FaEnvelope className='icon' />
                                    <div className="ms-3">
                                        <h4>Email</h4>
                                        <p>support@thepurohita.com</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FaPhoneAlt className='icon' />
                                    <div className="ms-3">
                                        <h4>Call Us</h4>
                                        <p>+919674738311</p>
                                        <p>+913329568311</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <div className="col-lg-8">
                            <div className="form-box p-5 rounded shadow">
                                <h3 className="form-title mb-4">Get in Touch</h3>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input required {...register("firstName")} className="form-control" placeholder='First Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input required {...register("lastName")} className="form-control" placeholder='Last Name' />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input required {...register("email")} type='email' className="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <label>Mobile</label>
                                                <input required {...register("mobile")} type='number' className="form-control" placeholder="Mobile" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input required {...register("subject")} className="form-control" placeholder="Enter your subject" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-4">
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea required {...register("text")} className="form-control" rows="5" placeholder="Enter your message" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button disabled={isLoading} type='submit' className="btn-send-message">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            {/* Google Map Section */}
            <div className="map-container mt-5">
                <iframe title="Map Location" style={{ border: 0, width: "100%", height: "350px" }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.27079283419!2d88.42713337426547!3d22.494021079547757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027300690227df%3A0x9e1e73b4116fb994!2sBipadtarini%20sari%20house!5e0!3m2!1sen!2sin!4v1728154891908!5m2!1sen!2sin"
                        frameBorder="0" allowFullScreen />
            </div>
            <Footer />
        </>
    );
};

export default Contact;
