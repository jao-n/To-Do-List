

import { createNote } from "../modules/createNote.js"

export async function getData() {
        const response = await fetch("backend/getDatas.php")
     
        const notes = await response.json()
        
        createNote(notes)
}
getData()