import React, { useEffect } from 'react';
import './BookDoctor.css';
import { Link } from 'react-router-dom';
import { useGetDoctorsQuery } from '../../../redux/api/doctorApi';
import { FaLocationArrow, FaCheckCircle, FaRegHeart, FaRupeeSign, FaClock } from "react-icons/fa";
import { useAddFavouriteMutation } from '../../../redux/api/favouriteApi';
import StarRatings from 'react-star-ratings';
import { message } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
const fallbackPurohitas = [
	{
		id: 1,
		firstName: 'Acharya',
		lastName: 'Sharma',
		img: 'https://via.placeholder.com/150',
		specialization: 'Vedic Astrology & Yagnas',
		location: 'Kolkata, India',
		availability: 'Morning & Evening',
		priceRange: '₹500 - ₹1500',
	},
	{
		id: 2,
		firstName: 'Pandit',
		lastName: 'Bhattacharya',
		img: 'https://via.placeholder.com/150',
		specialization: 'Griha Pravesh & Wedding Rituals',
		location: 'Delhi, India',
		availability: 'Evening',
		priceRange: '₹800 - ₹2000',
	},
	{
		id: 3,
		firstName: 'Guruji',
		lastName: 'Mishra',
		img: 'https://via.placeholder.com/150',
		specialization: 'Namakaran & Satyanarayan Puja',
		location: 'Mumbai, India',
		availability: 'Weekends',
		priceRange: '₹1000 - ₹2500',
	},
	{
		id: 4,
		firstName: 'Swami',
		lastName: 'Ananda',
		img: 'https://via.placeholder.com/150',
		specialization: 'Spiritual Guidance & Homas',
		location: 'Bengaluru, India',
		availability: 'Anytime',
		priceRange: '₹1200 - ₹3000',
	},
	{
		id: 5,
		firstName: 'Acharya',
		lastName: 'Tripathi',
		img: 'https://via.placeholder.com/150',
		specialization: 'Samskaras & Pind Daan',
		location: 'Varanasi, India',
		availability: 'Morning',
		priceRange: '₹600 - ₹1800',
	},
];
const BookPurohitas = () => {
	const { data, isError, isLoading } = useGetDoctorsQuery({ limit: 10 });
	/*const purohitas = data?.purohitas;*/
	const purohitas = fallbackPurohitas;
	const [addFavourite, { isSuccess, isLoading: FIsLoading, isError: fIsError, error }] = useAddFavouriteMutation();

	const handleAddFavourite = (id) => {
		addFavourite({ purohitaId: id });
	};

	useEffect(() => {
		if (!FIsLoading && fIsError) {
			message.error(error?.data?.message);
		}
		if (isSuccess) {
			message.success('Successfully added to Favourites');
		}
	}, [isSuccess, fIsError, FIsLoading, error?.data?.message]);

	let content = null;
	/*if (!isLoading && isError) content = <div>Something Went Wrong!</div>;*/
	/*if (!isLoading && !isError && purohitas?.length === 0) content = <div>No Purohitas Available</div>;
	if (!isLoading && !isError && purohitas?.length > 0) {*/
	if (fallbackPurohitas.length > 0) {
		content = (
			<>
				{purohitas &&
					purohitas?.map((item) => (
						<SwiperSlide key={item.id}>
							<div className="profile-widget">
								<div className="doc-img">
									<Link to={`/purohitas/profile/${item?.id}`}>
										{item?.img && <img className="img-fluid" alt="" src={item?.img} />}
									</Link>
									<a
										style={{ cursor: 'pointer' }}
										className="position-absolute top-0 end-0 me-2"
										onClick={() => handleAddFavourite(item?.id)}
									>
										<FaRegHeart />
									</a>
								</div>
								<div className="pro-content">
									<h3 className="title">
										<Link to={`/purohitas/profile/${item?.id}`}>
											{item?.firstName + ' ' + item?.lastName}
										</Link>
										<FaCheckCircle className="verified" />
									</h3>
									<p className="speciality">{item?.specialization}</p>
									<div className="w-100 d-flex align-items-center">
										<StarRatings
											rating={4.5}
											starRatedColor="#f4c150"
											numberOfStars={5}
											name="rating"
											className="star"
											starDimension="20px"
											starSpacing="5px"
										/>
										<span className="d-inline-block text-secondary mt-2">(22 reviews)</span>
									</div>
									<ul className="available-info">
										<li>
											<FaLocationArrow className="icon" /> {item?.location || 'India'}
										</li>
										<li>
											<FaClock className="icon" /> Available for {item?.availability}
										</li>
										<li>
											<FaRupeeSign className="icon" /> ₹{item?.priceRange || 'N/A'}
										</li>
									</ul>
									<div className="d-flex justify-content-between align-items-center">
										<Link
											to={`/purohitas/profile/${item?.id}`}
											className="btn btn-outline-info btn-sm view-profile-btn"
										>
											View Profile
										</Link>
										<Link to={`/booking/${item?.id}`} className="btn btn-sm book-btn">
											Book Now
										</Link>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
			</>
		);
	}

	return (
		<section className="section-purohitas container">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12 col-md-3 col-lg-3">
						<div className="mb-2 section-title text-center">
							<h2>Book Our Purohitas</h2>
							<p className="m-0 text-secondary">Find experienced Purohitas for your spiritual needs.</p>
						</div>
						<div className="form-text">
							<p>
								Our highly qualified and experienced Purohitas specialize in various rituals such as Griha
								Pravesh, Namakaran, Satyanarayan Puja, and more.
							</p>
							<p>
								Get authentic Vedic services with a traditional approach. Whether you need guidance for daily
								poojas or major life events, we have the right Purohita for you.
							</p>
							<div className="text-center text-md-start my-3 my-md-0">
								<Link to={'/purohitas'} className="more-btn text-center text-md-start">
									See More
								</Link>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-9 col-lg-9">
						<div className="d-flex justify-content-center align-items-center gap-3 border-0">
							<Swiper
								spaceBetween={10}
								slidesPerView={1}
								modules={[Navigation, Autoplay]}
								navigation={true}
								loop={true}
								centeredSlides={true}
								autoplay={{ delay: 5000, disableOnInteraction: false }}
								breakpoints={{
									640: { slidesPerView: 2 },
									768: { slidesPerView: 2 },
									1024: { slidesPerView: 3 },
								}}
							>
								{content}
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookPurohitas;