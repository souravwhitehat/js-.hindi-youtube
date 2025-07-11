async function getData() {
    try {
        const myData = await fetch("https://api.github.com/users/souravwhitehat")
        const data = await myData.json()
        console.log(data);
        
    } catch (error) {
        console.log("unexpected error");
        
    }
    
}
getData()