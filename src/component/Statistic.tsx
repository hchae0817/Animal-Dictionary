import { IAnimal } from './Animals';
import { useEffect, useState } from 'react';
import Pie from './Pie';
import Bubble from './Bubble';
import generateRandomAnimals from './Generated';

const Statistic = () => {
    const [animals, setAnimal] = useState<IAnimal[]>([]);
    useEffect(() => {
        const fetchCats = fetch(`https://api.thecatapi.com/v1/images/search?limit=5`)
            .then((res) => res.json())
            .then((data) =>
                data.map((item: any) => ({
                    id: item.id,
                    name: "Cat", // Placeholder name
                    image: item.url,
                    body: [item.id], // Add details if available
                }))
            );

        const fetchDogs = fetch(`https://api.thedogapi.com/v1/images/search?limit=5`)
            .then((res) => res.json())
            .then((data) =>
                data.map((item: any) => ({
                    id: item.id,
                    name: "Dog", // Placeholder name
                    image: item.url,
                    body: [item.id], // Add details if available
                }))
            );

        // Fetch both cats and dogs and combine the data
        Promise.all([fetchCats, fetchDogs]).then((results) => {
            const combinedData = [...results[0], ...results[1]]; // Merges cat and dog data
            const test = generateRandomAnimals()
            setAnimal([...combinedData, ...test]);
        });
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
        <section id='statistic'className="h-full">
           <div className="flex justify-center items-center p-4 pt-4 h-screen" style={{padding: "50px"}}>
                <div className="w-1/2 max-w-md">
                    <Pie pieData={pieData} />
                </div>
                <div className="w-1/2 max-w-md">
                    <Bubble bubbleData={bubbleData} />
                </div>
            </div>
        </section>
    )
}

export default Statistic