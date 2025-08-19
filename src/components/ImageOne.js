import { Parallax } from 'react-parallax';
import Nasa from '../img/space.jpg';
import Banff from '../img/banff.jpg'

const ImageOne = () => (
    <Parallax className="image" bgImage={Banff} strength={800}>
        <div className='content'>
            <span className="img-txt">a trip to banff</span>
        </div>
    </Parallax>
);

export default ImageOne;