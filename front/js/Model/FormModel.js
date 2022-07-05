class Form {

  // Créer un array de product-Id
  getProductIdForPost() {
    let products = []
    let cart = new Cart()

    for (let i = 0; i < cart.cart.length; i++) {
      let currentProduct = cart.cart[i]    
      products.push(currentProduct.id)
    }
    
    return products
  }

  // Créer un template de message d'erreur
  errorDisplay(tag, message, valid) {
    const errorMessage = document.getElementById(tag + "ErrorMsg");

    if (!valid) {
      errorMessage.textContent = message;
    } else {
      errorMessage.textContent = "";
    }
  }

  // Vérifie le prénom et affiche un message d'erreur si besoin
  firstNameChecker(value) {
    if (value.length > 0 && (value.length < 2 || value.length > 30)) {
      this.errorDisplay(
        "firstName",
        "Le prénom doit faire entre 2 et 30 caractères."
      );
      this.firstName = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-éëèïôÿ]*$/)) {
      this.errorDisplay(
        "firstName",
        "Le prénom contient des caractères invalide."
      );
      this.firstName = null;
    } else {
      this.errorDisplay("firstName", "", true);
      this.firstName = value;
    }
  }

  // Vérifie le nom et affiche un message d'erreur si besoin
  lastNameChecker(value) {
    if (value.length > 0 && (value.length < 2 || value.length > 30)) {
      this.errorDisplay(
        "lastName",
        "Le nom doit faire entre 2 et 30 caractères."
      );
      this.lastName = null;
    } else if (!value.match(/^[a-zA-Z0-9_.-éëèïôÿ]*$/)) {
      this.errorDisplay("lastName", "Le nom contient des caractères invalide.");
      this.lastName = null;
    } else {
      this.errorDisplay("lastName", "", true);
      this.lastName = value;
    }
  }

  // Vérifie l'adresse et affiche un message d'erreur si besoin
  addressChecker(value) {
    if (value.length > 0 && (value.length < 2 || value.length > 64)) {
      this.errorDisplay(
        "address",
        "L'adresse doit faire entre 2 et 64 caractères."
      );
      this.address = null;
    } else if (!value.match(/^[a-zA-Z0-9-éëèïôÿ, ]*$/)) {
      this.errorDisplay(
        "address",
        "L'adresse' contient des caractères invalide."
      );
      this.address = null;
    } else {
      this.errorDisplay("address", "", true);
      this.address = value;
    }
  }

  // Vérifie la ville et affiche un message d'erreur si besoin
  cityChecker(value) {
    if (value.length > 0 && (value.length < 2 || value.length > 64)) {
      this.errorDisplay(
        "city",
        "La ville doit faire entre 2 et 64 caractères."
      );
      this.city = null;
    } else if (!value.match(/^[a-zA-Z0-9-éëèïôÿ ]*$/)) {
      this.errorDisplay("city", "La ville contient des caractères invalide.");
      this.city = null;
    } else {
      this.errorDisplay("city", "", true);
      this.city = value;
    }
  }

  // Vérifie l'email et affiche un message d'erreur si besoin
  emailChecker(value) {
    if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      this.errorDisplay("email", "Votre mail n'est pas valide.");
      this.email = null;
    } else {
      this.errorDisplay("email", "", true);
      this.email = value;
    }
  }
}
