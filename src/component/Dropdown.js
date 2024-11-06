import { useState } from "react";
import { CgChevronDown } from 'react-icons/cg'
import './Dropdown.css'

const Dropdown = ({ setSelected, animals }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="dropdown">
            <div className="dropdown-btn uppercase" onClick={e => setIsActive(!isActive)}>
                {animals?.find(animal => animal.selected)?.name ?? 'Choose One'}
                <CgChevronDown />
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {animals?.map(animal =>
                        <div
                            key={animal.id}
                            onClick={(e) => {
                                setSelected(animal);
                                setIsActive(false);
                            }} className="dropdown-item uppercase">
                            {animal.name}
                        </div>)}
                </div>
            )}
        </div>
    )

}

export default Dropdown;