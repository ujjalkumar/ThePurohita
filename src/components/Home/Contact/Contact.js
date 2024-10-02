// Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        emailjs.send('service_giwzsb3', 'template_kgt7b5n', formData, 'EM6lcH5scma4eQ9bp')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            }, (err) => {
                console.error('Failed to send email:', err);
                alert('Failed to send email. Please try again later.');
            });
    };

    return (
        <section className="contact my-5 py-5" id="ContactPage">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-secondary">Contact Us</h5>
                    <h1 className="brand-color">Always Connect With Us</h1>
                </div>
            </div>

            <div className="col-md-8 mx-auto">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="form-control mb-3"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="form-control mb-3"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter your subject"
                            className="form-control mb-3"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            cols="30"
                            rows="5"
                            placeholder="Enter your message"
                            className="form-control mb-3"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
