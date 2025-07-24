const products=[
    {
        id:1,
        name:"product 1",
        price:199,
        Image:"https://via.placeholder.com/150"
    },
    {
        id:2,
        name:"product 2",
        price:1999,
        Image:"https://via.placeholder.com/150"
    },
    {
        id:3,
        name:"product 3",
        price:788,
        Image:"https://via.placeholder.com/150"
    },
    {
        id:4,
        name:"product 4",
        price:299,
        Image:"https://via.placeholder.com/150"
    }
]
console.log(products);
const container = document.getElementById('product-container')
products.forEach(function(item){
   const productCard = `
   <div class="product-card">
    <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>price:${item.price}</p>
        <button class="add-to-cart" data-id="${item.id}">Add to cart</button>
    </div>
   `;
   
   container.innerHTML+=productCard;
})
const buttons = document.querySelectorAll('.add-to-cart')
// console.log(addToCart);
buttons.forEach(function(btn){
    btn.addEventListener('click',function(){
        
    })
})
