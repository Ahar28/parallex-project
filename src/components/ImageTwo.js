import { Parallax } from 'react-parallax';
import river from '../img/river.jpg';

const ImageTwo = () => (
     <Parallax className="image" bgImage={river} strength={800}>
        <div className='content'>
            <span className="img-txt">a trip to river</span>
        </div>
    </Parallax>
);

export default ImageTwo;