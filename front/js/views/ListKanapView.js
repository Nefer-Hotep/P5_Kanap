// View : Créer la représentation visuel

class ListKanapView {
  render(kanaps) {
    console.log(kanaps);
    for (let i = 0; i < kanaps.length; i++) {
      
      // Récupère l'id de <section id="items">
      // const items = document.getElementById("items");
      // const ancre = document.createElement("a");
      // const article = document.createElement("article");
      // const image = document.createElement("img");
      // const titre = document.createElement("h3");
      // const texte = document.createElement("p");

      // // Ancre
      // ancre.setAttribute("href", `./product.html?id=${kanaps[i]._id}`);
      // items.appendChild(ancre);
      // // Article
      // ancre.appendChild(article);
      // // Image
      // article.appendChild(image);
      // image.setAttribute("src", `${kanaps[i].imageUrl}`);
      // image.setAttribute("alt:", `${kanaps[i].altTxt}`);
      // // Titre
      // article.appendChild(titre);
      // titre.classList.add("productName");
      // titre.textContent = `${kanaps[i].name}`;
      // // Texte
      // article.appendChild(texte);
      // texte.classList.add("productDescription");
      // texte.textContent = `${kanaps[i].description}`;

      let kanapsView = document.querySelector(('#items'))
      kanapsView.innerHTML += `
      <a href="./product.html?id=${kanaps[i]._id}">
        <article>
          <img src="${kanaps[i].imageUrl}" alt="${kanaps[i].altTxt}">
          <h3 class="productName">${kanaps[i].name}</h3>
          <p class="productDescription">${kanaps[i].description}</p>
        </article>
      </a>
      `
    }
  }
}
