import { Parallax } from 'react-parallax';
import night from '../img/night.jpg';

const ImageThree = () => (
   <Parallax className="image" bgImage={night} strength={800}>
        <div className='content'>
            <span className="img-txt">a trip through night</span>
        </div>
    </Parallax>
);

export default ImageThree;