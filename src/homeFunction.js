import removeAllChildNodes from './removeAllChildNodes'
import menuFunction from './menuFunction'
import contactFunction from './contactFunction'
import galleryFunction from './galleryFunction';

const homeFunction = () => {
    let home = document.querySelector("#content");
    let nav = document.createElement("div");
    nav.classList.add("topnav");
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

    let link = document.createElement("a");
    // web address
    link.href = "#home"
    homeContent.appendChild(link)
    let logo = document.createElement("img");
    logo.classList.add("logo")
    logo.src = "./images/logo.jpg"
    link.appendChild(logo)

    let p1 = document.createElement("p");
    p1.innerHTML = "<br>Oasis Vegan Veggie Parlor is a Restaurant in Boston Located in the Four Corners Neighborhood of Dorchester."
    let p2 = document.createElement("p");
    p2.innerHTML = "We Serve a Variety of Fresh Dishes Plus Juices, Smoothies, and Shakes. Visit Our Menu Section for a Variety of Combo Meals, Wraps, and Grain Bowls."
    let stopBy = document.createElement("p");
    stopBy.innerHTML = 
    `
    <br>
    Please stop by and visit us soon or visit us on social media <br><br>
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
    </a>`

    homeContent.appendChild(p1)
    homeContent.appendChild(p2)
    homeContent.appendChild(stopBy)
    
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



