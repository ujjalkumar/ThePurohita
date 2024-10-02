import React from 'react';

const TestimonialDetails = ({ testimonial }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card testimonial-card shadow-sm">
                <div className="card-body text-center">
                    <p className="card-text">"{testimonial.testimonial}"</p>
                    <h5 className="card-title">{testimonial.name}</h5>
                    <div className="rating d-flex justify-content-center align-items-center">
                        {/* Filled stars */}
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                            <span key={i} className="text-warning">&#9733;</span> // Filled star
                        ))}
                        {/* Empty stars */}
                        {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                            <span key={i + testimonial.rating} className="text-muted">&#9734;</span> // Empty star
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;
