import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import log from '../../images/doc/info.svg';
import register from '../../images/doc/register.svg';
import SignIn from './SignIn';
import './SignInForm.css';
import SignUp from './SignUp';

const SignInForm = () => {
    const [isSignUp, setSignUp] = useState(false);
    return (
        <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link to="/">
                <span className="pageCloseBtn"><FaTimes /></span>
            </Link>
            <div className="forms-container">
                <div className="signIn-singUp">
                    <SignIn />
                    <SignUp setSignUp={setSignUp} />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h2 className="new-here-title">New Here? Welcome to The Purohita!</h2>
                        <p className="new-here-description">
                            Thank you for visiting ThePurohita.com! We're here to help you find experienced Purohitas
                            and priests for all your poojas, homas, and traditional Hindu rituals. Whether it’s a simple
                            puja or a grand event, our team is dedicated to making it a divine experience.
                        </p>
                        <p className="new-here-description">
                            Explore our range of services, connect with knowledgeable Purohitas, and make your religious
                            ceremonies stress-free and sacred. If you're new, we recommend creating an account for
                            seamless bookings and personalized services.
                        </p>
                        <button className="iBtn transparent" onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                    <img src={`${log}`} alt="" className="pImg"/>
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p className="one-of-us-description">
                            Join <strong>ThePurohita</strong> family and be a part of a community that values tradition,
                            authenticity, and spirituality. Becoming a member gives you priority access to our trusted
                            Purohitas and astrologers, making it easier for you to book rituals and ceremonies when you
                            need them the most.
                        </p>
                        <p className="one-of-us-description">
                            As a member, you will enjoy exclusive benefits, special discounts on services, and a
                            personalized experience tailored to your preferences. Connect with us, and let us make your
                            spiritual journey smoother and more meaningful.
                        </p>
                        <button className="iBtn transparent" onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    <img src={`${register}`} alt="" className="pImg"/>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;