
 export function completeText(){
    const span = document.querySelector("#complete")
    const imgChecked = document.querySelectorAll('img[src = "img/checked.png"]')
    
    let value = 0
    
    imgChecked.forEach((img) => {
        if(img.classList.contains("appear")){
            value+=1
        }
    })
    
    span.textContent = `${value} ${value != 1 ? "Concluidos" : "Concluido"}`
    
}


