//https://excalidraw.com/#json=Y_cMSVnB2ESfsoufCu0-l,gmelG-JDG61x84RdtwniAA 

function setuserName(username){
    this.username=username    
}
function setUser(username,email,password){
    setuserName.call(this,username)
    this.email=email
    this.password=password
}
const user = new setUser('sourav12','kumar@123','sourav@123')
console.log(user);


function showMessage(wish){
    this.wish=wish
}
function username(wish,name) {
    showMessage.call(this,wish)
    this.name=name
}
const display  = new username("hello ",' sourav')
console.log(display);
