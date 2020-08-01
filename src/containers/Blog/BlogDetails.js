import React, { useState, useEffect } from 'react'
import {db} from '../../firebase'
import './BlogDetails.css'

function BlogDetails({ id, title, image, description, date, match }) {
    const urlId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
    // console.log(urlId);

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        db.collection('blogs').onSnapshot(snapshot => {
            setBlogs(snapshot.docs.map(doc => { return { id: doc.id, data: doc.data() } }))
        })
    }, [])

    // console.log(blogs);

    return (
        <div>
            <div>
                {/* <h3 className="blog-header">{match.params.id}</h3> */}
                {/* <h3 className="blog-header">{urlId}</h3> */}

                <img src={process.env.PUBLIC_URL + '/images/img_1.jpg'} alt="blog" className="img-fluid blog-img" />
                {/* <img src={blog.data.image} alt="blog" className="img-fluid blog-img" /> */}
            </div>
            {blogs.map(blog => (
                <div  key={blog.id}>
                    {blog.id === urlId ? (
                <div>
                    {/* <h2>{blog.data.title}</h2> */}
                    <div className="text-center mt-4">
                        <h2>{blog.data.title}</h2>
                    </div>
                    <div className="post">
                        <img src={blog.data.image} alt="blog"
                            className="img-fluid post-img" />

                        <p className="container">

                            {blog.data.content}
                        </p>
                        {/* <img src={blog.data.image} alt="blog"
                            className="img-fluid post-img" />
                        <p className="container">

                            {blog.data.content}
                        </p> */}
                    </div>

                </div>
                ) : '' } 
                </div>
            ))} 
            
        </div>
    )
}

export default BlogDetails;
