import React from 'react';
import "./FeaturedService.css"
import shadu from "../../../images/shadu.jpg"


const FeaturedService = () => {
    const purohitas = [
        {
            name: 'Pandit Hari Sharma',
            img: shadu, // Replace with your image paths or URLs
            experience: '15 years',
            expertise: 'Homas & Astrology',
            languages: 'Sanskrit, Hindi, Kannada',
        },
        {
            name: 'Pandit Ravi Shukla',
            img: shadu,
            experience: '10 years',
            expertise: 'Marriage Rituals',
            languages: 'Hindi, Tamil, English',
        },
        {
            name: 'Pandit Shyam Kumar',
            img: shadu,
            experience: '8 years',
            expertise: 'Poojas & Sanskara',
            languages: 'Hindi, Telugu',
        },
    ];
    return (
        <div className="feature-service pb-0 pb-md-5 pt-md-5">
            <div className="container">
                <div className="section-title text-center mb-5">
                    <h2>Meet Our Purohitas</h2>
                    <p>Experienced and certified priests ready to guide you through all your spiritual needs.</p>
                </div>
                <div className="row justify-content-center">
                    {purohitas.map((purohita, index) => (
                        <div className="col-lg-4 col-md-6 mb-5" key={index}>
                            <div className="purohita-card card-shadow rounded text-center">
                                <div className="purohita-img">
                                    <img
                                        src={purohita.img}
                                        alt={purohita.name}
                                        className="img-fluid rounded-circle mb-3"
                                    />
                                </div>
                                <h4 className="purohita-name">{purohita.name}</h4>
                                <p className="purohita-title text-muted">{purohita.expertise} Specialist</p>
                                <div className="purohita-details mt-3">
                                    <p><strong>Experience:</strong> {purohita.experience}</p>
                                    <p><strong>Languages:</strong> {purohita.languages}</p>
                                </div>
                                <div className="social-links mt-4">
                                    <button className="btn btn-outline-primary btn-sm">View Profile</button>
                                    <button className="btn btn-outline-success btn-sm">Contact</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;