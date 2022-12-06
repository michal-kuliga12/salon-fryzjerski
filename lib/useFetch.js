const UseFetch = async (url ,method, item) => {
    try {
        const response = await fetch(url, {
            method: method,
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        if (!response.ok) {
            console.log(response);
            throw new Error(`Error! status: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        return result

    } catch(error) {
        console.log(error)
    } 

}    
 
export default UseFetch;