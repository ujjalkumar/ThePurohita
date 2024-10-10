import React, {useState, useEffect} from 'react';
import img1 from '../../../images/pooja.webp';
import img2 from '../../../images/marriage.webp';
import img3 from '../../../images/homa.webp';
import img4 from '../../../images/Naamkaran.jpg';
import img5 from '../../../images/homeentry.png';
import { FaCheckDouble } from "react-icons/fa";
import './index.css';

const ClinicAndSpecialities = () => {
	const languages = {
		en: {
			title: "Pooja and Ritual Specialties",
			description: "Connecting you to the best Purohits for every special occasion and ritual.",
			specialties: [
				{ name: "Ganapati Puja", imgSrc: img1 },
				{ name: "Homa Rituals", imgSrc: img3 },
				{ name: "Marriage Ceremonies", imgSrc: img2 },
				{ name: "Naamkaran Ceremony", imgSrc: img4 },
				{ name: "Griha Pravesh", imgSrc: img5 }
			]
		},
		bn: {
			title: "পূজা ও আচার বিশেষত্ব",
			description: "প্রতিটি বিশেষ অনুষ্ঠান এবং আচার-অনুষ্ঠানের জন্য সেরা পুরোহিতদের সাথে আপনার সংযোগ।",
			specialties: [
				{ name: "গণপতি পূজা", imgSrc: img1 },
				{ name: "হোম আচার", imgSrc: img3 },
				{ name: "বিবাহ অনুষ্ঠান", imgSrc: img2 },
				{ name: "নামকরণ অনুষ্ঠান", imgSrc: img4 },
				{ name: "গৃহপ্রবেশ", imgSrc: img5 }
			]
		},
		hi: {
			title: "पूजा और अनुष्ठान विशेषता",
			description: "हर विशेष अवसर और अनुष्ठान के लिए सर्वश्रेष्ठ पुरोहितों से आपका संपर्क।",
			specialties: [
				{ name: "गणपति पूजा", imgSrc: img1 },
				{ name: "होम अनुष्ठान", imgSrc: img3 },
				{ name: "विवाह समारोह", imgSrc: img2 },
				{ name: "नामकरण समारोह", imgSrc: img4 },
				{ name: "गृह प्रवेश", imgSrc: img5 }
			]
		}
	};
	const [language, setLanguage] = useState('en'); // Default language is English

	// Automatic language switching every minute
	useEffect(() => {
		const languagesArray = ['en','bn', 'hi'];
		let currentIndex = 0;

		const switchLanguage = () => {
			currentIndex = (currentIndex + 1) % languagesArray.length;
			setLanguage(languagesArray[currentIndex]);
		};

		const intervalId = setInterval(switchLanguage, 8000); // 60000 ms = 1 minute

		return () => clearInterval(intervalId); // Cleanup interval on component unmount
	}, []);

	return (
		<section className="section section-specialities position-relative">
			<div className="container-fluid">
				{/* Section Title and Description */}
				<div className='mb-5 section-title text-center'>
					<h2>{languages[language].title}</h2>
					<p className='m-0'>{languages[language].description}</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
							{/* Dynamic Specialty Items based on Selected Language */}
							{languages[language].specialties.map((speciality, index) => (
								<div className="speciality-item text-center" key={index}>
									<div className="speciality-img">
										<img src={speciality.imgSrc} className="img-fluid griha-pravesh-img" alt={speciality.name} />
										<span><i><FaCheckDouble /></i></span>
									</div>
									<p>{speciality.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClinicAndSpecialities;