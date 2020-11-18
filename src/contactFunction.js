import removeAllChildNodes from './removeAllChildNodes'
import homeFunction from './homeFunction'
import menuFunction from './menuFunction'
import galleryFunction from './galleryFunction';


let space = '&#8287;'

const contactFunction = () => {
    window.scrollTo(0, 0);

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




    let p1 = document.createElement("p");
    p1.classList.add("address")
    p1.innerHTML = "340 Washington St, Boston, MA 02121<br>(617) 237-9033<br>"



    let br1 = document.createElement("br");
    let br2 = document.createElement("br");

    let form = document.createElement("table");
    form.classList.add("form")
    form.innerHTML = `
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcN_GoYSEVYa0y1iN_QL7GaOFV7PldUCRzh8sQlKGoL2v9vg/viewform?embedded=true" width="640" height="670" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    `
    let contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer")
    homeContent.appendChild(contactContainer)

    contactContainer.appendChild(p1)

    homeContent.appendChild(br2)

    let map = document.createElement("div");
    map.id = "map";
    homeContent.appendChild(map)

    let delivery = document.createElement("div");
    delivery.innerHTML = `
    <br>
    <p class="delivery">We deliver with Grubhub</p>
    <br>
    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">
    <img src="./images/grub.png" alt="Grubhub Logo" class="grub-contact">
    </a>`

    homeContent.appendChild(delivery)

    homeContent.appendChild(form)

    homeContent.appendChild(br1)



      // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const uluru = { lat: 42.299525, lng: -71.073629 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }

    initMap()




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

    let copyright = document.createElement("p");
    copyright.classList.add("copyright");
    copyright.innerHTML = `© 2020 Oasis Vegan Veggie Parlor`
    footer.appendChild(copyright)

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
};

export default contactFunction
