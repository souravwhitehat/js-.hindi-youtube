const username = document.getElementById('username')
const find = document.getElementById('find')
const result = document.getElementById('result')

find.addEventListener('click', (e) => {
    e.preventDefault()
    async function getUserDetails() {
        let usernm = username.value.trim()
        if (!usernm) {
            result.textContent = "please enter user name"
            result.style.color = 'cyan'
            return;
        }
        try {
            result.textContent = 'lodding.....'
            result.style.color = 'black'
            let userData = await fetch(`https://api.github.com/users/${usernm}`)
            if (!userData.ok) throw new Error('user not found');

            const data = await userData.json()
            result.style.color = 'green'
            result.innerHTML = `<ul>
          <li>User Id :${data.id}</li> 
            <li>userName :${data.name}</li>
           <li>following :${data.following}</li>
            <li>followers :${data.followers}</li>
            </ul>
            
            `;
            username.value = ''
        } catch (error) {
            result.textContent = "user not found"
            result.style.color = 'red'

        }

    }
    getUserDetails()

})