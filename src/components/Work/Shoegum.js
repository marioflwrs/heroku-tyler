import Navigation from '../Navigation/Navigation';
import Gallery from 'react-photo-gallery';

import { photos } from './shoegum-photos/ShoegumPhotos';

const Shoegum = () => {

    return (
        <div>
            <Navigation />
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
  }
  
  export default Shoegum;