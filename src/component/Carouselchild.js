import Carousel from 'react-elastic-carousel';
import { Animals } from './Animals';

const Carouselchild = ({ carousel, animals }) => {

    return (
    <Carousel ref={el => (carousel.current = el)}>
        {animals?.map((animal) => {
            return (
                <div key={animal.id}>
                    <Animals
                        animal={animal}
                    />
                </div>
            );
        })}
    </Carousel>
    )


}


export default Carouselchild;