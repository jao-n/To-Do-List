


const user = document.querySelector("#user")
const modal = document.querySelector("#modal")
const main = document.querySelector("main")


export function modalOpen(){
    const modal = document.querySelector("#modal")
    const main = document.querySelector("main")

    modal.classList.toggle("hide")
    modal.classList.toggle("show")

    main.classList.toggle("show")
}

user.addEventListener("click", () => {
    modal.classList.toggle("hide")
    modal.classList.toggle("show")
    
    main.classList.toggle("show")
})