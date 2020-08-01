import React, { useState } from 'react'
import {db} from '../../firebase'
import firebase from 'firebase'

function CreatePost() {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    // const [image, setImage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        db.collection('blogs').add({
            title: title,
            content: content,
            // image: image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        // console.log(title, content);
        setTitle('')
        setContent('')
    }
    return (
        <div className="bg-white mt-3 p-3 container">
            <h2 className="text-center p-3">Post Your Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={event => setTitle(event.target.value)} className="form-control" id="title" placeholder="Title" />
                </div>

                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea className="form-control" value={content} onChange={event => setContent(event.target.value)} placeholder="Description" id="content" rows="3"></textarea>
                </div>
                {/* <div className="custom-file">
                    <input type="file" value={image} onChange={event => setImage(event.target.value)} className="custom-file-input" id="validatedCustomFile" required />
                    <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                    <div className="invalid-feedback">Example invalid custom file feedback</div>
                </div> */}
                <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </form>
        </div>
    )
}

export default CreatePost
