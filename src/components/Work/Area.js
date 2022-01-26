import Navigation from '../Navigation/Navigation';
import Gallery from "react-photo-gallery";
import { photos } from './area-photos/AreaPhotos';


const Area = () => {

    return (
        <div>
            <Navigation />
            <Gallery photos={photos} direction={"column"} />
        </div>
    );
  }
  
  export default Area;