//import { Link } from '@reach/router';
import { useState } from 'react';

import { images } from "./ProjectorData";
import './Work.scss';

import Navigation from '../Navigation/Navigation';


function Work() {

    const [currImg, setCurrImg] = useState(0);
    return(
        <div className="work-background-container">
            <div className="work-container" style={{backgroundImage: `url(${images[currImg].img})`}}>           
                <Navigation />
                
                
                <div className="left"
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                        }}>
                </div>
                
                <div className="center">
                    <h1 style={images[currImg].textStyle}>{images[currImg].title}</h1>
                    <p style={images[currImg].textStyle}>{images[currImg].description}</p> 
                    <a rel="noreferrer" href={images[currImg].url} className="button">EXPLORE PROJECT</a>
                </div>
                
                <div 
                    className="right"
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}> 
                </div>
            </div>
        </div>

        
    );
}

export default Work;


/*

<div className="button">Left</div>
<div className="button">Right</div>

*/