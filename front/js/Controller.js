// Controller : lie l'utilisateur et le system, il gère les interactions
class Controller {
  // Affiche des données reçu de tous les canapés
  async kanapsDisplay() {
    let model = new Model();
    let kanaps = await model.getListKanap();

    let listKanapView = new ListKanapView();
    listKanapView.render(kanaps);
  }

  // Affiche les données d'un seule canapé
  async kanapDisplay() {
    // Créer une variable de l'emplacement actuel de l'Url(search la partie après le ?)
    const urlSearch = new URLSearchParams(window.location.search);
    // Créer une constante Get qui lit l'id
    const id = urlSearch.get("id");

    let model = new Model();
    let kanap = await model.getKanap(id);

    let kanapView = new KanapView();
    kanapView.render(kanap);
  }

  // Ajoute un produit aux panier depuis le onclick:"controller.addItemToCart()"
  addItemToCart() {
    const urlSearch = new URLSearchParams(window.location.search);
    const id = urlSearch.get("id");
    let selectedQuantity = document.getElementById("quantity");
    let selectedColors = document.getElementById("colors");
    let quantity = +selectedQuantity.value;
    let color = selectedColors.value;

    let product = {};
    product.id = id;
    product.quantity = quantity;
    product.color = color;

    let cart = new Cart(id, quantity, color);
    if (quantity == 0) {
      alert("Vous n'avez pas sélectionné un nombre d'article");
    } else if (color == 0) {
      alert("SVP, choisissez une couleur");
    } else {
      cart.add(product);
      cart.save();
    }
  }

  // Affiche le panier depuis le local storage et les données de l'api
  async cartDisplay() {
    let cart = new Cart();
    let cartView = new CartView();

    // Récupère la list des kanaps depuis CartModel avec les données du local storage ensemble
    let listKanap = await cart.getCartProduct();

    // Affiche le nombre de produit dans le panier
    let totalCartQuantity = document.getElementById("totalQuantity");
    totalCartQuantity.textContent = cart.getTotalQuantity(listKanap);

    // Affiche le prix total du panier
    let totalCartPrice = document.getElementById("totalPrice");
    totalCartPrice.textContent = cart.getTotalPrice(listKanap);

    // Affiche le contenu de listKanap avec le template de cartView
    cartView.render(listKanap);
  }

  // Supprime les produits du panier situé dans la page panier
  removeItemFromCart(id, color) {
    let cart = new Cart();
    cart.remove(id, color);
    this.cartDisplay();
    this.createFormOrder();
  }

  // Change la quantité de produit situé dans la page panier
  changeNumberOfItem(event, id, color) {
    let cart = new Cart();
    cart.changeQuantity(id, color, event.target.value);
    this.cartDisplay();
  }

  // Vérifie les données du formulaire et créer une commande
  createFormOrder() {
    let form = new FormValidator();
    let cart = new Cart();
    let model = new Model();
    let products = cart.getProductIdForPost();

    const inputs = document.querySelectorAll(
      ".cart__order__form__question, input"
    );
    const submit = document.querySelector("form");

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        switch (e.target.id) {
          case "firstName":
            form.firstNameChecker(e.target.value);
            break;
          case "lastName":
            form.lastNameChecker(e.target.value);
            break;
          case "address":
            form.addressChecker(e.target.value);
            break;
          case "city":
            form.cityChecker(e.target.value);
            break;
          case "email":
            form.emailChecker(e.target.value);
            break;
          default:
            null;
        }
      });
    });

    submit.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (firstName && lastName && address && city && email) {
        const contact = {
          firstName: firstName.value,
          lastName: lastName.value,
          address: address.value,
          city: city.value,
          email: email.value,
        };

        if (products == "") {
          alert("Votre panier est vide.");
        } else {
          // inputs.forEach((input) => (input.value = ""));
          console.log("Toujours pas connard !!");
          let order = await model.postKanapOrder(contact, products);
          location.href = `http://127.0.0.1:5500/front/html/confirmation.html?order=${order.orderId}`;
        }
      }
    });
  }

  // Affiche le numéro de commande sur la page de confirmation
  orderDisplay() {
    const urlSearch = new URLSearchParams(window.location.search);
    let orderView = new OrderView();
    let order = urlSearch.get("order");
    orderView.render(order);
  }
}
