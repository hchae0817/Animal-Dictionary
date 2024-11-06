import { IAnimal } from './Animals';
import useFetch from './useFetch';
import { useEffect, useState } from 'react';
import Pie from './Pie';
import Bubble from './Bubble';

const Statistic = () => {
    const [animals, setAnimal] = useState<IAnimal[]>([]);
    useEffect(() => {
        fetch(`http://localhost:3001/content`)
            .then((res) => res.json())
            .then((data) => setAnimal(data));
    }, []);


    const animalName = animals
        .map((animal: { name: string; }) => animal.name) // get all animal name
        .filter((name: string, index: any, array: string | any[]) => array.indexOf(name) === index); // filter out duplicates

    const pieData = animalName
        .map((name: string) => ({
            name: name,
            y: animals.filter((animal: { name: string; }) => animal.name === name).length
        }));

    const bubbleData = animalName
        .map((name: string) => ({
            name: name,
            value: animals.filter((animal: { name: string; }) => animal.name === name).length
        }));
    
    
    return (
        <><section id='statistic'>
    
        </section>

            <Pie
                pieData={pieData}
            />
            <h1></h1>
            <Bubble
                bubbleData={bubbleData}
            />

        </>
    
    )
}

export default Statistic