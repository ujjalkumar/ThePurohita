import React from 'react';
import marriage_image from '../../../images/marriage.webp';
import pooja_images from '../../../images/Pooja.webp';
import BlogDetail from './BlogDetail';
import './Blog.css';

const Blog = () => {
    const blogData = [
        {
            title: "Understanding Hindu Rituals",
            excerpt: "Dive deep into the significance and practices of various Hindu rituals.",
            image: marriage_image, // Replace with actual image paths
            date: "September 20, 2024",
            author: "Priya Sharma",
        },
        {
            title: "Astrology in Modern Life",
            excerpt: "Exploring how astrology impacts our daily decisions and relationships.",
            image: pooja_images, // Replace with actual image paths
            date: "September 15, 2024",
            author: "Rahul Verma",
        },
        {
            title: "The Importance of Poojas",
            excerpt: "Understanding the spiritual and cultural significance of poojas in Hinduism.",
            image: marriage_image, // Replace with actual image paths
            date: "September 10, 2024",
            author: "Anita Rao",
        },
        // Add more blog posts as needed
    ];

    return (
        <section className="blogs my-5" id="BlogContaint">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h5 className="brand-color text-uppercase">Our Blogs</h5>
                    <h1 className="display-4">From Our Blog News</h1>
                </div>
                <div className="row">
                    {
                        blogData.map(blog => (
                            <BlogDetail key={blog.title} blog={blog} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;