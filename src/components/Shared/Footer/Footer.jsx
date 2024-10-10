import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer position-relative">
			<div className="footer-top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-about">
								<div className="footer-logo">
									<Link to={'/'}>
										<img src={logo} alt="logo" style={{ maxWidth: '50px' }} />
									</Link>
								</div>
								<div className="footer-about-content">
									<p className='form-text' style={{maxWidth:200}}>
										At ThePurohita.com, we connect you with experienced Purohit services for all your pooja and Hindu rituals.
										Our mission is to make spiritual services accessible and personalized to suit your needs.
									</p>
								</div>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-menu">
								<h2 className="footer-title">For General</h2>
								<ul>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Search for Purohita</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Login</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Register</Link></li>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Booking</Link></li>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' />  Dashboard</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">

							<div className="footer-widget footer-menu">
								<h2 className="footer-title">For Purohitas</h2>
								<ul>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' /> Appointments</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' /> Login</Link></li>
									<li><Link to={'/register'}><FaAngleDoubleRight className='icon' /> Register</Link></li>
									<li><Link to={'/dashboard'}><FaAngleDoubleRight className='icon' /> Dashboard</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-contact">
								<h2 className="footer-title mt-3 mt-md-0">Contact Us</h2>
								<div className="footer-contact-info">
									<div className="footer-address">
										<span><i className="fas fa-map-marker-alt"></i></span>
										<p> Gopalnagar, Nayabad<br /> Kolkata, West Bengal <br /> India, 700150 </p>
									</div>
									<p>Email: <a href="mailto:support@thepurohita.com"
												 className="text-white">support@thepurohita.com</a></p>
									<p>Mobile: <a href="tel:+919674738311" className="text-white">+91 9674738311</a></p>
									<p>Phone: <a href="tel:03329568311" className="text-white">+91 3329568311</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container-fluid">

					<div className="copyright">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="copyright-text">
									<p className="mb-0"><a href="/">
										<div className="copyRight text-center">
											<p className="mb-0">&copy; {new Date().getFullYear()} ThePurohita.com | All
												Rights Reserved</p>
										</div>
									</a></p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<ul className="policy-menu d-flex gap-2 justify-content-center">
										<Link to={'/terms-and-conditions'} className='text-white'>Terms and Conditions |</Link>
										<Link to={'/privacy-policy'} className='text-white'>| Policy |</Link>
										<Link to={'/cancellation-refund-policy'} className='text-white'>| Cancellation and Refund Policy</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</footer>
	);
};

export default Footer;