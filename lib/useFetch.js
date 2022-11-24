const UseFetch = async (url ,method, item) => {
    const res = await fetch(url, {
        method: method,
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
        }).then((res)=> {
            if (res.ok) {
                console.log("Fetch response: " + res)
            }
        }).catch((error)=>{
            console.log("Fetch error: " + error)
        })
}    
 
export default UseFetch;