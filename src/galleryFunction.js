import removeAllChildNodes from "./removeAllChildNodes";
import homeFunction from "./homeFunction";
import menuFunction from "./menuFunction";
import contactFunction from "./contactFunction";

let galleryList = [];

class GalleryImage {
  constructor(src, alt, text) {
    this.src = src;
    this.alt = alt;
    this.text = text;
  }
}

function addPic(src, alt, text) {
  let newItem = new GalleryImage(src, alt, text);
  galleryList.push(newItem);
}

addPic("./images/home.jpg", "Photo of store front", "Our Home");
addPic("./images/submit-image1.jpeg", "photo of noodle bowl", " ");
addPic("./images/submit-image2.jpg", "photo of our food options", " ");
addPic("./images/submit-image3.jpg", "photo of more food options", " ");
addPic("./images/submit-image4.jpg", "photo of a medium plate", " ");
addPic("./images/pancake.jpg", "photo of pancakes", "OVVP Pancakes");
addPic("./images/chopsuey.jpg", "Photo of Vegan Chop Suey", "Vegan Chop Suey");
addPic("./images/mango.jpg", "Photo of Mango Smoothie", "Mango Moon Smoothie");
addPic("./images/milk.jpg", "Photo of Golden Milk Shake", "Golden Milk Shake");
addPic("./images/rice.jpg", "Photo of rice bowl", "OVVP Rice Bowl");
addPic(
  "./images/smoothies.jpg",
  "Photo of all our Smoothies",
  "Various Smoothie Options"
);
addPic("./images/reg-box.jpg", "Photo of Medium Plate", "Medium Plate Meal");
addPic("./images/mac.jpg", "Photo of Mac n' Cheese", "OVVP Vegan Mac & Cheese");
addPic("./images/pot.jpg", "Photo of African Pot Bowl", "African Pot Bowl");
addPic(
  "./images/everything.jpg",
  "Photo of Oasis Everything Plate",
  " Oasis Everything Plate"
);
addPic("./images/sub.jpg", "Photo of a Vegan Sub", "OVVP Soy Crumble Sub");
addPic(
  "./images/sausage.jpg",
  "Photo of Sausage and Cauliflower",
  "Vegan Sausage and Cauliflower"
);
addPic("./images/large-meal.jpg", "Photo of large-meal", "large Meal Combo");
addPic("./images/small-plate.jpg", "Photo of small-plate", "Small Meal Combo");
addPic("./images/korma.jpg", "Photo of Veggie Korma Bowl", "Veggie Korma Bowl");
addPic(
  "./images/burrito-bowl.jpg",
  "Photo of burrito-bowl",
  "Vegan Burrito Bowl"
);
addPic(
  "./images/everything-plate.jpg",
  "Photo of everything-plate",
  "The Oasis Everything Plate"
);
addPic("./images/oasis-burrito.jpg", "Photo of oasis-burrito", "Oasis Burrito");
addPic("./images/medium-plate.jpg", "Photo of medium-plate", "Medium Meal");

const galleryFunction = () => {
  window.scrollTo(0, 0);

  let home = document.querySelector("#content");
  let nav = document.createElement("div");
  nav.classList.add("topnav");
  home.appendChild(nav);

  let homeButton = document.createElement("button");
  homeButton.id = "homeButton";
  homeButton.innerHTML = "Home";
  homeButton.href = "#Home";

  let menuButton = document.createElement("button");
  menuButton.id = "menuButton";
  menuButton.innerHTML = "Menu";
  menuButton.href = "#Menu";

  let contactButton = document.createElement("button");
  contactButton.id = "contactButton";
  contactButton.innerHTML = "Contact";
  contactButton.href = "#Contact";

  let galleryButton = document.createElement("button");
  galleryButton.id = "contactButton";
  galleryButton.classList.add("active");
  galleryButton.innerHTML = "Gallery";
  galleryButton.href = "#Gallery";

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  nav.appendChild(galleryButton);

  let menu = document.createElement("div");
  menu.id = "menu";

  home.appendChild(menu);
  let homeContent = document.createElement("div");
  homeContent.id = "home";
  menu.appendChild(homeContent);

  for (let i = 0; i < 2; i++) {
    let breaker = document.createElement("br");
    homeContent.appendChild(breaker);
  }

  let gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  homeContent.appendChild(gridContainer);

  for (let i = 0; i < galleryList.length; i++) {
    let p1 = document.createElement("div");
    p1.classList.add("container");
    p1.classList.add("grid-item");

    p1.innerHTML = `
        <img src=${galleryList[i].src} alt="${galleryList[i].alt}" class="image">
        `;
    gridContainer.appendChild(p1);
  }

  let footer = document.createElement("div");
  footer.classList.add("footer");
  homeContent.appendChild(footer);

  let stopBy = document.createElement("p");
  stopBy.classList.add("social");
  stopBy.innerHTML = `
    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">
    <img src="./images/grub.png" alt="Grubhub Logo" class="grub">
    </a>
    <a href="https://www.facebook.com/OasisVeganVeggieParlor" target="_blank">
    <img src="./images/facebook.png" alt="facebook Logo" class="grub">
    </a>
    <a href="https://www.instagram.com/oasisvvp/?hl=en" target="_blank">
    <img src="./images/insta.png" alt="instagram Logo" class="grub">
    </a>
    <a href="https://www.yelp.com/biz/oasis-vegan-veggie-parlor-dorchester" target="_blank">
    <img src="./images/yelp.png" alt="yelp Logo" class="grub">
    </a>
    `;

  footer.appendChild(stopBy);

  let copyright = document.createElement("p");
  copyright.classList.add("copyright");
  copyright.innerHTML = `© 2021 Oasis Vegan Veggie Parlor | Website Design by Adam Goodrich`;
  footer.appendChild(copyright);

  document.getElementById("homeButton").addEventListener("click", function (e) {
    removeAllChildNodes(home);
    homeFunction();
  });

  document.getElementById("menuButton").addEventListener("click", function (e) {
    removeAllChildNodes(home);
    menuFunction();
  });

  document
    .getElementById("contactButton")
    .addEventListener("click", function (e) {
      removeAllChildNodes(home);
      contactFunction();
    });
};

export default galleryFunction;
