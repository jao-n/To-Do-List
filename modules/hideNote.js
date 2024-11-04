
import { completeText } from "./completeText.js"


const button = document.querySelector("#eyeClosed")

button.addEventListener("click", () => {

    const imgChecked = document.querySelectorAll('img[src = "img/checked.png"]')

    imgChecked.forEach((img) => {
        if(img.classList.contains("appear")){
            const parent = img.parentNode.parentNode
            
            parent.style.display = "none"
        }

        
    })



})


