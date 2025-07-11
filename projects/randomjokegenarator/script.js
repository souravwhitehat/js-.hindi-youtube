const button = document.getElementById('get')
const p = document.getElementById('jokes')

async function getJokes() {
    try {
        p.textContent='loading.....'
        p.style.fontSize='20px'
        let allJokes = await fetch("https://official-joke-api.appspot.com/random_joke")
        const jokes = await allJokes.json();
        p.style.fontSize='16px'
        
        p.innerHTML= `${jokes.setup}<br><strong>${jokes.punchline}</strong>`
        
    } catch (error) {
        p.textContent='404 not found'
        p.style.color='red'
        
    }
}
button.addEventListener('click' ,getJokes);


const button2 = document.getElementById('getadvice')
const p2 = document.getElementById('advice')
async function getAllAdvice() {
    try {
        console.log("hello");
        p2.textContent='loading............'
        const allAdvice = await fetch("https://api.adviceslip.com/advice")
        const advice = await allAdvice.json()
        setTimeout(async () => {
            p2.textContent=advice.slip.advice            
        }, 2000);
        
    } catch (error) {
        
        p2.textContent = "❌ Failed to load advice!";
        p2.style.color = "red"; // optional
        
        
    }
}
button2.addEventListener('click',getAllAdvice)