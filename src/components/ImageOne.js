import { Parallax } from 'react-parallax';
import Nasa from '../img/space.jpg';

const ImageOne = () => (
    <Parallax className="image" bgImage={Nasa} strength={800}>
        <div className='content'>
            <span className="img-txt">a trip to Space</span>
        </div>
    </Parallax>
);

export default ImageOne;