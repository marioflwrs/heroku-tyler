import Navigation from '../Navigation/Navigation';
import Gallery from 'react-photo-gallery';

import { photos } from './avgvst-photos/AvgvstPhotos';


const Avgvst = () => {

    return (
        <div>
            <Navigation />
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
  }
  
  export default Avgvst;