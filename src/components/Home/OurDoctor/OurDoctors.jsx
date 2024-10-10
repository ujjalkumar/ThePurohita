import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Empty } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Static array of doctors (Purohitas) with more details
const doctorsArray = [
    {
        img: 'https://via.placeholder.com/150',
        firstName: 'John',
        lastName: 'Doe',
        designation: 'Senior Purohita',
        specialization: 'Vedic Rituals',
        details: 'Expert in performing traditional Vedic rituals for various occasions, with over 15 years of experience.',
        languages: ['Hindi', 'English', 'Sanskrit'],
        location: "Kolkata, West Bengal",
    },
    {
        img: 'https://via.placeholder.com/150',
        firstName: 'Jane',
        lastName: 'Smith',
        designation: 'Astrologer',
        specialization: 'Astrology and Gemology',
        details: 'Specializes in astrological consultations and gem recommendations to enhance life quality and spiritual growth.',
        languages: ['English', 'Spanish'],
        location: "Kolkata, West Bengal",
    },
    {
        img: 'https://via.placeholder.com/150',
        firstName: 'Ravi',
        lastName: 'Sharma',
        designation: 'Purohita',
        specialization: 'Hindu Rituals',
        details: 'Trained in a variety of Hindu rituals and ceremonies, ensuring adherence to traditional practices.',
        languages: ['Hindi', 'Bengali'],
        location: "Kolkata, West Bengal",
    },
    {
        img: 'https://via.placeholder.com/150',
        firstName: 'Aditi',
        lastName: 'Patel',
        designation: 'Spiritual Guide',
        specialization: 'Meditation and Wellness',
        details: 'Offers guidance on meditation techniques and wellness practices for holistic spiritual well-being.',
        languages: ['English', 'Gujarati'],
        location: "Kolkata, West Bengal",
    }
];

const OurPurohitas = () => {
    let content = null;

    // Set content based on the doctors array
    if (doctorsArray.length === 0) {
        content = <div><Empty /></div>
    } else {
        content = (
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
            >
                {doctorsArray.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className="member d-flex align-items-start flex-column text-center">
                            <div className="pic mb-3">
                                {item.img && <img src={item.img} className="img-fluid rounded-circle" alt={`${item.firstName} ${item.lastName}`} />}
                            </div>
                            <div className="member-info">
                                <h4>{item.firstName} {item.lastName}</h4>
                                <span className="designation">{item.designation}</span>
                                <p className="specialization">{item.specialization}</p>
                                <p className="details">{item.details}</p>
                                <p className="languages"><strong>Languages Spoken: </strong>{item.languages.join(', ')}</p>
                                <p className="location"><strong>Location: </strong>{item.location}</p>
                                <div className="social mt-2 align-content-center">
                                    <a href="#" aria-label="Facebook"><FaFacebookSquare className='icon' /></a>
                                    <a href="#" aria-label="Instagram"><FaInstagramSquare className='icon' /></a>
                                    <a href="#" aria-label="LinkedIn"><FaLinkedin className='icon' /></a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        );
    }

    return (
        <section id="doctors" className="doctors">
            <div className="container">
                <div className="section-title text-center mb-4">
                    <h2>OUR PUROHITAS</h2>
                    <p className='form-text'>Meet our experienced Purohitas ready to guide you through your spiritual journey.</p>
                </div>

                <div className="row justify-content-center">
                    {content}
                </div>
            </div>
        </section>
    );
};

export default OurPurohitas;
