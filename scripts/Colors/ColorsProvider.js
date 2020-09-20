// This is the fetch URL to get an array of available colors
let availableColors = [];

const availableColorsUrl =
"https://gist.githubusercontent.com/AdamSheaffer/242f907515474ab081b5a49971bd51f4/raw/fb61fc45a3676a67f7fb5634b987a8f7393b453c/colors.json";


  export const useColors = () => {
      return availableColors;
      
    };
   
export const getColors = () => {
  return fetch(availableColorsUrl) 
    .then(response => response.json()) 
    .then(
      parsedResponse => {
        availableColors = parsedResponse;
      }
    )

  }
  

   
    console.log("availableColorsUrl", availableColorsUrl)


    
      
  
 
 
