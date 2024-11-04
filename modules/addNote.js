
const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()

    const input = form.querySelector("input")
    let value = input.value
    if(value.trim() === ""){
        return alert("Digite algo")
    }

    const notes = document.querySelector(".notes")
    const divNotes = document.createElement("div")
    divNotes.classList.add("divNotes")

    const div = document.createElement("div")
    const imgDefault = document.createElement("img")
    imgDefault.src = "img/default.png"
    imgDefault.classList.add("appear")

    const imgChecked = document.createElement("img")
    imgChecked.src = "img/checked.png"
    imgChecked.classList.add("hide")

    const check = document.createElement("input")
    check.type = "checkbox"
    check.classList.add("check")
    const span = document.createElement("span")
    span.textContent = value

    div.append(check, imgDefault, imgChecked)
    divNotes.append(div, span)
    notes.append(divNotes)

    input.value = ""
}
