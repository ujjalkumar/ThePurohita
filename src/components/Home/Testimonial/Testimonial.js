import React from 'react';
import ema from '../../../images/ema.png';
import john from '../../../images/john.png';
import watson from '../../../images/watson.png';
import TestimonialDetails from './TestimonialDetails';
import './Testimonial.css';
import useFetch from '../../hooks/useFetch';

const Testimonial = () => {
    const data = [
        {
            _id: 1,
            name: "John Doe",
            testimonial: "The Purohita service was exceptional! They guided us through every ritual with grace and knowledge.",
            rating: 5,
        },
        {
            _id: 2,
            name: "Jane Smith",
            testimonial: "I had a wonderful experience. The Purohita was very accommodating and made our ceremony special.",
            rating: 4,
        },
        {
            _id: 3,
            name: "Sam Patel",
            testimonial: "Highly recommend their services! They are knowledgeable and truly care about their clients.",
            rating: 5,
        },
        {
            _id: 4,
            name: "Anita Desai",
            testimonial: "A great experience overall! The rituals were performed beautifully, and everything went smoothly.",
            rating: 4,
        },
    ];

    return (
        <section className="container testimonial my-5 py-5" id="reviewsContents">
            <div className="container">
                <div className="section-header py-5 text-center">
                    <h5 className="brand-color text-uppercase">Testimonials</h5>
                    <h1>What Our Clients Say</h1>
                </div>
                <div className="row justify-content-center">
                    {data && data.map(review => (
                        <TestimonialDetails key={review._id} testimonial={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;