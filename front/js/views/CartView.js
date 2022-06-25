class CartView {
  render(cart, kanaps) {
    
    // console.log(kanaps);
    // console.log("je suis" + " " + cart);
    
    for (let i = 0; i < cart.cart.length; i++) {
      let cartItems = document.getElementById("cart__items");
      let cartId = cart.cart[i].id
      
      
      // console.log(cartId);
      // console.log(kanaps[i]._id);
      console.log(kanaps);

      console.log(cart);

      cartItems.innerHTML += `
        <article class="cart__item" data-id="${cart.cart[i].id}" data-color="${cart.cart[i].color}">
          <div class="cart__item__img">
            <img src="${kanaps[i].imageUrl}" alt="Photographie d'un canapé">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>Nom du produit</h2>
              <p>${cart.cart[i].color}</p>
              <p>42,00 €</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${cart.cart[i].quantity}">
              </div>
              <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
              </div>
            </div>
            </div>
        </article>
        `;
     }
  }
}
