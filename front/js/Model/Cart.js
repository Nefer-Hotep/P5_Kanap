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
  remove(product) {
    this.cart = this.cart.filter((p) => p.id != product.id);
    this.save(cart);
  }

  // Change une quantité d'un produit du panier
  changeQuantity(product, quantity) {
    let selectedPoduct = this.cart.find((p) => p.id == product.id);

    if (selectedPoduct != undefined) {
      selectedPoduct.quantity += quantity;
      if (selectedPoduct.quantity <= 0) {
        this.remove(selectedPoduct);
      } else {
        this.save();
      }
    }
  }

  // Calcule la quantité total de produit dans le panier
  getNumberProduct() {
    let number = 0;
    for (let product of this.cart) {
      number += product.quantity;
    }
    return number;
  }

  // Calcule le prix total du panier
  getTotalPrice() {
    let total = 0;
    for (let product of this.cart) {
      total += product.quantity * product.price;
    }
    return total;
  }
}
