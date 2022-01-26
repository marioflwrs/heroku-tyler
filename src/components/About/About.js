import './About.scss';

import Navigation from '../Navigation/Navigation';



const About = () => {

    return (
        <div>
            <div className="about-container fade-in"> 
              <h1 className="page-title">ABOUT</h1>
                <Navigation />
            </div>
            
            <div className="article-container">
              <div className="article-text">
                  <h1>About</h1>
                  <p>Tyler Billinger is a New York City based Brand Consultant and Art Director. Billinger focuses on creating new brand narratives within the fashion, design, and lifestyle realms.</p>
              </div>
            </div> 
             

        </div>
    );
  }
  
  export default About;
  

  /* <img src={nytimes} alt="about-pic" />*/