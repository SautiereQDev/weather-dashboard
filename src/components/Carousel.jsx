import {useState} from "react";
import { LuArrowLeftCircle, LuArrowRightCircle  } from "react-icons/lu";

const Carousel = ({components, nbElements}) => {
    const [index, setIndex] = useState(0)
    const elementsDisplayed = components.slice(index, (nbElements + index))

    const handleDecrement = () => {
        if (index > 0) {
            setIndex(index - 1)
        }
    }

    const handleIncrement = () => {
        if (index < components.length - nbElements) {
            setIndex(index + 1)
        }
    }
    return <div className="flex w-full px-3">
        <button onClick={handleDecrement} className={index === 0 ? 'text-gray-500' : ''}><LuArrowLeftCircle size={28}/></button>
        <div className="flex gap-6 flex-row w-full px-4">
            {elementsDisplayed.map((element, key) => (
                <div key={key} className="w-full">
                    {element}
                </div>
            ))}
        </div>
        <button onClick={handleIncrement} className={index + nbElements === components.length ? 'text-gray-500' : ''}><LuArrowRightCircle size={28} /></button>
    </div>
}

export default Carousel;