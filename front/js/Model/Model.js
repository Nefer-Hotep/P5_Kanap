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
}
