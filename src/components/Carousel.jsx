import {useState} from "react";
import { LuArrowLeftCircle, LuArrowRightCircle  } from "react-icons/lu";

const Carousel = ({components, nbElements}) => {
    const [index, setIndex] = useState(0)
    const elementsDisplayed = components.slice(index, (nbElements + index))

    const handleDecrement = ()=>{
        if(index < (components.length - nbElements)){
            setIndex(index => index + 1)
            console.log(elementsDisplayed)
        }
    }

    const handleIncrement = ()=>{
        if(index > (0 + nbElements)){
            setIndex(index => index - 1)
            console.log(elementsDisplayed)
        }
    }

  return <>
      <button onClick={handleIncrement}><LuArrowLeftCircle size={28}/></button>
      <div className="flex w-max">
          {elementsDisplayed.map((element, key) => (
              <div key={key}>
                  {element}
              </div>
          ))}
      </div>
      <button onClick={handleDecrement}><LuArrowRightCircle size={28}/></button>
  </>
};

export default Carousel;