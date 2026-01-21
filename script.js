const products = [
    { 
    id: 1, name: "Gucci ponožky", 
    price: 120, 
    img: "https://www.vipluxury.sk/images/products/584/58441-e700b963f046e7e93f973f6aed5b29469660537ec06d84423f2870c31eb72b04_large.jpeg", 
    options: ["35-38", "39-42 (+5€)", "43-46 (+10€)"], 
    adds: [0, 5, 10] 

},

    { 
        id: 2, name: "iPhone 15 Pro",
         price: 999, 
        img: "https://img-cdn.heureka.group/v1/95046940-8f67-435b-bbf8-c3a3adbe44a9.jpg", 
        options: ["128 GB", "256 GB (+150€)", "512 GB (+300€)"], 
        adds: [0, 150, 300] 
    
    },


    {
         id: 3, name: "Hračka pre psa", 
         price: 15, 
         img: "https://abc-zoo.sk/23599-53817-thickbox/hracka-pre-psa-chladiaca-kost-11-cm.jpg", 
         options: ["Malá", "Stredná (+5€)", "Veľká (+10€)"], 
         adds: [0, 5, 10] 
        
        
        }
];

let cart = JSON.parse(sessionStorage.getItem('e-shop-cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    showProducts(products);
    updateCartBadge();
    checkAuth();
});

function showProducts(list) {
    const container = document.getElementById('products-grid');
    container.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `<img src="${p.img}"><h3>${p.name}</h3><p style="color:#2ecc71; font-weight:bold;">od ${p.price} €</p>`;
        card.onclick = () => openProduct(p);
        container.appendChild(card);
    });
}

function openProduct(p) {
    const body = document.getElementById('modal-body');
    let selectHtml = `<select id="variant-select" onchange="updateModalPrice(${p.id})">`;
    p.options.forEach((o, i) => selectHtml += `<option value="${i}">${o}</option>`);
    selectHtml += `</select>`;

    body.innerHTML = `
        <img src="${p.img}" style="width:100%; border-radius:10px;">
        <h2 style="margin-top:15px;">${p.name}</h2>
        ${selectHtml}
        <h3 id="modal-price" style="color:#2ecc71; margin-bottom:20px;">${p.price.toFixed(2)} €</h3>
        <button class="btn-add-cart" onclick="confirmPurchase(${p.id})">PRIDAŤ DO KOŠÍKA</button>
    `;
    document.getElementById('product-modal').style.display = 'block';
}

function updateModalPrice(pid) {
    const p = products.find(x => x.id === pid);
    const idx = document.getElementById('variant-select').value;
    const final = p.price + p.adds[idx];
    document.getElementById('modal-price').innerText = final.toFixed(2) + " €";
}

function confirmPurchase(pid) {
    const p = products.find(x => x.id === pid);
    const idx = document.getElementById('variant-select').value;
    const finalPrice = p.price + p.adds[idx];
    const variantName = p.options[idx];

    cart.push({ name: `${p.name} (${variantName})`, price: finalPrice, quantity: 1 });
    sessionStorage.setItem('e-shop-cart', JSON.stringify(cart));
    updateCartBadge();
    closeModal();
    alert("Pridané!");
}

function filterItems() {
    const val = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(val));
    showProducts(filtered);
}

function checkAuth() {
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    if(user) {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('profile-box').style.display = 'flex';
        document.getElementById('user-name-display').innerText = user.name;
    }
}

function toggleDropdown(e) {
    e.stopPropagation();
    document.getElementById('logout-menu').classList.toggle('active');
}

function closeModal() { document.getElementById('product-modal').style.display = 'none'; }
function updateCartBadge() { document.getElementById('cart-badge').innerText = cart.length; }
function doLogout() { localStorage.removeItem('loggedUser'); window.location.reload(); }

window.onclick = () => {
    document.getElementById('logout-menu').classList.remove('active');
};

// Otvorenie/Zatvorenie bočného košíka
function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
    renderSideCart();
}

// Funkcia na vykreslenie položiek v bočnom košíku
function renderSideCart() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-price');
    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <h4 style="font-size: 0.9em;">${item.name}</h4>
                <p style="color: #2ecc71;">${item.price.toFixed(2)} €</p>
            </div>
            <div class="qty-controls">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>
        `;
        container.appendChild(div);
    });

    totalEl.innerText = `Celkom: ${total.toFixed(2)} €`;
    updateCartBadge();
}

// Zmena množstva
function changeQty(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        cart.splice(index, 1); // Odstráni produkt, ak je 0
    }
    sessionStorage.setItem('e-shop-cart', JSON.stringify(cart));
    renderSideCart();
}

// Upravená pôvodná funkcia na pridanie do košíka (aby len neotvárala pokladňu)
function confirmPurchase(pid) {
    const p = products.find(x => x.id === pid);
    const idx = document.getElementById('variant-select').value;
    const finalPrice = p.price + p.adds[idx];
    const variantName = p.options[idx];
    const fullName = `${p.name} (${variantName})`;

    // Skontrolujeme, či už produkt v košíku je
    const existing = cart.find(item => item.name === fullName);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name: fullName, price: finalPrice, quantity: 1 });
    }

    sessionStorage.setItem('e-shop-cart', JSON.stringify(cart));
    closeModal();
    toggleCart(); // Automaticky otvorí bočný košík po pridaní
}

// Zmeň ikonku košíka v index.html, aby volala toggleCart()
// <div class="cart-icon" onclick="toggleCart()">