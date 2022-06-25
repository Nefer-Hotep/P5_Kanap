// View : Créer la représentation visuel

class KanapView {
  render(kanap) {
    console.log(kanap);
    // Appel l'image et créer une balise <img>
    const itemImg = document.querySelector(".item__img");
    const kanapImg = document.createElement("img");

    itemImg.appendChild(kanapImg);
    kanapImg.setAttribute("src", `${kanap.imageUrl}`);

    // Appel le nom et l'insère dans le <h3>
    const itemTitle = document.getElementById("title");
    itemTitle.textContent = kanap.name;

    // Appel le prix est l'insère dans la span #price
    const itemPrice = document.getElementById("price");
    itemPrice.textContent = kanap.price;

    // Appel la description et l'insère dans l'id #description
    const itemDescription = document.getElementById("description");
    itemDescription.textContent = kanap.description;

    // Appel les options de couleur puis créer une boucle qui céer les options
    let selectColors = document.getElementById("colors");
    let colors = kanap.colors;

    for (let i = 0; i < colors.length; i++) {
      selectColors.add(new Option(colors[i], colors[i]));
    }
  }
}
