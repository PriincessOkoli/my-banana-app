const products = [
  { image: "/images/image.webp", name: "Cavendish Banana", price: "$1.00" },
  { image: "images/image7.webp", name: "Plantain Banana", price: "$1.20" },
  { image: "images/image4.webp", name: "Red Banana", price: "$1.50" },
  { image: "images/image3.webp", name: "Musa Velutina", price: "$1.80" },
  { image: "images/image6.webp", name: "Musa Nanensis", price: "$2.00" },
  { image: "images/image5.webp", name: "Manzano Banana", price: "$2.50" },
  { image: "images/image10.webp", name: "Blue Java Banana", price: "$3.00" },
  { image: "images/image8.webp", name: "Mutahato Banana", price: "$3.50" },
  { image: "/images/image2.webp", name: "Hardly Banana", price: "$4.00" },
  { image: "images/image9.webp", name: "Purple Banana", price: "$4.50" },
];

let currentIndex = 0;
const slider = document.getElementById("slider");
const cartContainer = document.querySelector(".cart-container");
let cart = [];

function displayProduct(index) {
  const { image, name, price } = products[index];
  slider.innerHTML = `<img src="${image}" alt="${name}"><div class='product-info'><b>${name}</b><br>${price}</div><button onclick='addToCart(${index})'>Add to Cart</button>`;
}

function prevSlide() {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : products.length - 1;
  displayProduct(currentIndex);
}

function nextSlide() {
  currentIndex = currentIndex < products.length - 1 ? currentIndex + 1 : 0;
  displayProduct(currentIndex);
}

function addToCart(productIndex) {
  cart.push(products[productIndex]);
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  cart.forEach(({ name, price }) => {
    let li = document.createElement("li");
    li.textContent = `${name} - ${price}`;
    cartElement.appendChild(li);
  });
  cartContainer.style.display = cart.length > 0 ? "block" : "none";
}

function goToCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  } else {
    alert("Your order has been placed!");
    cart = [];
    updateCart();
  }
}

displayProduct(currentIndex);
cartContainer.style.display = "none";
