import React, {useState, useEffect} from 'react';
import './index.css';
import img2 from '../../../images/pooja.webp'
import img3 from '../../../images/homa.webp'
import img4 from '../../../images/marriage.webp'
import { Link } from 'react-router-dom';

const Service = () => {
    const [languageIndex, setLanguageIndex] = useState(0);

    // Array of content objects for English, Hindi, and Bengali
    const serviceContent = [
        {
            language: 'English',
            sectionTitle: 'Our Services',
            sectionDescription: 'Offering a variety of spiritual services to fulfill your religious needs.',
            heading: 'Purohit Services Tailored for You',
            description:
                'Whether you need a Purohita for a traditional Pooja, a Homa for spiritual cleansing, or a Vedic astrology consultation, we connect you to experienced priests from Kolkata\'s Kalighat temple and other renowned spiritual experts from across India.',
            buttonText: 'Explore Services',
        },
        {
            language: 'Bengali',
            sectionTitle: 'আমাদের সেবা',
            sectionDescription: 'আপনার ধর্মীয় চাহিদা পূরণের জন্য বিভিন্ন আধ্যাত্মিক পরিষেবা প্রদান করছি।',
            heading: 'আপনার জন্য উপযুক্ত পুরোহিত পরিষেবা',
            description:
                'আপনার যদি প্রথাগত পূজা, আধ্যাত্মিক পরিশোধনের জন্য হোমা, অথবা বৈদিক জ্যোতিষ পরামর্শের জন্য পুরোহিত প্রয়োজন হয়, আমরা আপনাকে কলকাতার কালীঘাট মন্দিরের অভিজ্ঞ পুরোহিত এবং ভারতের অন্যান্য বিখ্যাত আধ্যাত্মিক বিশেষজ্ঞদের সাথে সংযুক্ত করি।',
            buttonText: 'সেবা অন্বেষণ করুন',
        },
        {
            language: 'Hindi',
            sectionTitle: 'हमारी सेवाएं',
            sectionDescription: 'हम आपकी धार्मिक आवश्यकताओं को पूरा करने के लिए विभिन्न आध्यात्मिक सेवाएं प्रदान करते हैं।',
            heading: 'आपके लिए अनुकूलित पुरोहित सेवाएं',
            description:
                'चाहे आपको पारंपरिक पूजा के लिए पुरोहित की आवश्यकता हो, आध्यात्मिक शुद्धिकरण के लिए हवन, या वैदिक ज्योतिष परामर्श की आवश्यकता हो, हम आपको कोलकाता के कालीघाट मंदिर के अनुभवी पुजारियों और भारत के अन्य प्रसिद्ध विशेषज्ञों से जोड़ते हैं।',
            buttonText: 'सेवाएं देखें',
        }
    ];

    // Change language every 60 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLanguageIndex((prevIndex) => (prevIndex + 1) % serviceContent.length);
        }, 8000); // Change language every 60 seconds

        return () => clearInterval(interval);
    }, [serviceContent.length]);

    // Get current content based on language index
    const currentContent = serviceContent[languageIndex];

    return (
        <section className="container" style={{ marginTop: 200, marginBottom: 200 }}>
            <div className="mb-5 section-title text-center">
                <h2>{currentContent.sectionTitle}</h2>
                <p className="m-0">{currentContent.sectionDescription}</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img">
                            <img src={img2} alt="Pooja Service" className="img-fluid" />
                            <img src={img3} alt="Homa Service" className="img-fluid mt-4" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="service-img mt-4 mt-lg-0">
                            <img src={img4} alt="Astrology Consultation" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="service-content ps-4 mt-4 mt-lg-0">
                            <h2>{currentContent.heading}</h2>
                            <p className="mt-4 mb-5 text-secondary form-text">
                                {currentContent.description}
                            </p>
                            <Link to={'/service'} className="btn-get-started scrollto">
                                {currentContent.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service