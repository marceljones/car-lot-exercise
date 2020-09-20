  
export const CarsHTML = (carsObj) => {
    return `
        <div id="cars-${carsObj.name}" class="card-cars">
            <h3> ${carsObj.name}</h3>
            <p>MPG: ${carsObj.milesPerGallon}</p>
            <p>Year: ${carsObj.year}</p>
            <p>Color: ${carsObj.colorString}</p>
        </div>
            `
}
            