console.log("filter")

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums=myNums.filter((nums) => {
//    return nums>5
// });
// console.log(newNums);

// same thing using foreach loop

// newNums = [];
// myNums.forEach((num)=>{
//     if(num>5){
//         newNums.push(num)
//     }  
// })
// console.log(newNums);


// example of filter

const books = [
  { title: "Book1", genre: "Fiction", publish: 1989, edition: 2002 },
  { title: "Book2", genre: "Non-Fiction", publish: 1995, edition: 2005 },
  { title: "Book3", genre: "Science", publish: 2001, edition: 2010 },
  { title: "Book4", genre: "Fiction", publish: 2005, edition: 2015 },
  { title: "Book5", genre: "Non-Fiction", publish: 1990, edition: 1998 },
  { title: "Book6", genre: "Science", publish: 2010, edition: 2013 },
  { title: "Book7", genre: "Fiction", publish: 2003, edition: 2007 },
  { title: "Book8", genre: "Non-Fiction", publish: 2008, edition: 2011 },
  { title: "Book9", genre: "Science", publish: 2012, edition: 2019 },
  { title: "Book10", genre: "Fiction", publish: 2015, edition: 2020 }
];

// const userBooks = books.filter((bks) => bks.genre ==="Fiction")
// const userBooks2 = books.filter((bks) => bks.publish<2000)


// console.log(userBooks2);
const userbooks3 = books.filter((bks)=>bks.genre==="Fiction" && bks.publish<2000
   
)
// console.log(userbooks3);

// map
// const myArr = [1,2,3,4,5,6,7,8,9,10]
// const myNewArr = myArr.map((nums)=> nums*10)
// console.log(myNewArr);


const userbooks4 = books.filter((bks) => {return bks.title==="Book3"})
// console.log(userbooks4);

// chaining 

const myArr2 = [1,2,3,4,5,6,7,8,9,10]
const myNewArr2 = myArr2.map((nums)=> nums*10)
.map((nums)=>nums+1)
.filter((nums)=>nums>50).join()
//this is called chaining 
console.log(myNewArr2);


// reduce
const myNums2 = [1,2,3]
const myReduce = myNums2.reduce((acc , currval)=>{
    // console.log(`acc value: ${acc} and currval : ${currval}`);  
    return acc+currval;
}, 10)
// console.log(myReduce);

const cart = [
  {
    item: "Laptop",
    price: 55000,
    quantity: 1,
    category: "Electronics"
  },
  {
    item: "Headphones",
    price: 1500,
    quantity: 2,
    category: "Electronics"
  },
  {
    item: "T-shirt",
    price: 800,
    quantity: 3,
    category: "Clothing"
  },
  {
    item: "Book",
    price: 300,
    quantity: 4,
    category: "Stationery"
  }
];
const myCart = cart.reduce((acc , item)=>(acc +item.price),0)

console.log(`your total price is ${myCart}`);










