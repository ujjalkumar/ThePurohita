import React from 'react'
import './index.css';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ImageHeading from '../../images/pooja.webp';
import img from '../../images/logo.png';
import SubHeader from '../Shared/SubHeader';
import { useGetAllBlogsQuery } from '../../redux/api/blogApi';
import { Empty, message } from 'antd';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { useGetDoctorsQuery } from '../../redux/api/doctorApi';

const About = () => {
    const content = "";
    /*const { data, isError, isLoading } = useGetAllBlogsQuery({ limit: 4 });
    const { data: doctorData, isLoading: DoctorIsLoading, isError: doctorIsError } = useGetDoctorsQuery({ limit: 4 });

    const blogData = data?.blogs;
    const doctors = doctorData?.doctors;

    let doctorContent = null;
    if (!DoctorIsLoading && doctorIsError) doctorContent = <div>Something Went Wrong!</div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length === 0) doctorContent = <div><Empty /></div>
    if (!DoctorIsLoading && !doctorIsError && doctors?.length > 0) doctorContent =
        <>
            {doctors && doctors.map((item, id) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={id + item.id}>
                    <div className="card shadow border-0 mb-5 mb-lg-0">
                        {item.img && <img src={item.img} className="img-fluid w-100" alt="" />}
                        <div className="p-2">
                            <h4 className="mt-4 mb-0" style={{ color: '#223a66' }}>
                                <a>{item?.firstName + ' ' + item?.lastName}</a>
                            </h4>
                            <p>{item?.designation}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>

    let content = null;
    if (!isLoading && isError) content = <div>{message.error('Something went Wrong!')}</div>
    if (!isLoading && !isError && blogData?.length === 0) content = <Empty />
    if (!isLoading && !isError && blogData?.length > 0) content =
        <>
            {
                blogData && blogData?.map((item, id) => (
                    <div className="col-lg-3 col-md-6" key={id + item.id}>
                        <div className="card shadow border-0 mb-5 mb-lg-0">
                            <img src={item?.img} alt="Blog Image" width={300} height={200} className="w-100 rounded-top image-hover" style={{ objectFit: 'contain' }} />
                            <div className='p-2'>
                                <Link to={`/blog/${item?.id}`}>
                                    <h6 className="text-start mb-1 text-capitalize" style={{ color: '#223a66' }}>{truncate(item?.title, 40)}</h6>
                                </Link>
                                <div className="px-2">
                                    <p className="form-text text-start text-capitalize">{truncate(item?.description, 80)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>*/

    return (
        <>
            <Header />
            <SubHeader title="About Us" subtitle="Dedicated to Serving Your Spiritual Needs" />
            <div className="container" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row p-5">
                    <div className="col-lg-6">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Purohitas' Achievements</h2>
                            <p className='form-text m-0'>Empowering Communities through Rituals</p>
                        </div>
                        <p className='mt-3'>
                            At The Purohitas, our team of highly skilled Purohitas (priests) is dedicated to serving our
                            community with utmost sincerity and respect. Each of our Purohitas has completed extensive
                            training in various Hindu rituals and traditions, ensuring that they are equipped to guide
                            and support you through your spiritual journey.
                        </p>
                        <p className='mt-3'>
                            With years of experience, our Purohitas have performed a wide range of ceremonies, including
                            weddings, housewarmings, and religious festivals, bringing joy and peace to countless
                            families. Their profound knowledge of Vedic scriptures and rituals enables them to tailor
                            each ceremony to meet the unique needs of individuals and families, honoring their
                            traditions while fostering a sense of community.
                        </p>
                        <p className='mt-3'>
                            Our Purohitas are not only adept at performing rituals but also act as spiritual counselors.
                            They offer guidance and support, helping individuals navigate life's challenges through the
                            wisdom of ancient texts and spiritual practices. By fostering a deep connection with their
                            clients, they contribute to the emotional and spiritual well-being of those they serve.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={ImageHeading} alt="Our Team" className="img-fluid banner-image rounded shadow"/>
                    </div>
                </div>
            </div>

            <div className="container" style={{marginBottom: 100, marginTop: 100}}>
                <div className="row">
                    {content}
                </div>
            </div>

            <div className="container" style={{marginBottom: 100, marginTop: 100}}>
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className='section-title text-center'>
                            <h2 className='text-uppercase'>Our Values and Mission</h2>
                            <p className='form-text m-0'>Rooted in Tradition, Committed to Service</p>
                        </div>
                        <p className='mt-3'>
                            We believe in honoring the rich cultural heritage of Hindu rituals while adapting to the
                            needs of modern society. Our mission is to make spiritual services accessible to everyone,
                            fostering a deeper connection with tradition and culture. We are committed to providing an
                            environment where every ceremony is treated with the respect and dignity it deserves.
                        </p>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {
                                Array(6).fill(null).map((_, id) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={id + 3}>
                                        <div className="award-img">
                                            <img src={img} alt="Award" className="img-fluid"/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="container say-about" style={{ marginBottom: 100, marginTop: 100 }}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-6">
                        <div className='mb-4 section-title text-center'>
                            <h2 className='text-uppercase'>What Our Clients Say</h2>
                            <p className='form-text m-0'>Testimonials from Satisfied Clients</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-6">
                        <div className="my-2">
                            <h4 style={{ color: '#223a66' }} className='my-0'>Incredible Experience!</h4>
                            <span>Priya Sinha</span>
                        </div>
                        <p className='form-text'>
                            The Purohitas made our wedding ceremony a truly special event. Their attention to detail and commitment to preserving traditions were evident in every aspect. Highly recommended for anyone looking for authentic rituals.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;
