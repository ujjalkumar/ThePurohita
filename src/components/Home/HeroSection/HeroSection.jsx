import React, {useState, useEffect} from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [contentIndex, setContentIndex] = useState(0);

    // Content Array for Different Languages
    const content = [
        {
            language: "English",
            small: "YOUR SPIRITUAL WELLNESS PARTNER",
            heading: "Your Trusted Guide for\nPoojas & Rituals",
            description: "Book experienced Purohitas for all Poojas, Homas, Hindu rituals, and astrology guidance. Get personalized services to fulfill your spiritual needs.",
            servicesLink: "Explore Services",
            bookLink: "Book Now"
        },
        {
            language: "Bengali",
            small: "আপনার আধ্যাত্মিক সুস্থতার সঙ্গী",
            heading: "পূজা ও আচার অনুষ্ঠানের জন্য\nআপনার বিশ্বস্ত পথপ্রদর্শক",
            description: "সব পূজা, হোম, হিন্দু আচার ও জ্যোতিষশাস্ত্রের জন্য অভিজ্ঞ পুরোহিতদের বুক করুন। আপনার আধ্যাত্মিক প্রয়োজন পূরণের জন্য ব্যক্তিগত পরিষেবা পান।",
            servicesLink: "পরিষেবা দেখুন",
            bookLink: "এখন বুক করুন"
        },
        {
            language: "Hindi",
            small: "आपका आध्यात्मिक स्वास्थ्य साथी",
            heading: "पूजा एवं अनुष्ठानों के लिए\nआपका विश्वसनीय मार्गदर्शक",
            description: "सभी पूजा, हवन, हिंदू अनुष्ठान और ज्योतिषीय मार्गदर्शन के लिए अनुभवी पुरोहितों को बुक करें। अपनी आध्यात्मिक आवश्यकताओं को पूरा करने के लिए व्यक्तिगत सेवाएँ प्राप्त करें।",
            servicesLink: "सेवाएं देखें",
            bookLink: "अभी बुक करें"
        }
    ];

    // Function to change the content index every 1 minute (60000ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setContentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 8000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, [content.length]);

    // Current Content based on the index
    const currentContent = content[contentIndex];

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>{currentContent.small}</small>
                    <h1>{currentContent.heading.split("\n").map((line, index) => (
                        <React.Fragment key={index}>{line}<br /></React.Fragment>
                    ))}</h1>
                    <small>{currentContent.description}</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/services'} className="btn-get-started scrollto">{currentContent.servicesLink}</Link>
                    <Link to={'/book-now'} className="btn-get-started scrollto">{currentContent.bookLink}</Link>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;