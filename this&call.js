//https://excalidraw.com/#json=Y_cMSVnB2ESfsoufCu0-l,gmelG-JDG61x84RdtwniAA 

function setuserName(username){
    this.username=username
}
function setUser(username,email,password){
    setuserName(username)
    this.email=email
    this.password=password
}
const user = new setUser('sourav12','kumar@123','sourav@123')
console.log(user);
