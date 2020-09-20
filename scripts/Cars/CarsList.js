import { useColors } from "../Colors/ColorsProvider.js";
import { CarsHTML } from "./Cars.js";
import { useCars, getCars } from "./CarsProvider.js";

const eventHub = document.querySelector("body")
const domElement = document.querySelector(".carsContainer");

eventHub.addEventListener("colorsSelected", event => {
    if (event.detail.colorThatWasChosen !== "0" ) {

       const storedColorsArray = useColors()
       const colorObj = storedColorsArray.find(taco => taco.id === parseInt(event.detail.colorThatWasChosen))
       console.log("This should be a color string", colorObj.color)
       const matchingCars = useCars().filter(currentCar => {
           currentCar.colorString = colorObj.color
            return currentCar.colorId === parseInt(event.detail.colorThatWasChosen)
        })
        addCarsToDOM(matchingCars) 
    } else {
        addCarsToDOM(useCars());
    }
})
    
//useCars() function will fill the carsArray


//(thecarsArray) is a parameter-could be a taco-to invoke addCarsToDOM below,
// it needs to be added to the function above and invoked.
export const CarsList = () => {
    getCars()
    .then (()=> {
        const carsArray = useCars()
        // addCarsToDOM(carsArray)
    })
}


const addCarsToDOM = (theCarsArray) => {
    // const domElement = document.querySelector(".container");
    
    let HTMLArray = theCarsArray.map(oneCar => {
        return CarsHTML(oneCar);
    })
    console.log("theCarsArray", theCarsArray)
    console.log("HTMLArray", HTMLArray)
    domElement.innerHTML = HTMLArray.join("");
}
//(theCarsArray) or taco is a placeholder and represents
//what will be placed there when the function addCarsToDOM is called
// const render = (theCarsArray) => {
    //     const domElement = document.querySelector("carsContainer");
    
    
        
               