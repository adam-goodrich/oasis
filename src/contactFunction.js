import removeAllChildNodes from './removeAllChildNodes'
import homeFunction from './homeFunction'
import menuFunction from './menuFunction'
import galleryFunction from './galleryFunction';


let space = '&#8287;'

const contactFunction = () => {
    let home = document.querySelector("#content");
    let nav = document.createElement("div");
    nav.classList.add("topnav");
    home.appendChild(nav);

    let homeButton = document.createElement("button");
    homeButton.id = "homeButton"
    homeButton.innerHTML = "Home"

    let menuButton = document.createElement("button");
    menuButton.id = "menuButton"
    menuButton.innerHTML = "Menu"

    let contactButton = document.createElement("button");
    contactButton.id = "contactButton"
    contactButton.classList.add("active");
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
    link.onclick = () => {
        removeAllChildNodes(home)
        homeFunction()
    }
    homeContent.appendChild(link)
    let logo = document.createElement("img");
    logo.classList.add("logo")
    logo.src = "./images/logo.jpg"
    link.appendChild(logo)

    let p1 = document.createElement("p");
    p1.innerHTML = "340 Washington St, Boston, MA 02121"

    let p2 = document.createElement("p");
    p2.innerHTML = "(617) 237-9033"

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let hours = document.createElement("p");

    let hoursTable = document.createElement("table");
    hoursTable.classList.add("hours")
    hoursTable.innerHTML = `
    <table>
        <tr><th>Monday  -${space}</th><td>Closed</td></tr>
        <tr><th>Tuesday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Wednesday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Thursday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Friday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Saturday  -${space}</th><td>8am - 8pm</td></tr>
        <tr><th>Sunday  -${space}</th><td>Closed</td></tr>
    </table>
    `

    let p3 = document.createElement("p");
    p3.innerHTML = 
    `
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
    homeContent.appendChild(br1)
    homeContent.appendChild(hours)
    hours.appendChild(hoursTable)
    homeContent.appendChild(br2)


    homeContent.appendChild(p3)

    document.getElementById("homeButton").addEventListener("click", function(e) {
        removeAllChildNodes(home);
        homeFunction();
    })
    
    document.getElementById("menuButton").addEventListener("click", function(e) {
        removeAllChildNodes(home);
        menuFunction();
    })

    document.getElementById("galleryButton").addEventListener("click", function(e) {
        removeAllChildNodes(home)
        galleryFunction();
    })
};

export default contactFunction
