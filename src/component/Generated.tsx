import { IAnimal } from "./Animals";

const generateRandomAnimals = (): IAnimal[] => {
    return [
      {
        id: "1",
        name: "Cat",
        image: "https://placekitten.com/400/400", // Placeholder image for Cat
        body: [
          "Cats are curious and independent creatures.",
          "They love exploring small spaces and tend to keep themselves entertained.",
          "With sharp claws and stealthy movements, cats are natural hunters."
        ]
      },
      {
        id: "2",
        name: "Dog",
        image: "https://place.dog/400/400", // Placeholder image for Dog
        body: [
          "Dogs are loyal, affectionate, and protective of their family.",
          "They love being part of an active household and enjoy long walks.",
          "A dog is a great companion for both kids and adults."
        ]
      },
      {
        id: "3",
        name: "Lion",
        image: "https://placeimg.com/400/400/animals", // Placeholder image for Lion
        body: [
          "Lions are known for their strength and majestic appearance.",
          "They are social animals, often living in groups known as prides.",
          "Lions are apex predators, ruling the savannah."
        ]
      },
      {
        id: "4",
        name: "Bird",
        image: "https://placeimg.com/400/400/nature", // Placeholder image for Bird
        body: [
          "Birds are diverse creatures that can be found in almost every environment.",
          "They are known for their ability to fly, though some species are flightless.",
          "Birds communicate through songs and calls, making them one of the most vocal creatures."
        ]
      },
      {
        id: "5",
        name: "Rabbit",
        image: "https://placekitten.com/400/400", // Placeholder image for Rabbit
        body: [
          "Rabbits are gentle, social animals that love to burrow.",
          "They have excellent hearing and can hop long distances in a single jump.",
          "Rabbits are herbivores, feeding mainly on grass, vegetables, and leafy greens."
        ]
      }
    ];
  };

  export default generateRandomAnimals