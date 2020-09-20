import { useColors, getColors } from "./ColorsProvider.js";

//This targets the place on the DOM where the dropdown/filter will be rendered.
const contentTarget = document.querySelector(".filters__colors")

const eventHub = document.querySelector("body")

eventHub.addEventListener("change", event => {
    //only do this if the colorsSelect element was changed
   console.log("I heard a change")
    if(event.target.id === "colorsSelect") {
        console.log("I am in the if statement")
        const customEvent = new CustomEvent("colorsSelected", {
            detail: {
                colorThatWasChosen: event.target.value
            }
        })
      eventHub.dispatchEvent(customEvent)
    }
})

const render = colorsCollection => {

    contentTarget.innerHTML = `
    <select class="dropdown" id="colorsSelect">
    <option value="0">Please select a color...</option>
    ${
        colorsCollection.map(colorId => {
            return `<option value="${colorId.id}">${colorId.color}</option>`
        }).join("")
    }
    </select>`
}

//useColors() to get colors from colorsProvider. It renders all the color options
export const ColorsSelect = () => {
    getColors()
    .then(() => {
        const colors = useColors()
    render(colors)
})
}


