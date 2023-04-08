let popup = document.getElementById("popup");
let buttext=document.getElementById("titlebuttontext");
function onClick(){
    if(popup.classList=="popup"){
        popup.classList.remove("popup");
        popup.classList.add("openpopup");
        buttext.innerHTML="Hide";
    }
    else if(popup.classList=="openpopup"){
        popup.classList.remove("openpopup");
        popup.classList.add("popup");
        buttext.innerHTML="Learn More";
    }
}
let text = document.getElementById("text");
window.addEventListener('scroll',function(){
  var value = window.scrollY;
  if (value > 160) {
    text.style.display = 'none';
  } else {
    text.style.display = 'block';
    text.style.top = value * 2 +'px';
  }
});

let cartdisp=document.getElementById("cart")
function cartShow(){
  cartdisp.id="cart-show";
}
function closeCart(){
  cartdisp.id="cart";
}
let NE=document.getElementById("product-container-ne")
function NeShow(){
    NE.id="product-container-ne-show";
}
function closeNE(){
    NE.id="product-container-ne";
}
let HI=document.getElementById("product-container-hi")
function HiShow(){
    HI.id="product-container-hi-show";
}
function closeHI(){
    HI.id="product-container-hi";
}
let MEE=document.getElementById("product-container-mee")
function MeeShow(){
    MEE.id="product-container-mee-show";
}
function closeMEE(){
    MEE.id="product-container-mee";
}
let JAF=document.getElementById("product-container-jaff");
function JaffShow(){
    JAF.id="product-container-jaff-show";
}
function closeJAF(){
  JAF.id="product-container-jaff";
}
let Matara = document.getElementById("product-container-matara")
function MataraShow(){
  Matara.id="product-container-matara-show"
}
function closeMatara(){
  Matara.id="product-container-matara"
}
let Galle = document.getElementById("product-container-galle")
function GalleShow(){
  Galle.id="product-container-galle-show"
}
function closeGalle(){
  Galle.id="product-container-galle"
}
let Ella = document.getElementById("product-container-ella")
function EllaShow(){
  Ella.id="product-container-ella-show"
}
function closeElla(){
  Ella.id="product-container-galle"
}
let Dambana = document.getElementById("product-container-dambana")
function DambanaShow(){
  Dambana.id="product-container-dambana-show"
}
function closeDambana(){
  Dambana.id="product-container-dambana"
}
let Deniyaya = document.getElementById("product-container-deniyaya")
function DeniyayaShow(){
  Deniyaya.id="product-container-deniyaya-show"
}
function closeDeniyaya(){
  Deniyaya.id="product-container-deniyaya"
}
let Anura = document.getElementById("product-container-anura")
function AnuraShow(){
  Anura.id="product-container-anura-show"
}
function closeAnura(){
  Anura.id="product-container-anura"
}
let Polon = document.getElementById("product-container-polon")
function PolonShow(){
  Polon.id="product-container-polon-show"
}
function closePolon(){
  Polon.id="product-container-polon"
}
let Sigiri = document.getElementById("product-container-sigiri")
function SigiriShow(){
  Sigiri.id="product-container-sigiri-show"
}
function closeSigiri(){
  Sigiri.id="product-container-sigiri"
}
let Trinco = document.getElementById("product-container-trinco")
function TrincoShow(){
  Trinco.id="product-container-trinco-show"
}
function closeTrinco(){
  Trinco.id="product-container-trinco"
}
let Kuru = document.getElementById("product-container-kuru")
function KuruShow(){
  Kuru.id="product-container-kuru-show"
}
function closeKuru(){
  Kuru.id="product-container-kuru"
}
let Colo = document.getElementById("product-container-colo")
function ColoShow(){
  Colo.id="product-container-colo-show"
}
function closeColo(){
  Colo.id="product-container-colo"
}
let Ham = document.getElementById("product-container-ham")
function HamShow(){
  Ham.id="product-container-ham-show"
}
function closeHam(){
  Ham.id="product-container-ham"
}


let notfound1=document.getElementById("webnotfound1")
function webnotfoudalert(){
    notfound1.innerHTML="Sorry this Place Does not has a Website"
}

const quantityFields = document.querySelectorAll('.quantity-field');
const increaseButtons = document.querySelectorAll('.increase-btn');
const decreaseButtons = document.querySelectorAll('.decrease-btn');

increaseButtons.forEach((button, index) => {
  button.addEventListener('click', function() { 
    const currentQuantity = parseInt(quantityFields[index].value);
    const newQuantity = currentQuantity + 1;

    // Update the quantity field with the new value
    quantityFields[index].value = newQuantity;
  });
});

decreaseButtons.forEach((button, index) => {
  button.addEventListener('click', function() {
    // Get the current quantity and decrement it by 1
    const currentQuantity = parseInt(quantityFields[index].value);
    const newQuantity = currentQuantity - 1;

    // Make sure the new quantity is not negative
    if (newQuantity > 0) {
      // Update the quantity field with the new value
      quantityFields[index].value = newQuantity;
    }
  });
});

let amount= document.getElementById("amount");

function addToCart(productName, quantity, price) {
  var cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  
  var itemName = document.createElement("div");
  itemName.className = "item-name";
  itemName.innerHTML = productName;
  
  var itemQuantity = document.createElement("div");
  itemQuantity.className = "item-quantity";
  itemQuantity.innerHTML = quantity;
  
  var itemPrice = document.createElement("div");
  itemPrice.className = "item-price";
  itemPrice.innerHTML = price*quantity;
  
  cartItem.appendChild(itemName);
  cartItem.appendChild(itemQuantity);
  cartItem.appendChild(itemPrice);
  
  var cartItems = document.querySelector(".cart-items");
  cartItems.appendChild(cartItem);
  
  var totalPrice = document.querySelector(".cart-total");
  var currentTotal = parseFloat(totalPrice.innerHTML); 
  var itemTotal = quantity * parseFloat(price);
  var newTotal = currentTotal + itemTotal;
  totalPrice.innerHTML = newTotal;
  amount.value=newTotal + " $";
  itemName.classList.add("inline-item");
  itemQuantity.classList.add("inline-item");
  itemPrice.classList.add("inline-item");
}
const products = document.querySelectorAll('.product-container');

products.forEach((product) => {
  const addToCartButtons = product.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', () => {
      // Get the product information
      const Name = product.querySelector(".product-box-title").textContent;
      const Price = product.querySelector(".price").textContent;
      const Quantity = parseInt(product.querySelector(".quantity-field").value);
      const confirm = document.getElementById("confirmation")
      addToCart(Name,Quantity,Price);
      confirm.style.opacity=1;
      setTimeout(() => {
        confirm.style.opacity = 0;
      }, 4000);
    });
  });
});


function validate() {
  const name = document.getElementById('user_name').value;
  const email = document.getElementById('user_email').value;

  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) {
    alert('Please enter a valid name');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  payopen(name,email);
}
let paydiv = document.getElementById("payment");
let user_name1=document.getElementById("user_name1")
let user_email1=document.getElementById("user_email1")
function payopen(name1,email1){
  user_name1.value=name1;
  user_email1.value=email1;
  paydiv.id="payment-show";
  cartdisp.id="cart";
}
function closePayment(){
  paydiv.id="payment";
}

const creditCardInput = document.getElementById('credit-card');

creditCardInput.addEventListener('input', (event) => {
  const value = event.target.value;

  const digitsOnly = value.replace(/\D/g, '');

  const groups = digitsOnly.match(/.{1,4}/g);

  const formattedValue = groups ? groups.join('-') : '';

  event.target.value = formattedValue;
});


var images = ["images/shop/bg2.webp", "images/shop/bg3.webp", "images/shop/bg4.webp", "images/shop/bg1.webp"];
var index = 0;
function changeImage() {
  index = (index + 1) % images.length;
  var image = document.getElementById("myImage");
  image.classList.add("hidden");
  setTimeout(function() {
    image.src = images[index];
    image.classList.remove("hidden");
  }, 400);
  setTimeout(changeImage, 6000);
}
setTimeout(changeImage, 6000);

function confirmPay(){
  const conf=document.getElementById("payconfirm");
  const loading = document.getElementById("loading");
  const done = document.getElementById("success");
  conf.style.visibility="visible";
  conf.style.opacity=1;
  setTimeout(()=>{
    loading.style.opacity = 0;
    done.style.opacity = 1;
    setTimeout(() => {
      location.href = location.href;
    }, 3000);
  }, 2000);
}