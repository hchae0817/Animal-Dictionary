
import { IAnimal } from './Animals';
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
        const fetchCats = fetch(`https://api.thecatapi.com/v1/images/search?limit=5`)
          .then((res) => res.json())
          .then((data) =>
            data.map((item: any) => ({
              id: item.id,
              name: "Cat", // Placeholder name
              image: item.url,
              body: ["This cat is a playful and curious creature, with a sleek coat and sharp eyes.",
      "It enjoys lounging in the sun but is always ready to pounce on its next adventure.",
      "With its soft fur and whiskers twitching at every sound, this cat is both a hunter and a cuddle buddy."], // Add details if available
            }))
          );
    
        const fetchDogs = fetch(`https://api.thedogapi.com/v1/images/search?limit=7`)
          .then((res) => res.json())
          .then((data) =>
            data.map((item: any) => ({
              id: item.id,
              name: "Dog", // Placeholder name
              image: item.url,
              body: [
                "Dogs are known for their loyalty, playfulness, and protective instincts.",
            
              ], // Add details if available
            }))
          );
    
        // Fetch both cats and dogs and combine the data
        Promise.all([fetchCats, fetchDogs]).then((results) => {
          const combinedData = [...results[0], ...results[1]]; // Merges cat and dog data
          setAnimal(combinedData);
        });
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