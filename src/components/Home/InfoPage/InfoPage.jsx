import React, { useState, useEffect } from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    const [languageIndex, setLanguageIndex] = useState(0);

    // Content Array for Different Languages
    const content = [
        {
            language: "English",
            title: "Why Choose Us?",
            description: "We provide the most experienced Purohitas from the Kalighat temple in Kolkata and other renowned priests from across India. Our services are reliable, authentic, and tailored to meet your spiritual requirements.",
            learnMore: "Learn More",
            boxes: [
                {
                    icon: <FaHouseUser className="icon" />,
                    heading: "Appointment",
                    subHeading: "24 Hours Service",
                    text: "Connect with priests anytime, anywhere, to plan your rituals according to your convenience."
                },
                {
                    icon: <FaHeadset className="icon" />,
                    heading: "Emergency Services",
                    subHeading: "+91 96747 38311",
                    text: "We offer priority booking and assistance for urgent rituals and consultations."
                },
                {
                    icon: <FaClock className="icon" />,
                    heading: "Working Hours",
                    subHeading: "Timing Schedule",
                    text: "Our team is available 24/7. Call us any time to schedule your next pooja."
                }
            ]
        },
        {
            language: "Bengali",
            title: "কেন আমাদের বেছে নেবেন?",
            description: "আমরা কলকাতার কালীঘাট মন্দির এবং ভারতের অন্যান্য অভিজ্ঞ পুরোহিতদের সেবা প্রদান করি। আমাদের সেবাগুলি নির্ভরযোগ্য, খাঁটি এবং আপনার আধ্যাত্মিক চাহিদা অনুযায়ী কাস্টমাইজড।",
            learnMore: "আরও জানুন",
            boxes: [
                {
                    icon: <FaHouseUser className="icon" />,
                    heading: "অ্যাপয়েন্টমেন্ট",
                    subHeading: "২৪ ঘণ্টার পরিষেবা",
                    text: "আপনার আচার অনুষ্ঠান পরিকল্পনার জন্য যে কোন সময়, যে কোন জায়গায় পুরোহিতদের সাথে যোগাযোগ করুন।"
                },
                {
                    icon: <FaHeadset className="icon" />,
                    heading: "জরুরী পরিষেবা",
                    subHeading: "+91 96747 38311",
                    text: "আমরা জরুরি আচার এবং পরামর্শের জন্য অগ্রাধিকার বুকিং এবং সহায়তা প্রদান করি।"
                },
                {
                    icon: <FaClock className="icon" />,
                    heading: "কাজের সময়",
                    subHeading: "সময়সূচী",
                    text: "আমাদের দল ২৪/৭ উপলব্ধ। আপনার পরবর্তী পূজার জন্য যে কোন সময় কল করুন।"
                }
            ]
        },
        {
            language: "Hindi",
            title: "हम क्यों चुनें?",
            description: "हम कोलकाता के कालीघाट मंदिर के सबसे अनुभवी पुरोहितों और भारत के अन्य प्रसिद्ध पुजारियों द्वारा सेवाएं प्रदान करते हैं। हमारी सेवाएं विश्वसनीय, प्रामाणिक और आपकी आध्यात्मिक आवश्यकताओं के अनुसार हैं।",
            learnMore: "और जानें",
            boxes: [
                {
                    icon: <FaHouseUser className="icon" />,
                    heading: "अपॉइंटमेंट",
                    subHeading: "24 घंटे सेवा",
                    text: "अपने अनुष्ठानों की योजना बनाने के लिए कभी भी, कहीं भी पुजारियों से जुड़ें।"
                },
                {
                    icon: <FaHeadset className="icon" />,
                    heading: "आपातकालीन सेवाएं",
                    subHeading: "+91 96747 38311",
                    text: "हम त्वरित अनुष्ठान और परामर्श के लिए प्राथमिकता बुकिंग और सहायता प्रदान करते हैं।"
                },
                {
                    icon: <FaClock className="icon" />,
                    heading: "कार्य के घंटे",
                    subHeading: "समय अनुसूची",
                    text: "हमारी टीम 24/7 उपलब्ध है। अगली पूजा के लिए कभी भी कॉल करें।"
                }
            ]
        }
    ];

    // Update Language Every Minute (60 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setLanguageIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 8000); // Change language every 60 seconds

        return () => clearInterval(interval);
    }, [content.length]);

    const currentContent = content[languageIndex];

    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>{currentContent.title}</h3>
                            <p>{currentContent.description}</p>
                            <div className="text-center">
                                <Link href="/" className="more-btn">
                                    {currentContent.learnMore} <i className="bx bx-chevron-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                {currentContent.boxes.map((box, index) => (
                                    <div className="col-xl-4 d-flex align-items-stretch" key={index}>
                                        <div className="icon-box mt-4 mt-xl-0">
                                            {box.icon}
                                            <h4>{box.heading}</h4>
                                            <small className="text-secondary">{box.subHeading}</small>
                                            <p>{box.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InfoPage