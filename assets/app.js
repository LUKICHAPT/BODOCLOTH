const products=[
 {id:1,name:"Black Tee",price:79,img:"https://picsum.photos/300?1"},
 {id:2,name:"Street Hoodie",price:149,img:"https://picsum.photos/300?2"},
 {id:3,name:"Dark Sneakers",price:299,img:"https://picsum.photos/300?3"}
];
let cart=[];

const productsEl=document.getElementById('products');
products.forEach(p=>{
  const el=document.createElement('div');
  el.className='card';
  el.innerHTML=`<img src="${p.img}"><h3>${p.name}</h3><p>${p.price} ₾</p><button onclick="add(${p.id})">Add</button>`;
  productsEl.appendChild(el);
});

function add(id){
  const item=products.find(p=>p.id===id);
  cart.push(item);
  document.getElementById('cartCount').innerText=cart.length;
  renderCart();
}
function toggleCart(){
  document.getElementById('cart').classList.toggle('open');
}
document.getElementById('cartBtn').onclick=toggleCart;

function renderCart(){
  const wrap=document.getElementById('cartItems');
  wrap.innerHTML='';
  let total=0;
  cart.forEach(i=>{
    total+=i.price;
    wrap.innerHTML+=`<div>${i.name} - ${i.price} ₾</div>`;
  });
  document.getElementById('total').innerText=total;
}
