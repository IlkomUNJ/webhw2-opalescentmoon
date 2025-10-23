// product table
export const itemProducts = {
  productTribbie: {
    id: 'productTribbie',
    name: 'Tribbie',
    img: 'assets/Character_Tribbie_Portrait.png',
    desc: '"The whispers of the soul shatter into thousands of pieces and fly away."',
    song: 'assets/song/Arcahv.mp3',
    top: '0',
    left: '0',
    transform: 'scale(6) translateX(75%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Creation',
    brightness: '1',
  },
  productHyacine: {
    id: 'productHyacine',
    name: 'Hyacine',
    img: 'assets/Character_Hyacine_Portrait.png',
    desc: `"May our journey's end be one without darkness."`,
    song: 'assets/song/Tempestissimo.mp3',
    top: '0',
    left: '0',
    transform: 'scale(12) translateX(25%) translateY(40%)',
    width: '100%',
    height: 'auto',
    axis: 'Dedication',
    brightness: '1',
  },
    productMydei: {
    id: 'productMydei',
    name: 'Mydei',
    img: 'assets/Character_Mydei_Portrait.png',
    desc: '"Strife will not cease with victory."',
    song: 'assets/song/Infinite Strife,.mp3',
    top: '0',
    left: '0',
    transform: 'scale(12) translateX(48%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Execution',
    brightness: '1',
  },
  productCipher: {
    id: 'productCipher',
    name: 'Cipher',
    img: 'assets/Character_Cipher_Portrait.png',
    desc: '"Lies and truths are nothing before the weight of sincerity."',
    song: 'assets/song/1f1e33.mp3',
    top: '0',
    left: '0',
    transform: 'scale(7) translateX(65%) translateY(45%)',
    width: '100%',
    height: 'auto',
    axis: 'Vengeance',
    brightness: '1',
  },
  productHysilens: {
    id: 'productHysilens',
    name: 'Hysilens',
    img: 'assets/Character_Hysilens_Portrait.png',
    desc: '"Though the ripples are fleeting, they converge into waves."',
    song: 'assets/song/Grievous Lady.mp3',
    top: '0',
    left: '0',
    transform: 'scale(9) translateX(53%) translateY(65%)',
    width: '100%',
    height: 'auto',
    axis: 'Contemplation',
    brightness: '1',
  },
  productCastorice: {
    id: 'productCastorice',
    name: 'Castorice',
    img: 'assets/Character_Castorice_Portrait.png',
    desc: '"All things cycle through life and death... The end is also the beginning."',
    song: 'assets/song/Xanatos.mp3',
    top: '0',
    left: '0',
    transform: 'scale(9) translateX(45%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Despondency',
    brightness: '1',
  },
  productAnaxa: {
    id: 'productAnaxa',
    name: 'Anaxa',
    img: 'assets/Character_Anaxa_Portrait.png',
    desc: '"Truth is already in my hands."',
    song: 'assets/song/Axium Crisis.mp3',
    top: '0',
    left: '0',
    transform: 'scale(8) translateX(50%) translateY(40%)',
    width: '100%',
    height: 'auto',
    axis: 'Escapism',
    brightness: '1',
  },
  productCerydra: {
    id: 'productCerydra',
    name: 'Cerydra',
    img: 'assets/Character_Cerydra_Portrait.png',
    desc: '"This is not the end, merely the cornerstone of a grand endeavor."',
    song: 'assets/song/Lament Rain.mp3',
    top: '0',
    left: '0',
    transform: 'scale(12) translateX(45%) translateY(55%)',
    width: '100%',
    height: 'auto',
    axis: 'Determination',
    brightness: '1',
  },
  productAglaea: {
    id: 'productAglaea',
    name: 'Aglaea',
    img: 'assets/Character_Aglaea_Portrait.png',
    desc: '"Even the most majestic epics are woven from individual words."',
    song: 'assets/song/Fracture Ray.mp3',
    top: '0',
    left: '0',
    transform: 'scale(16) translateX(22%) translateY(52%)',
    width: '100%',
    height: 'auto',
    axis: 'Optimism',
    brightness: '1',
  },
  productPhainon: {
    id: 'productPhainon',
    name: 'Phainon',
    img: 'assets/Character_Phainon_Portrait.png',
    desc: '"We will eventually become the flames that light up the new world."',
    song: 'assets/song/Aegleseeker.mp3',
    top: '0',
    left: '0',
    transform: 'scale(8) translateX(62%) translateY(30%)',
    width: '100%',
    height: 'auto',
    axis: 'Conclusion',
    brightness: '1',
  },
  productCyrene: {
    id: 'productCyrene',
    name: '???',
    img: 'assets/Character_Cyrene_Splash_Art.png',
    desc: '???',
    song: 'assets/song/Arghena.mp3',
    top: '0',
    left: '0',
    transform: 'scale(18) translateX(24%) translateY(37%)',
    width: '100%',
    height: 'auto',
    axis: '???',
    brightness: '0',
  },
};

const hiddenProducts = {
  productEvernight: {
    id: 'productEvernight',
    name: 'Evernight',
    img: 'assets/Character_Evernight_Portrait.png',
    desc: 'wlee',
    song: 'assets/song/Arghena.mp3',
    top: '0',
    left: '0',
    transform: 'scale(18) translateX(24%) translateY(37%)',
    width: '100%',
    height: 'auto',
    axis: '???',
    brightness: '0',
  },
  productPT: {
    id: 'productPT',
    name: 'Dan Heng - Permansor Terrae',
    img: 'assets/Character_Dan_Heng_Permansor_Terrae_Portrait.png',
    desc: 'wlee',
    song: 'assets/song/Arghena.mp3',
    top: '0',
    left: '0',
    transform: 'scale(18) translateX(24%) translateY(37%)',
    width: '100%',
    height: 'auto',
    axis: '???',
    brightness: '0',
  }
};

//dynamic checkout 
function updateCartBadge(count) {
  const badge = document.querySelector('.cart-badge');
  if (badge) badge.textContent = count;
}

window.addToCart = function(productId) {
    const product = itemProducts[productId]
    console.log("Adding product with ID:", product);
    let cart = localStorage.getItem('cart') || '';
    let count = parseInt(localStorage.getItem('cartCount') || '0');

    if (!cart) {
        cart = '';  // Initialize cart if it's empty
    }

    if (product) {

        cart += `${product.id},`;

        count++;

        localStorage.setItem('cartCount', count);
        localStorage.setItem('cart', cart);

        updateCartBadge(count);

        loadCartItems();

    } else {
        console.error('Product not found');
    }
    
}

window.removeFromCart= function(productID) {
    let cart = localStorage.getItem('cart') || '';
    let count = parseInt(localStorage.getItem('cartCount') || '0');

    if (!cart || cart === '') {
        console.error('Waiting list is empty');
        return;
    }

    cart = cart.replace(`${productID},`, ''); 

    count = Math.max(count - 1, 0);  // Ensure count doesn't go below zero

    localStorage.setItem('cartCount', count);
    localStorage.setItem('cart', cart);

    updateCartBadge(count);

    loadCartItems();
}

 window.loadCartItems = function() {
    let cart = localStorage.getItem('cart') || '';

    const cartItemsCont = document.getElementById('cart-items');
    if (cartItemsCont) {
        cartItemsCont.innerHTML = ``

        if (!cart || cart === '') {
        cartItemsCont.innerHTML = `<li><p class='checkout-text'>Your waiting list is empty!</p></li>`;
        return;

    }
    } else {
        console.warn('cart item not found')
    }


    const productIDs = cart.split(',').filter(id => id);

    productIDs.forEach((id) => {
        if (id) { 
            const product = itemProducts[id]; 
            if (product) {
                const itemList = document.createElement('li');
                itemList.innerHTML = `<button onclick='removeFromCart("${id}")'><p>X</p></button> <p class='checkout-text'>${product.name}</p>`;
                
                if (cartItemsCont) {
                    cartItemsCont.appendChild(itemList);
                } else {
                    console.warn('cart item not found')
                }
            }
        }
    });
}

window.clearCart = function() {
    localStorage.removeItem('cart')
    localStorage.removeItem('cartCount')
    updateCartBadge(0)
    loadCartItems()
}

document.addEventListener('DOMContentLoaded', () => {
  const count = parseInt(localStorage.getItem('cartCount') || '0');
  updateCartBadge(count);
  loadCartItems();
});

// dynamic wishlist 
function updateWishlistBadge(count) {
  const badge = document.querySelector('.wishlist-badge');
  if (badge) badge.textContent = count;
}

window.addToWishlist = function(productId) {
    const product = itemProducts[productId]
    console.log("Adding product with ID:", product);
    let wishlist = localStorage.getItem('wishlist') || '';
    let count = parseInt(localStorage.getItem('wishlistCount') || '0');

    if (!wishlist) {
        wishlist = '';  // Initialize wishlist if it's empty
    }

    if (product) {

        wishlist += `${product.id},`;

        count++;

        localStorage.setItem('wishlistCount', count);
        localStorage.setItem('wishlist', wishlist);

        updateWishlistBadge(count);

        loadWishlistItems();

    } else {
        console.error('Product not found');
    }
    
}

window.removeFromWishlist = function(productID) {
    let wishlist = localStorage.getItem('wishlist') || '';
    let count = parseInt(localStorage.getItem('wishlistCount') || '0');

    if (!wishlist || wishlist === '') {
        console.error('Wishlist is empty');
        return;
    }

    wishlist = wishlist.replace(`${productID},`, ''); 

    count = Math.max(count - 1, 0);  // Ensure count doesn't go below zero

    localStorage.setItem('wishlistCount', count);
    localStorage.setItem('wishlist', wishlist);

    updateWishlistBadge(count);

    loadWishlistItems();
}

 window.loadWishlistItems = function() {
    let wishlist = localStorage.getItem('wishlist') || '';

    const wishlistItemsCont = document.getElementById('wishlist-items');
    if (wishlistItemsCont) {
        wishlistItemsCont.innerHTML = ``

        if (!wishlist || wishlist === '') {
        wishlistItemsCont.innerHTML = `<li><p class='wishlist-text'>Your wishlist is empty!</p></li>`;
        return;

    }
    } else {
        console.warn('wishlist item not found')
    }


    const productIDs = wishlist.split(',').filter(id => id);

    productIDs.forEach((id) => {
        if (id) { 
            const product = itemProducts[id]; 
            if (product) {
                const itemList = document.createElement('li');
                itemList.innerHTML = `<button onclick='removeFromWishlist("${id}")'><p>X</p></button> <button onclick='addToCart("${id}"); removeFromWishlist("${id}"); showPopup("wish", "${product.name}");'><p>🛒</p></button> <p class='wishlist-text'>${product.name}</p>`;
                
                if (wishlistItemsCont) {
                    wishlistItemsCont.appendChild(itemList);
                } else {
                    console.warn('wishlist item not found')
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
  const count = parseInt(localStorage.getItem('wishlistCount') || '0');
  updateWishlistBadge(count);
  loadWishlistItems();
});

//disable scrolling
function enableBodyScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

function disableBodyScroll() {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}


//toggle menu
window.toggleMenu = function(){
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//product details button
 window.showDetails = function() {
  const details = document.getElementById("product-details");
  toggleDetails(details);
}

function toggleDetails(overlay) {

  const audio = overlay.querySelector('audio');

  const displayState = window.getComputedStyle(overlay).display;

  if (displayState === "none") {
    showOverlay(overlay);
    disableBodyScroll();
  } else {
    hideOverlay(overlay);
    enableBodyScroll();
    audio.pause();
    audio.currentTime = 0;
  }
}

function showOverlay(overlay) {
  overlay.style.display = "flex"; 
  requestAnimationFrame(() => {
    overlay.classList.add("open"); 
  });
}

function hideOverlay(overlay) {
  overlay.classList.remove("open"); 
  setTimeout(() => {
    overlay.style.display = "none"; 
  }, 300); 
}

//show popup successfully recalled to waiting list
function openPopup(popup, type, name) {
  popup.style.display = "flex";
  const popuptext = popup.querySelector('.popup-text')
  const popuph3 = popuptext.querySelector('h3');
  if (type === "waiting") {
    popuph3.textContent = `Successfully added ${name} to waiting list!`;
  } else if (type === "wish") {
    popuph3.textContent = `Successfully added ${name} to wishlist!`;
  }
  requestAnimationFrame(() => {
    popup.classList.add('open');
  });
}

function hidePopup(popup) {
  popup.classList.remove("open"); 
  setTimeout(() => {
    popup.style.display = "none"; 
  }, 300); 
}

function togglePopup(popup, type, name) {

  const isOpen = popup.classList.contains('open');

    if (isOpen) {
    hidePopup(popup);
  } else {
    openPopup(popup, type, name);
    setTimeout(function() {
      hidePopup(popup);
    }, 1000);
  }
}

window.showPopup = function(type, name) {
  const popupElement = document.querySelector('.popup');
  togglePopup(popupElement, type, name);
}

// different product details for each button
window.showProductDetails = function(productId) {
  const productItem = itemProducts[productId]
  console.log('Clicked:', productId);

  document.getElementById('product-details-img').innerHTML = `
  <img 
  src="${productItem.img}" 
  alt="${productItem.name}" 
  style="
    top: ${productItem.top};
    left: ${productItem.left};
    width: ${productItem.width};
    transform: ${productItem.transform};
    height: ${productItem.height};
    filter: brightness(${productItem.brightness});
  ">
  `;
  document.getElementById('product-details-text').innerHTML = `
    <h1>${productItem.name}</h1>
    <p>${productItem.desc}</p>
    <h5>Axis: ${productItem.axis}</h5>
  `;
  document.getElementById('product-details-aud').innerHTML =     
  `<audio controls autoplay loop>
      <source src="${productItem.song}" type="audio/mpeg">
    </audio>`
  const addToCartButton = document.querySelector('.buy-button');
  const addToWishlistButton = document.querySelector('.wishlist-button')
  addToCartButton.dataset.productId = productItem.id;
  addToWishlistButton.dataset.productId = productItem.id;

  addToCartButton.onclick = () => {
    console.log('added to cart ', productItem.id)
    addToCart(productItem.id);
    showDetails();               
    showPopup("waiting", productItem.name);                 
  };

  addToWishlistButton.onclick = () => {
    console.log('added to wishlist ', productItem.id)
    addToWishlist(productItem.id);
    showDetails();               
    showPopup("wish", productItem.name);                 
  };

  showDetails();
}

window.resultToCart = function(productId, btn) {
  const productItem = itemProducts[productId];

  btn.onclick = () => {
    console.log('added to cart ', productItem.id)
    addToCart(productItem.id);            
    showPopup();
  };
};

//show all products for seller
window.showAllProducts = function() {
  const container = document.getElementById('showAllProducts');
  const tectDesc = document.getElementById('seller-type');
  tectDesc.textContent = "All Revenants:"
  container.innerHTML = ''; 

  for (const id in itemProducts) {
    const product = itemProducts[id];
    const li = document.createElement('li');
    const txext = document.createElement('p');
    txext.textContent = `Name: ${product.name}, Axis: ${product.axis}`;
    li.appendChild(txext);
    container.appendChild(li);
  }
};

//show wishlist for seller
window.showWishlist = function() {
  const container = document.getElementById('showAllProducts');
  const tectDesc = document.getElementById('seller-type');
  tectDesc.textContent = "Wishlist:"

  container.innerHTML = '';
  let wishlist = localStorage.getItem('wishlist') || '';

  if (!wishlist || wishlist === '') {
      container.innerHTML = `<li><p>No items in wishlist!<p><li>`;
  }
  const productIDs = wishlist.split(',').filter(id => id);

  productIDs.forEach((id) => {
    if (id) {
      const product = itemProducts[id];
      if (product) {
        const li = document.createElement('li');
        const txext = document.createElement('p');
        txext.textContent = `Name: ${product.name}, Axis: ${product.axis}`;
        li.appendChild(txext);
        container.appendChild(li);
      }
    }
  });

};

window.showHiddenItems = function() {
  const container = document.getElementById('showAllProducts');
  const tectDesc = document.getElementById('seller-type');
  tectDesc.textContent = "Add Revenants:"

  container.innerHTML = ''

  for (const id in hiddenProducts) {
    const hidden = hiddenProducts[id];
    const li = document.createElement('li');
    const txext = document.createElement('p');
    const addtostore = document.createElement('button');

    txext.textContent = `Name: ${hidden.name}, Axis: ${hidden.axis}`;
    addtostore.classList.add('add-items');

    addtostore.addEventListener('click', function() {
      itemProducts[id] = hidden;           // Move to shop
      delete hiddenProducts[id];        // Remove from hidden
      window.showHiddenItems();         // Re-render list
    });

    li.appendChild(addtostore);
    li.appendChild(txext);
    container.appendChild(li);
  }
}