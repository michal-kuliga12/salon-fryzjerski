const UseFetch = async (bookUrl ,bookMethod, bookItem) => {
    const res = await fetch(bookUrl, {
        method: bookMethod,
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(bookItem)
        }).then((res)=> {
            if (res.ok) {
                console.log("Fetch response: " + res)
                return res.json()
            }
        }).catch((error)=>{
            console.log("Fetch error: " + error)
        })
}    
 
export default UseFetch;