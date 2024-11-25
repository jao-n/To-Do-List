
import { getData } from "../services/getData.js"


const form = document.querySelector("#form")

form.onsubmit = () =>{

    const input = form.querySelector("input")
    let value = input.value
    if(value.trim() === ""){
        return alert("Digite algo")
    }

    getData()
}