
import { modalOpen } from "./openModal.js"



const form = document.querySelector(".form")


form.onsubmit = (event) => {
    
    event.preventDefault()

    const inputs = form.querySelectorAll("input")

    inputs.forEach((input) => input.value = "")

    modalOpen()
}