import React from 'react';
import homa_image from '../../../images/homa.webp';
import astrology_image from '../../../images/astrology_image.webp';
import marriage_image from '../../../images/marriage.webp';
import pooja_images from '../../../images/Pooja.webp';
import shraddha_image from '../../../images/shraddha_image.webp';
import ServiceDetail from '../../../components/Home/ServiceDetail/ServiceDetail';
import './Services.css';

const serviceData = [
    {
        name: 'Pooja Services',
        img: pooja_images, // replace with the image link or reference
        desc: 'Comprehensive pooja services for all major Hindu festivals and personal occasions like Satyanarayan Pooja, Ganesh Pooja, and Lakshmi Pooja.'
    },
    {
        name: 'Homa & Havan',
        img: homa_image, // replace with the image link or reference
        desc: 'Specialized Homa and Havan services for purification, Vastu Shanti, Navagraha Shanti, and other auspicious ceremonies to enhance prosperity and wellbeing.'
    },
    {
        name: 'Astrology Consultation',
        img: astrology_image, // replace with the image link or reference
        desc: 'Personalized astrology consultations for horoscope analysis, matchmaking, Muhurat selection, and life guidance from experienced astrologers.'
    },
    {
        name: 'Marriage Rituals',
        img: marriage_image, // replace with the image link or reference
        desc: 'Conducting traditional Hindu marriage rituals including Vedic chanting, Kanyadaan, Mangalsutra ceremony, and Saptapadi for a blessed marital union.'
    },
    {
        name: 'Shraddha & Tarpana',
        img: shraddha_image, // replace with the image link or reference
        desc: 'Performing Shraddha, Tarpana, and other rituals for ancestor worship to seek blessings and peace for departed souls.'
    }
]


const Services = () => {
    return (
        <section className="services-container mt-5 serviceContaint" id="serviceContaint">
            <div className="text-center">
                <h5 className="brand-color">OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="w-75 row">
                    {
                        serviceData.map(service =><ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;