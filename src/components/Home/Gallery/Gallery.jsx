import React from 'react';
import './index.css';
import { Image } from 'antd';

const Gallery = () => {
    const imageArray = [
        'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1',
        'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+2',
        'https://via.placeholder.com/300/3357FF/FFFFFF?text=Image+3',
        'https://via.placeholder.com/300/FFFF33/FFFFFF?text=Image+4',
        'https://via.placeholder.com/300/FF33FF/FFFFFF?text=Image+5',
        'https://via.placeholder.com/300/33FFFF/FFFFFF?text=Image+6',
        'https://via.placeholder.com/300/FF8C00/FFFFFF?text=Image+7',
        'https://via.placeholder.com/300/8A2BE2/FFFFFF?text=Image+8'
    ];

    return (
        <section className="gallery container">
            <div className="text-center mb-5">
                <div className="section-title mb-3">
                    <h2>Gallery</h2>
                    <p>Dedicated to Serving Your Spiritual Needs</p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row g-0">
                    <Image.PreviewGroup>
                        {
                            imageArray.map((item, index) => (
                                <div className="col-lg-3 col-md-4 col-sm-12" key={index + 55}>
                                    <div className="gallery-item">
                                        <div className="gallery-lightbox d-flex justify-content-center align-items-center">
                                            <Image
                                                src={item}
                                                alt={`Gallery image ${index + 1}`}
                                                className="w-100"
                                                style={{objectFit:'cover', maxHeight:'280px', minHeight:'280px'}}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Image.PreviewGroup>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
