import Navigation from '../Navigation/Navigation';
import Gallery from 'react-photo-gallery';

import { photos } from './nike-photos/NikePhotos';
 
const NikeCrosby = () => {

    return (
        <div>
            <Navigation />
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
  }
  
  export default NikeCrosby;