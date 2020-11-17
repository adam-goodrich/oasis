import removeAllChildNodes from './removeAllChildNodes'
import menuFunction from './menuFunction'
import contactFunction from './contactFunction'
import galleryFunction from './galleryFunction';

const homeFunction = () => {

    window.scrollTo(0, 0);


    let home = document.querySelector("#content");
    let nav = document.createElement("div");
    nav.classList.add("topnavHome");
    home.appendChild(nav);

    let homeButton = document.createElement("button");
    homeButton.id = "homeButton"
    homeButton.classList.add("active");
    homeButton.innerHTML = "Home"

    let menuButton = document.createElement("button");
    menuButton.id = "menuButton"
    menuButton.innerHTML = "Menu"

    let contactButton = document.createElement("button");
    contactButton.id = "contactButton"
    contactButton.innerHTML = "Contact"

    let galleryButton = document.createElement("button");
    galleryButton.id = "galleryButton"
    galleryButton.innerHTML = "Gallery"

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);
    nav.appendChild(galleryButton);

    let menu = document.createElement("div");
    menu.id = "menu"

    home.appendChild(menu)
    let homeContent = document.createElement("div");
    homeContent.id = "home"
    menu.appendChild(homeContent);

    let logoDiv = document.createElement("div");
    logoDiv.classList.add("logoDiv")
    homeContent.appendChild(logoDiv)
    let logo = document.createElement("img");
    logo.classList.add("logoHome")
    logo.src = "./images/logo.jpg"
    logoDiv.appendChild(logo)

    let boxContainer = document.createElement("div");
    homeContent.appendChild(boxContainer)

    let featuredFood = document.createElement("img");
    featuredFood.classList.add("featuredFood");
    featuredFood.src = "./images/buffet.jpg"
    boxContainer.appendChild(featuredFood)

    let address = document.createElement("p");
    address.classList.add("copy")
    address.innerHTML = "340 Washington St, Boston, MA 02121"
    boxContainer.appendChild(address)

    let number = document.createElement("p");
    number.classList.add("copy")
    number.innerHTML = "(617) 237-9033"
    boxContainer.appendChild(number)

    let p1 = document.createElement("p");
    p1.classList.add("copy")
    p1.innerHTML = "Serving the community in the four corners neighborhood of Dorchester."
    boxContainer.appendChild(p1)

    let p2 = document.createElement("p");
    p2.classList.add("copy")
    p2.classList.add("last")

    p2.innerHTML = "Come by and enjoy one of our fresh dishes or one of our juices, smoothies, or shakes. Visit our menu section to see our combo meals, wraps, and grain bowl choices."
    boxContainer.appendChild(p2)

    let featuredFood2 = document.createElement("img");
    featuredFood2.classList.add("featuredFood2");
    featuredFood2.src = "./images/smoothies.jpg"
    boxContainer.appendChild(featuredFood2)

    let footer = document.createElement("div");
    footer.classList.add("footer");
    home.appendChild(footer)

    let stopBy = document.createElement("p");
    stopBy.classList.add("social")
    stopBy.innerHTML = 
    `
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
    `
    footer.appendChild(stopBy)

    document.getElementById("homeButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        homeFunction();
    })
    
    document.getElementById("menuButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        menuFunction();
    })
    
    document.getElementById("contactButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        contactFunction();
    })

    document.getElementById("galleryButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        galleryFunction();
    })
}

export default homeFunction



