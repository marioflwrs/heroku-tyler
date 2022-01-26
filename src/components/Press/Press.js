import Navigation from '../Navigation/Navigation';
import Gallery from "react-photo-gallery";
import { photos } from './PressPhotos';
import React from 'react';


import './Press.scss';


class Press extends React.Component {
    constructor(props) {
        super(props)
        this.setPhotoState()
        this.state = {photos: []}
    }

    async setPhotoState() {
        console.log(photos);
        this.setState({photos});
    }

    onClick = e => {
        window.open(e.target.src)
    }

    render() {
        return (
            <div>
                <Navigation />
                <Gallery 
                photos={photos}
                onClick={this.onClick}
                direction={"column"}
                />
            </div>
        )
    }
}



export default Press;