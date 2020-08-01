import React, { useState, useEffect } from 'react'
import Blog from '../../components/Blog';
import Banner from '../../components/Banner';
import {db} from '../../firebase'
function Home() {

    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        db.collection('blogs').onSnapshot(snapshot => {
            setBlogs(snapshot.docs.map(doc => { return {id: doc.id, data: doc.data()}}))
        })
    }, [])

    return (
        <React.Fragment>
            <Banner />
            <div className="site-section bg-white">
                <div className="container">
                    <div className="row">
                        
                        {blogs.map(blog => (
                            <Blog key={blog.id}
                            id={blog.id}
                            title={blog.data.title}
                            description={blog.data.content}
                            image="/images/img_1.jpg"
                            // image={blog.data.image}
                            // date="July 19, 2020"
                        />
                        ))}


                        {/* <Blog
                            id="1"
                            title="The AI magically removes moving objects from videos"
                            image="/images/img_1.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed
                            optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro
                          id est."
                          date="July 19, 2019"
                        />
                        <Blog
                            id="2"
                            title="The AI magically removes moving objects from videos"
                            image="/images/img_2.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed
                            optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro
                          id est."
                          date="July 19, 2020"
                        />
                        <Blog
                            id="3"
                            title="The AI magically removes moving objects from videos"
                            image="/images/img_3.jpg"
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo sunt tempora dolor laudantium sed
                            optio, explicabo ad deleniti impedit facilis fugit recusandae! Illo, aliquid, dicta beatae quia porro
                          id est."
                          date="July 19, 2020"
                        /> */}
                        
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;
