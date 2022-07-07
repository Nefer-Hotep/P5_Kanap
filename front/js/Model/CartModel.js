// CartModel : gère les données du panier
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

  // Créer un array de product-Id pour communiquer les infos requis à l'api (POST)
  getProductIdForPost() {
    let products = []

    for (let i = 0; i < this.cart.length; i++) {
      let currentProduct = this.cart[i]    
      products.push(currentProduct.id)
    }
    
    return products
  }

  // Créer un array lisKanap avec le panier et les informations de l'api
  async getCartProduct() {
    let listKanap = [];

    for (let i = 0; i < this.cart.length; i++) {
      let currentProduct = this.cart[i];
      let model = new Model();
      let kanap = await model.getKanap(currentProduct.id);
      kanap.color = currentProduct.color;
      kanap.quantity = currentProduct.quantity;
      listKanap.push(kanap);
    }

    return listKanap;
  }

  // Sauvegarde le panier dans le local storage
  save() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  // Ajout un produit dans le panier
  add(product) {
    let selectedPoduct = this.cart.find(
      (p) => p.id == product.id && p.color == product.color
    );

    if (selectedPoduct != undefined) {
      selectedPoduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    alert('Kanap ajouté au panier !')
    this.save();
  }

  // Supprime un produit du panier
  remove(id, color) {
    this.cart = this.cart.filter((p) => p.id !== id || p.color !== color);
    this.save();
    if (this.cart == "") {
      document.getElementById("order").hidden = true
    }
  }

  // Change une quantité d'un produit du panier
  changeQuantity(id, color, newQuantity) {
    let selectedProduct = this.cart.find((p) => p.id == id && p.color == color);
   
    selectedProduct.quantity = newQuantity
    this.save()
  }

  // Calcule la quantité total de produit dans le panier
  getTotalQuantity(listKanap) {
    let number = 0;
    for (let kanap of listKanap) {
      number += Number(kanap.quantity) ;
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
