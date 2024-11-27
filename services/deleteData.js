
export function deleteData(id){
    
    fetch("backend/delete.php", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({ id })
    })
}