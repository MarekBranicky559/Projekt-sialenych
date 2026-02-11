const products = [
    {
        id: 1,
        name: "Gucci ponožky",
        price: 120,
        img: "https://www.vipluxury.sk/images/products/584/58441-e700b963f046e7e93f973f6aed5b29469660537ec06d84423f2870c31eb72b04_large.jpeg",
        options: ["35-38", "39-42 (+5€)", "43-46 (+10€)"],
        adds: [0, 5, 10]
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: 999,
        img: "https://img-cdn.heureka.group/v1/95046940-8f67-435b-bbf8-c3a3adbe44a9.jpg",
        options: ["128 GB", "256 GB (+150€)", "512 GB (+300€)"],
        adds: [0, 150, 300]
    },
    {
        id: 3,
        name: "Hračka pre psa",
        price: 15,
        img: "https://abc-zoo.sk/23599-53817-thickbox/hracka-pre-psa-chladiaca-kost-11-cm.jpg",
        options: ["Malá", "Stredná (+5€)", "Veľká (+10€)"],
        adds: [0, 5, 10]
    },
    {
        id: 4,
        name: "Kostym detsky",
        price: 50,
        img: "https://kobra.odkarla.cz/t1/490x490/e7/76/482626/482626_0.jpg/~/detsky-kostym-ciao-batman-122",
        options: ["Malý (+0€)","Stredný (+10€)", "Veľký (+20€)"],
        adds: [0, 10, 20]
    },
    {
        id: 5,
        name: "Věc na nabiječku",
        price: 50,
        img: "https://1gr.cz/fotky/idnes/24/032/cl6h/LHR821c0893fa_img_0526.jpg",
        options: ["1 pár (+2€)", "2 páry (+5€)"],
        adds: [2, 5]
    },
    {
        id: 6,
        name: "Hracka na deti",
        price: 81,
        img: "https://kobra.odkarla.cz/t1/490x490/filters:c(65732)/c5/f9/1781670/1781670_0.jpg/~/retro-herni-konzole-bewinner-bila",
        options: ["64 GB", "124 GB (+30€)"],
        adds: [0, 30]
    },
    {
        id: 7,
        name: "Dalkohled multimed",
        price: 190,
        img: "https://kobra.odkarla.cz/t1/490x490/26/42/1368512/1368512_0.jpg/~/multimedialni-dalekohled-vtech-80-618622",
        options: ["Černý", "Bílý"],
        adds: [0, 0]
    },
    {
        id: 8,
        name: "Brzdove desticky",
        price: 50,
        img: "https://kobra.odkarla.cz/t1/490x490/filters:c(96292)/e1/d9/RID000005877538/RID000005877538_200.jpg/~/brzdove-desticky-ferodo-fdb4324",
        options: ["Nové (+30€)","Použité"],
        adds: [30, 0]
    },
    {
        id: 9,
        name: "Uranium",
        price: 73.24,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_s5AOkWmetF3-IgHVUUw7zirHJB1c6B0AvQ&s",
        options: ["Standard (+1000€)"],
        adds: [73,24]
    },
    {
        id: 10,
        name: "Kamera",
        price: 600.90,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBb96P6qS2oJ_BNmFqqKbyjZzUx7Kk77VTwQFmea4G5sOxuYu5ifCFkpdIotI1yd-lRxfpNvz0Kw3p_F18ebCL1poBmErdAPaUSRMSzSg_",
        options: ["Standard (+210€)"],
        adds: [600.90]
    },
    {
        id: 11,
        name: "Notebook",
        price: 420,
        img: "https://tyflocomp.sk/wp-content/uploads/HP_Probook_15.jpg",
        options: ["Base (+15€)"],
        adds: [15]
    },
    {
        id: 12,
        name: "Gulička",
        price: 0.20,
        img: "https://shop.houseofmarbles.com/wp-content/uploads/2019/05/108184-Ice.jpg",
        options: ["Bežná", "Špeciál (+52€)"],
        adds: [0, 52]
    },
    {
        id: 13,
        name: "Sluchadla JBL",
        price: 53,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqNG_sKJnrOnZrV2w1mCXBcNFv3EUVq_IgQ&s",
        options: ["Standard (+12€)"],
        adds: [12]
    },
    {
        id: 14,
        name: "Boxer",
        price: 13.4,
        img: "https://www.ima-usa.com/cdn/shop/files/ONSV24ADI046__01.jpg?v=1737780960",
        options: ["Small (+2€)","Large (+35€)"],
        adds: [2, 35]
    },
    {
        id: 15,
        name: "Tlačiareň",
        price: 1332,
        img: "https://www.hpobchod.sk/library/configuration/tiskarny/Samsung-SL-M2835DW_0b.jpg",
        options: ["Base (+12€)"],
        adds: [12]
    },
    {
        id: 16,
        name: "Okno",
        price: 310,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSgJrNjwOPwgc-NgSAk7-S60BUk-zi8cgkPlA5F0RawPHL21qtm-OBhbTo0FhaF3870UkKOhfcDiszPk1ZAzxNot8hXe5Gi",
        options: ["Jednoduché", "Dvojité (+10€)"],
        adds: [0, 10]
    },
    {
        id: 17,
        name: "Tennisová lopta",
        price: 3.1,
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhnuTTW9kxyr5Vf9gXqN6itFXa57R3P2sfdyjvOEUTaaxlPLGzFhs3Qp2BnC8_Hr1Jn1zbYEvuvqxGocj0_dQzh5uw5ngd",
        options: ["Standard (+20€)"],
        adds: [20]
    },
    {
        id: 18,
        name: "Mona Lisa (Je ta pravá)",
        price: 10,
        img: "https://www.umeniesveta.sk/images/catalog-large/PPB/595781.jpg",
        options: ["Originál (+1€)"],
        adds: [1]
    },
    {
        id: 19,
        name: "Dvere",
        price: 238,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIJzGGG8Gnhdxax7J4GYWek7VzWKUqpNbyQ&s",
        options: ["Interiérové (+2€)", "Exteriérové (+20€)"],
        adds: [2, 20]
    },
    {
        id: 20,
        name: "Sud na víno (Pivnicový e-shop specialita)",
        price: 233,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvjQ3DYUXjxmtKyb_AC_vfVErPfjek5kzIgw&s",
        options: ["Prázdny", "Plný (+10€)"],
        adds: [0, 10]
    },
    {
        id: 21,
        name: "Pes",
        price: 900,
        img: "https://kobra.odkarla.cz/t1/490x490/3c/fe/193473/193473_0.jpg/~/pejsek-simba-chi-chi-love-105893236",
        options: ["Štandard (+10€)"],
        adds: [10]
    },
    {
        id: 22,
        name: "Tiskarna HP (variant)",
        price: 700,
        img: "https://kobra.odkarla.cz/t1/490x490/filters:c(62488)/71/65/1862927/1862927_0.jpg/~/tiskarna-hp-laserjet-mfp-m234dw-1",
        options: ["Base (+5€)", "Pro (+23€)"],
        adds: [5, 23]
    },
    {
        id: 23,
        name: "Santa (kostým)",
        price: 1200,
        img: "https://kobra.odkarla.cz/t1/490x490/filters:c(24566)/30/77/1867690/1867690_0.jpg/~/pansky-kostym-santa-clause-m-ahititi",
        options: ["Standard (+0€)","Deluxe (+3€)"],
        adds: [0, 3]
    },
    {
        id: 24,
        name: "Zesilovac",
        price: 490,
        img: "https://kobra.odkarla.cz/t1/490x490/83/ed/843881/843881_0.jpg/~/zesilovac-diy-gy19298-zesilovace",
        options: ["Basic (+3€)","Pro (+20€)"],
        adds: [3, 20]
    },
    {
        id: 25,
        name: "Kamara bezpecnost",
        price: 20,
        img: "https://kobra.odkarla.cz/t1/490x490/c4/2a/848006/848006_0.jpg/~/bezpecnostni-kamera-annke-ap-c51ek0103ukh2",
        options: ["Standard (+1000000000000000€)","Economy (+100€)"],
        adds: [1000000000000000, 100]
    },
    {
        id: 26,
        name: "Kočky 2 (tunel)",
        price: 1800,
        img: "https://kobra.odkarla.cz/t1/490x490/filters:c(39423)/47/eb/1814300/1814300_0.jpg/~/tunel-pro-kocku-catism-ctu-01-gray",
        options: ["Basic (+15€)","Deluxe (+50€)"],
        adds: [15, 50]
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