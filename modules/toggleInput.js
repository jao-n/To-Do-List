
import { completeText } from "./completeText.js"


document.addEventListener("click", (event) => {
    if(event.target.classList.contains("check")){
        const parent = event.target.parentNode
        const imgDefault = parent.querySelector(".appear")
        const imgChecked = parent.querySelector(".hide")

        imgDefault.classList.toggle("hide")
        imgDefault.classList.toggle("appear")

        imgChecked.classList.toggle("hide")
        imgChecked.classList.toggle("appear")
        
        
        completeText()
        
    }

})



