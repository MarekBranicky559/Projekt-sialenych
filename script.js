const products = [
    {
        name: "iPhone 17 pro max",
        img: "https://i.pinimg.com/736x/17/23/52/17235277c150cfcd615b1a1abb5f7850.jpg",
        price: 49.99,
    },
    {
        name: "Hračka",
        img: "",
        price: 75.5,
    },
    {
        name: "Ponožky značky Gucci",
        img: "",
        price: 25,
    },
    {
        name: "test",
        img: "",
        price: 150,
    },
    {
        name: "testujem",
        img: "",
        price: 1000,
    },
];

const productsGrid = document.getElementsByClassName('products-grid')[0];

products.forEach((item, index) => {
    const productWrapper = document.createElement('div');
    productWrapper.classList.add('product-card', 'glass-card');
    productWrapper.setAttribute('data-product-id', `prod_${index}`);
    const productImg = document.createElement('img');
    productImg.setAttribute('src', item.img);
    productImg.setAttribute('alt', item.name);
    const productName = document.createElement('h3');
    productName.textContent = item.name;
    const productPrice = document.createElement('p');
    productPrice.textContent = `Cena: ${item.price.toFixed(2)} €`;
    const productActionArea = document.createElement('div');
    productActionArea.classList.add('product-action-area');
    productActionArea.setAttribute('id', `action-area-prod_${index}`);
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-btn');
    addToCartButton.setAttribute('data-name', item.name);
    addToCartButton.setAttribute('data-price', item.price.toFixed(2));
    addToCartButton.setAttribute('data-id', `prod_${index}`);
    addToCartButton.textContent = "Pridať do košíka";

    productWrapper.appendChild(productImg);
    productWrapper.appendChild(productName);
    productWrapper.appendChild(productPrice);
    productActionArea.appendChild(addToCartButton);
    productWrapper.appendChild(productActionArea);
    productsGrid.appendChild(productWrapper);
})

document.addEventListener('DOMContentLoaded', () => {
    // --- Elementy a premenné ---
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeBtn = document.querySelector('.close-btn');
    const overlay = document.getElementById('overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const modalAdded = document.getElementById('modal-added');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping');
    const goToCartBtn = document.getElementById('go-to-cart');
    const checkoutBtnLink = document.getElementById('checkout-btn-link');
    const productCards = document.querySelectorAll('.product-card'); 
    
    let cart = JSON.parse(sessionStorage.getItem('e-shop-cart')) || []; 

   

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Košík je zatiaľ prázdny.</p>';
        } else {
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;

                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');
                itemDiv.innerHTML = `
                    <p><strong>${item.name}</strong> (${item.quantity} ks)</p>
                    <p>${itemTotal.toFixed(2)} €</p>
                `;
                cartItemsContainer.appendChild(itemDiv);
            });
        }

        cartCountSpan.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        document.getElementById('cart-total').textContent = total.toFixed(2) + ' €';
        
        sessionStorage.setItem('e-shop-cart', JSON.stringify(cart));
        
        renderAllProductCards(); 
    }
    
    
    function setQuantity(productId, newQuantity) {
        const itemIndex = cart.findIndex(item => item.id === productId);

        if (newQuantity <= 0) {
            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
            }
        } else if (itemIndex > -1) {
            cart[itemIndex].quantity = newQuantity;
        } 
        
        updateCart();
    }
    
    
    function updateQuantityInput(item) {
        const actionArea = document.getElementById(`action-area-${item.id}`);
        if (!actionArea) return;

        actionArea.innerHTML = `
            <div class="quantity-control">
                <button class="decrease-btn" data-id="${item.id}">-</button>
                <input type="number" min="0" value="${item.quantity}" data-id="${item.id}" class="quantity-input" readonly>
                <button class="increase-btn" data-id="${item.id}">+</button>
            </div>
        `;
        
        
        actionArea.querySelector('.increase-btn').addEventListener('click', () => {
            const currentItem = cart.find(i => i.id === item.id);
            if (currentItem) {
                setQuantity(item.id, currentItem.quantity + 1);
            }
        });

        
        actionArea.querySelector('.decrease-btn').addEventListener('click', () => {
            const currentItem = cart.find(i => i.id === item.id);
            if (currentItem) {
                setQuantity(item.id, currentItem.quantity - 1);
            }
        });
    }

    
    function renderInitialButton(productId, name, price) {
        const actionArea = document.getElementById(`action-area-${productId}`);
        if (!actionArea) return;

        actionArea.innerHTML = `
            <button class="add-to-cart-btn" data-name="${name}" data-price="${price}" data-id="${productId}">Pridať do košíka</button>
        `;
        
        actionArea.querySelector('.add-to-cart-btn').addEventListener('click', handleAddToCartClick);
    }
    
  
    function renderAllProductCards() {
        productCards.forEach(card => {
            const productId = card.getAttribute('data-product-id');
            const itemInCart = cart.find(item => item.id === productId);
            
            
            const name = card.querySelector('h3').textContent.trim();
            const priceText = card.querySelector('p').textContent;
            const price = parseFloat(priceText.replace('Cena:', '').replace('€', '').trim());

            if (itemInCart) {
                updateQuantityInput(itemInCart);
            } else {
                renderInitialButton(productId, name, price);
            }
        });
    }
    
   
    function handleAddToCartClick(e) {
        const name = e.target.getAttribute('data-name');
        const price = e.target.getAttribute('data-price');
        const id = e.target.getAttribute('data-id');
        
        const existingItem = cart.find(item => item.id === id);

        if (!existingItem) {
            cart.push({ id, name, price: parseFloat(price), quantity: 1 });
        } else {
            existingItem.quantity += 1; 
        }
        
        updateCart();
        showModal();
    }

    

    function showModal() {
        modalAdded.style.display = 'block';
    }

    function hideModal() {
        modalAdded.style.display = 'none';
    }

    function openCart() {
        cartSidebar.classList.add('open');
        overlay.classList.add('active');
    }

    function closeCart() {
        cartSidebar.classList.remove('open');
        overlay.classList.remove('active');
    }

    
      closeModalBtn.addEventListener('click', hideModal);
    continueShoppingBtn.addEventListener('click', hideModal);

    goToCartBtn.addEventListener('click', () => {
        hideModal();
        openCart();
    });
    
   
    document.querySelector('.cart-btn').addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
    
    
    checkoutBtnLink.addEventListener('click', () => {
        if (cart.length > 0) {
            sessionStorage.setItem('e-shop-cart', JSON.stringify(cart));
            window.location.href = 'checkout.html';
        } else {
            alert('Váš košík je prázdny. Nemôžete prejsť k pokladni.');
        }
    });

    
    updateCart();
});