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
      alert("SVP, choisissez une couleur")
    } else {
      cart.add(product);
      cart.save();
    }
  }

  async cartDisplay() {
    let cartView = new CartView();
    cartView.render(cart);
    console.log(cart);
  }
}
