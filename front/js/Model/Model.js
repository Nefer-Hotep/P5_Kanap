// Model : gère les données d'une application (l'ajout, la modification, la suppression...)
class Model {
  // Récupère les données de l'API
  async getListKanap() {
    return fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  }

  // Récupère les données de l'API de l'id choisi
  async getKanap(id) {
    return fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  }

  // Avec le formulaire et le panier demande a l'api le numéro de commande
  async postKanapOrder(contact, products) {
    const order = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact, products }),
    };

    return fetch(`http://localhost:3000/api/products/order`, order)
      .then((res) => res.json())
      .then((orderId) => {
        // console.log(orderId);
        return orderId;
      });
  }
}
