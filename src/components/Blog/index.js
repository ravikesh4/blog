import React from 'react'
import { Link } from 'react-router-dom'

function Blog({ id, title, image, description, date}) {
    return (
        <div className="col-lg-4 mb-4">
            <div className="entry2">
                <Link to={`/blog/${id}`}>
                    <img src={process.env.PUBLIC_URL + `${image}`} alt="blog" className="img-fluid rounded" /></Link>
                <div className="excerpt">
                    <span className="post-category text-white bg-secondary mb-3">Tech</span>
                    <h2><Link to={`/blog/${id}`}>{title}</Link></h2>
                    <div className="post-meta align-items-center text-left clearfix">
                        <figure className="author-figure mb-0 mr-3 float-left">
                            <img src={process.env.PUBLIC_URL + `${image}`} alt="blog"
                                className="img-fluid" /></figure>
                        <span className="d-inline-block mt-1">By <Link to={`/blog/${id}`}>Ravikesh Yadav</Link></span>
                        {/* <span>&nbsp;-&nbsp; {date}</span> */}
                    </div>
                    <p>{description.substring(0,50)}...</p>
                    <p><Link to={`/blog/${id}`}>Read More</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Blog
