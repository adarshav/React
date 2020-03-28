import React from 'react';

import './imageUpload.component.scss';
import { storage } from '../firebase/firebase.utils';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image : null,
            url :''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleChange = e => {
        if(e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ( { image } ))
        }
    }

    handleUpload = () => {
        const { image } = this.state;

        var uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //this depicts progress
            console.log('uploaded');
        }, 
        (error) => {
            //here error
            console.log(error);
        }, 
        () => {
            //completed
            storage.ref('images').child(`${image.name}`).getDownloadURL().then(url => {
                console.log(url);
                this.setState({ url });
            })
            

        });

    }
    render() {
        return(
            <div className = 'file'>
                <input type = 'file' onChange = {this.handleChange}/>
                <button onClick = { this.handleUpload }>Upload</button>
                <br/>
                <img src = { this.state.url  || 'https://via.placeholder.com/150'} alt = 'uploaded' height = '150' width = '150'/>
            </div>
        )
    }
}

export default ImageUpload;