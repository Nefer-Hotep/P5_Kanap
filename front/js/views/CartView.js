class CartView {
  render(cart, kanap, cartColor, cartQuantity) {
    let cartItems = document.getElementById("cart__items");
    
    cartItems.innerHTML += `
    <article class="cart__item" data-id="${kanap._id}" data-color="${cartColor}">
      <div class="cart__item__img">
        <img src="${kanap.imageUrl}" alt="${kanap.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${kanap.name}</h2>
          <p>${cartColor}</p>
          <p>${kanap.price}</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : ${cartQuantity}</p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cartQuantity}" onclick="controller.changeNumberOfItem()">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem" onclick="cart.remove()">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
    `;

    // Affiche le nombre de produit dans le panier
    let totalCartQuantity = document.getElementById("totalQuantity");
    totalCartQuantity.textContent = cart.getNumberProduct();

    // Affiche le prix total du panier
    let totalCartPrice = document.getElementById("totalPrice");
    totalCartPrice.textContent = cart.getTotalPrice(kanap, cart);
  }
}
