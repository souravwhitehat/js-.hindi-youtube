console.log("function part 2")

function addToCartItems (...items){//rest operator add multiple values in to an array
    return items;
}
// console.log(addToCartItems(100,200.5222, 82))

const user ={
    name:"sourav",
    price : 55
}
function callUserDetails(userdetails){
    console.log(`user name is ${userdetails.name} and price id ${userdetails.price}`)
}
// callUserDetails(user)
callUserDetails(
    {
        name:"kumar ",
        price : 1666
    }
)//we can create an object inside the parameter.. while pass the argument....like above
//access values of an object in a function like this


// arrays in function

const myArray = [200,220,5152,3241,212];

function getNewArray(getArray){
    return getArray[0]
}
// console.log(getNewArray(myArray))
console.log(getNewArray([100,200,300]))//we can pass array values in argument .....


