import removeAllChildNodes from "./removeAllChildNodes";
import homeFunction from "./homeFunction";
import menuFunction from "./menuFunction";
import galleryFunction from "./galleryFunction";

let space = "&#8287;";

const contactFunction = () => {
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
  contactButton.classList.add("active");
  contactButton.innerHTML = "Contact";
  contactButton.href = "#Contact";

  let galleryButton = document.createElement("button");
  galleryButton.id = "galleryButton";
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

  let p1 = document.createElement("p");
  p1.classList.add("address");
  p1.innerHTML = `340 Washington St, Dorchester, MA 02121<br><a href="tel:6172379033">(617) 237-9033</a><br>`;

  let br1 = document.createElement("br");
  let br2 = document.createElement("br");

  let form = document.createElement("table");
  form.classList.add("form");
  form.innerHTML = `
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcN_GoYSEVYa0y1iN_QL7GaOFV7PldUCRzh8sQlKGoL2v9vg/viewform?embedded=true" width="640" height="670" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    `;
  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");
  homeContent.appendChild(contactContainer);

  contactContainer.appendChild(p1);

  homeContent.appendChild(br2);

  let map = document.createElement("div");
  map.innerHTML = `
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11804.063872523297!2d-71.0736295!3d42.2995247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x87f8c231b3e9dd97!2sOasis%20Vegan%20Veggie%20Parlor!5e0!3m2!1sen!2sus!4v1606176739221!5m2!1sen!2sus" width="600" height="600" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `;
  map.classList.add("mapBox");
  homeContent.appendChild(map);

  let delivery = document.createElement("div");
  delivery.innerHTML = `
    <br>
    <p class="delivery">We deliver with Grubhub</p>
    <br>
    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">
    <img src="./images/grub.png" alt="Grubhub Logo" class="grub-contact">
    </a>`;

  homeContent.appendChild(delivery);

  homeContent.appendChild(form);

  homeContent.appendChild(br1);

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

  document
    .getElementById("galleryButton")
    .addEventListener("click", function (e) {
      removeAllChildNodes(home);
      galleryFunction();
    });
};

export default contactFunction;
