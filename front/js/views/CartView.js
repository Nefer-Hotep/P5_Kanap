class CartView {
  render(listKanap) {
    let cartItems = document.getElementById("cart__items");
    let cart = new Cart()

    cartItems.innerHTML = ''
    for (const kanap of listKanap) {
      cartItems.innerHTML += this.displayOneKanap(kanap)
    }
    
    // Affiche le nombre de produit dans le panier
    let totalCartQuantity = document.getElementById("totalQuantity");
    totalCartQuantity.textContent = cart.getNumberProduct();
    
    // Affiche le prix total du panier
    let totalCartPrice = document.getElementById("totalPrice");
    totalCartPrice.textContent = cart.getTotalPrice(listKanap);
  }
  
  displayOneKanap(kanap) {
    // console.log(kanap);
    let divKanap = `
    <article class="cart__item" data-id="${kanap._id}" data-color="${kanap.color}">
    <div class="cart__item__img">
    <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
    </div>
    <div class="cart__item__content">
    <div class="cart__item__content__description">
    <h2>${kanap.name}</h2>
    <p>${kanap.color}</p>
    <p>${kanap.price}</p>
    </div>
    <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
    <p>Qté : ${kanap.quantity}</p>
    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${kanap.quantity}" onclick="controller.changeNumberOfItem('${kanap._id}', ${kanap.quantity}, '${kanap.color}')">
    </div>
    <div class="cart__item__content__settings__delete">
    <p class="deleteItem" onclick="controller.removeItemFromCart('${kanap._id}', '${kanap.color}')">Supprimer</p>
    </div>
    </div>
    </div>
    </article>
    `;
    // console.log(divKanap);
    return divKanap
  }
}
