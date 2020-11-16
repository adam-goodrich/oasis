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
    homeContent.appendChild(link)
    let logo = document.createElement("img");
    logo.classList.add("logoHome")
    logo.src = "./images/logo.jpg"
    link.appendChild(logo)

    let address = document.createElement("p");
    address.innerHTML = "340 Washington St, Boston, MA 02121"

    let number = document.createElement("p");
    number.innerHTML = "(617) 237-9033"

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let p1 = document.createElement("p");
    p1.innerHTML = "<br>Oasis Vegan Veggie Parlor is a restaurant in Boston located in the four corners neighborhood of Dorchester."
    let p2 = document.createElement("p");
    p2.innerHTML = "We serve a variety of fresh dishes plus Juice, smoothies, and skaes. Visit our menu section for a variety of combo meals, wraps, and grain bowls."

    homeContent.appendChild(address)
    homeContent.appendChild(number)
    homeContent.appendChild(p1)
    homeContent.appendChild(p2)
    
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



