import React from 'react';
import { Link } from 'react-router-dom';
import Homan from '../../../images/doc/s1.png';
const HeaderTop = () => {
    return (
        <div className="row d-flex align-items-center container headerTop">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1 md-mx-5 justify-content-center">
                <h1>Book Your Purohita Today!</h1>
                <p className="text-secondary">Ready to start your spiritual journey? Book Now to connect with a purohita who resonates with your needs. Experience the richness of Hindu traditions with ThePurohita.com.
                </p>
                <Link to="/appointment" className="btn btn-primary btn-lg shadow rounded"> Book Now</Link>

            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={Homan} className="img-fluid rounded" alt="" />
            </div>
        </div>
    );
};

export default HeaderTop;