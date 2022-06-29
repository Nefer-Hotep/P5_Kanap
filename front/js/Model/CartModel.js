class Cart {
  constructor() {
    // Récupère le panier du local storage
    let cart = localStorage.getItem("cart");
    if (cart == null) {
      this.cart = [];
    } else {
      this.cart = JSON.parse(cart);
    }
  }

  async getCartProduct() {
    let listKanap = []

    for (let i = 0; i < this.cart.length; i++){
      let currentProduct = this.cart[i]

      let model = new Model();
      let kanap = await model.getKanap(currentProduct.id);
      kanap.color = currentProduct.color
      kanap.quantity = currentProduct.quantity
      listKanap.push(kanap)
    }

    return listKanap
  }

  // Sauvegarde le panier dans le local storage
  save() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // Ajout un produit dans le panier
  add(product) {
    let selectedPoduct = this.cart.find(
      (p) => p.id == product.id && p.color == product.color);

    if (selectedPoduct != undefined) {
      selectedPoduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    this.save();
  }

  // Supprime un produit du panier
  remove(id, color) {
    this.cart = this.cart.filter((p) => p.id !== id || p.color !== color);
    this.save();
  }

  // Change une quantité d'un produit du panier
  
  /*problème de valeur au début du calcul*/
  changeQuantity(id, quantity, color) {
    let selectedProduct = this.cart.find((p) => p.id == id && p.color == color);

    console.log(selectedProduct);
    if (selectedProduct != undefined) {
      selectedProduct.quantity += quantity;
      if (selectedProduct.quantity <= 0) {
        this.remove(selectedProduct);
      } else {
        this.save();
      }
    }
  }
  /*problème de valeur au début du calcul*/


  // Calcule la quantité total de produit dans le panier
  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      number += product.quantity;
    }
    return number;
  }

  // Calcule le prix total du panier
  getTotalPrice(listKanap) {
    let total = 0;

    for (let kanap of listKanap) {
      total += kanap.price * kanap.quantity;
    }
    return total;
  }
}
