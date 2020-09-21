  
export const CarsHTML = (carsObj) => {
    return `
        <div id="cars-${carsObj.name}" class="card-cars">
            <h3> ${carsObj.name}</h3>
            <p>MPG: ${carsObj.milesPerGallon}</p>
            <p>Year: ${carsObj.year}</p>
        </div>
            `
}
            
//add <p> with the carsObj.colorString using string interpolation to include 
//the color of the car on the DOM, along with the example shown to me by tutor.