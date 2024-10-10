import React, { useEffect, useState } from 'react';
import img2 from '../../../images/pooja.webp';
import img3 from '../../../images/homa.webp';
import img4 from '../../../images/marriage.webp';
import img5 from '../../../images/homeentry.png';
import img from '../../../images/Naamkaran.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

const AvailableServiceContent = () => {
    const [currentLanguage, setCurrentLanguage] = useState(0);
    const images = [
        img5,  // Griha Pravesh
        img,   // Satyanarayana Pooja
        img,   // Namakarana Ceremony
        img4,  // Vivah Samskara
        img3,  // Ganapathi Homa
        img2,  // Navagraha Shanti Pooja
        img2,  // Sudarshana Homa
        img3,  // Maha Mrityunjaya Homa
        img2,  // Rudrabhishekam
        img,   // Ayushya Homam
        img,   // Saraswati Pooja
        img2,  // Vastu Shanti
        img,   // Shraddha Ceremony
        img,   // Annaprashana
        img5,  // Seemantham
        img4,  // Bhoomi Pooja
        img2,  // Chandi Homam
        img4,  // Sathabhishekam
        img3,  // Kumbhabhishekam
        img2   // Nakshatra Shanti Pooja
    ]
    const services = [
        // Titles for English, Hindi, and Bengali
        {
            title: [
                'Griha Pravesh', // Housewarming ceremony
                'Satyanarayana Pooja', // Lord Vishnu prayer
                'Namakarana Ceremony', // Naming ceremony for newborns
                'Vivah Samskara', // Hindu wedding
                'Ganapathi Homa', // Fire ritual for Lord Ganesha
                'Navagraha Shanti Pooja', // Prayer to pacify planetary doshas
                'Sudarshana Homa', // To remove obstacles and negative energies
                'Maha Mrityunjaya Homa', // For health and longevity
                'Rudrabhishekam', // Ritual for Lord Shiva’s blessings
                'Ayushya Homam', // Performed for a long life
                'Saraswati Pooja', // Prayer for education and wisdom
                'Vastu Shanti', // Vedic ritual to purify a new house
                'Shraddha Ceremony', // Annual ancestral rites
                'Annaprashana (Rice Feeding)', // First feeding of solid food for a baby
                'Seemantham', // Baby shower ritual
                'Bhoomi Pooja', // Groundbreaking ceremony for new construction
                'Chandi Homam', // To ward off negative forces
                'Sathabhishekam', // Ceremony for elders reaching 80th year
                'Kumbhabhishekam', // Ritual for consecration of temples
                'Nakshatra Shanti Pooja', // Ritual for peace based on birth star
            ],
        },
        {
            title: [
                'গৃহ প্রবেশ', // Housewarming ceremony
                'সত্যনারায়ণ পূজা', // Lord Vishnu prayer
                'নামকরণ অনুষ্ঠান', // Naming ceremony for newborns
                'বিবাহ সংস্কার', // Hindu wedding
                'গণেশ হোম', // Fire ritual for Lord Ganesha
                'নবগ্রহ শান্তি পূজা', // Prayer to pacify planetary doshas
                'সুদর্শন হোম', // To remove obstacles and negative energies
                'মহা মৃত্যুঞ্জয় হোম', // For health and longevity
                'রুদ্রাভিষেক', // Ritual for Lord Shiva’s blessings
                'আয়ুষ্য হোম', // Performed for a long life
                'সরস্বতী পূজা', // Prayer for education and wisdom
                'বাস্তু শান্তি', // Vedic ritual to purify a new house
                'শ্রাদ্ধ অনুষ্ঠান', // Annual ancestral rites
                'অন্নপ্রাশন (চাল খাওয়ানো)', // First feeding of solid food for a baby
                'সীমন্ত', // Baby shower ritual
                'ভূমি পূজা', // Groundbreaking ceremony for new construction
                'চণ্ডী হোম', // To ward off negative forces
                'সাঠাভিষেক', // Ceremony for elders reaching 80th year
                'কুম্ভাভিষেক', // Ritual for consecration of temples
                'নক্ষত্র শান্তি পূজা', // Ritual for peace based on birth star
            ],
        },
        {
            title: [
                'गृह प्रवेश', // Housewarming ceremony
                'सत्यनारायण पूजा', // Lord Vishnu prayer
                'नामकरण समारोह', // Naming ceremony for newborns
                'विवाह संस्कार', // Hindu wedding
                'गणपति होम', // Fire ritual for Lord Ganesha
                'नवग्रह शांति पूजा', // Prayer to pacify planetary doshas
                'सुदर्शन होम', // To remove obstacles and negative energies
                'महामृत्युंजय होम', // For health and longevity
                'रुद्राभिषेक', // Ritual for Lord Shiva’s blessings
                'आयुष्यम् होम', // Performed for a long life
                'सरस्वती पूजा', // Prayer for education and wisdom
                'वास्तु शांति', // Vedic ritual to purify a new house
                'श्राद्ध समारोह', // Annual ancestral rites
                'अन्नप्राशन (चावल खिलाना)', // First feeding of solid food for a baby
                'सीमन्तम', // Baby shower ritual
                'भूमि पूजा', // Groundbreaking ceremony for new construction
                'चंडी होम', // To ward off negative forces
                'साठाभिषेक', // Ceremony for elders reaching 80th year
                'कुम्भाभिषेक', // Ritual for consecration of temples
                'नक्षत्र शांति पूजा', // Ritual for peace based on birth star
            ],
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLanguage((prev) => (prev + 1) % services.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const availableServiceArray = services[currentLanguage].title.map((title, index) => ({
        title,
        img: index < 5 ? img : index === 5 ? img3 : index === 6 ? img2 : img4, // Assuming images are reused based on the index
    }));
    return (
        <div className="d-flex justify-content-center align-items-center gap-4">
            <Swiper
                spaceBetween={2}
                slidesPerView={4}
                modules={[Navigation, Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {availableServiceArray.map((item, index) => (
                    <SwiperSlide key={item.title} className='my-2'>
                        <div className="feature-item text-center">
                            <img src={images[index]} className="img-fluid" alt="" />
                            <p>{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AvailableServiceContent