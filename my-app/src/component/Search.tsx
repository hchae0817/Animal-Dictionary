
//import Dropdown from './Dropdown';
import { IAnimal } from './Animals';
import useFetch from './useFetch';
import { useEffect, useState, useRef } from 'react';
import Carouselchild from './Carouselchild';
import Dropdown from './Dropdown';

function Search() {

    const [animals, setAnimal] = useState<IAnimal[]>([]);
    const carousel = useRef<any | null>(null);

    function setSelected(props: IAnimal) {
        carousel.current?.goTo(animals.indexOf(props));
        setAnimal(animals.map(a => ({ ...a, selected: a.id === props.id })));
    }

    useEffect(() => {
        fetch(`http://localhost:3001/content`)
            .then((res) => res.json())
            .then((data) => setAnimal(data));
    }, []);


    return (
        <div>
            <br/>
            <Dropdown
                animals={animals}
                setSelected={setSelected}
            />
            <br/>
            <Carouselchild
                animals={animals}
                carousel={carousel}
            />
        </div>
    )

}
export default Search;