import React from 'react';
import './index.css';
import StarRatings from 'react-star-ratings';
import { truncate } from '../../../utils/truncate';
import { FaCheckDouble } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Static array of testimonials for The Purohitas
const testimonialsArray = [
    {
        id: 1,
        patient: {
            img: 'https://via.placeholder.com/150',
            firstName: 'Rahul',
            lastName: 'Kumar',
        },
        description: 'The Purohitas provided exceptional service for my housewarming ceremony. Their expertise and attention to detail made the occasion truly memorable.',
    },
    {
        id: 2,
        patient: {
            img: 'https://via.placeholder.com/150',
            firstName: 'Sneha',
            lastName: 'Chatterjee',
        },
        description: 'I consulted The Purohitas for astrological guidance, and it has helped me tremendously in making important life decisions. Highly recommended!',
    },
    {
        id: 3,
        patient: {
            img: 'https://via.placeholder.com/150',
            firstName: 'Amit',
            lastName: 'Sharma',
        },
        description: 'The rituals conducted by The Purohitas were performed with utmost respect and devotion. I felt a deep connection during the ceremonies.',
    },
    {
        id: 4,
        patient: {
            img: 'https://via.placeholder.com/150',
            firstName: 'Pooja',
            lastName: 'Singh',
        },
        description: 'Their professionalism and dedication made a huge difference for our wedding. Every detail was perfectly handled. Thank you, The Purohitas!',
    },
];

const Testimonial = () => {
    const content = testimonialsArray.map((item) => (
        <SwiperSlide key={item.id}>
            <div className="testimonial-card shadow p-3 border-0 my-5">
                <div className='card-header d-flex align-items-center'>
                    <div className='review-img'>
                        {item.patient.img && <img src={item.patient.img} alt="" />}
                    </div>
                    <div className="card-info">
                        <h5 className='text-secondary'>{item.patient.firstName} {item.patient.lastName}</h5>
                    </div>
                </div>

                <p className="text-start text-secondary" style={{ minHeight: '72px', overflow: 'hidden' }}>
                    {truncate(item.description, 150)}
                </p>
                <div>
                    <p className='recommended'><FaCheckDouble /> Recommended</p>
                    <StarRatings
                        rating={5}
                        starRatedColor="#f4c150"
                        numberOfStars={5}
                        name='rating'
                        className="star"
                        starDimension="20px"
                        starSpacing="5px"
                    />
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <div className="container" style={{ marginTop: "10rem", marginBottom: "10rem" }}>
            <div className='mb-5 section-title text-center'>
                <h2>TESTIMONIAL</h2>
                <p className='m-0 text-secondary'>What Our Clients Say About The Purohitas.</p>
            </div>
            <div className="row d-flex justify-content-center">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    modules={[Navigation, Autoplay]}
                    navigation={true}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                >
                    {content}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
