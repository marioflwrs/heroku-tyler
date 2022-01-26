import Navigation from '../Navigation/Navigation';
import Gallery from 'react-photo-gallery';

import { photos } from './myreality-photos/MyrealityPhotos';

const Myreality = () => {

    return (
        <div>
            <Navigation />
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
  }
  
  export default Myreality;