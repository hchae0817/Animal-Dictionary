import "./Animal.css"

export interface IAnimal {
  id: string,
  name: string,
  image?: string,
  body: string[],
}


interface IAnimalProps {
  animal: IAnimal;
}

export function Animals(props: IAnimalProps) {
  return (

    <div className='animal'>
      <h1 className='name uppercase font-black text-2xl md:text-3xl lg:text-4xl'>{props.animal.name}</h1>
      <br />
      <div className="flex justify-center mb-6">
        <img
          className="max-w-full h-auto rounded-lg shadow-md"
          src={props.animal.image}
          alt={props.animal.name}
        />
      </div>
      <div>
        <br />
        <h3 className="text-1xl md:text-2xl lg:text-3xl font-black uppercase">
          The more about the {props.animal.name}!
        </h3>
        <br />
        <p>{props.animal.body}</p>
      </div>
    </div>

  )
}
