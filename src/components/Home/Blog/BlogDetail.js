import React from 'react';

const BlogDetail = ({ blog }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded">
                <img src={blog.image} alt={blog.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.excerpt}</p>
                    <p className="text-muted small">By {blog.author} on {blog.date}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
