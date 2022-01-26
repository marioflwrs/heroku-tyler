import Navigation from '../Navigation/Navigation';
import Gallery from 'react-photo-gallery';

import { photos } from './casetify-photos/CasetifyPhotos';

const Casetify = () => {

    return (
        <div>
            <Navigation />
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
  }
  
  export default Casetify;