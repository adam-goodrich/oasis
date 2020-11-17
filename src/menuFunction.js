import removeAllChildNodes from './removeAllChildNodes'
import contactFunction from './contactFunction'
import homeFunction from './homeFunction'
import galleryFunction from './galleryFunction';


let meals = [];
let wraps = [];
let Juices = [];
let grains = [];
let sides = [];
let options = [];

class Meal {
    constructor(name, price, desc) {
        this.name = name
        this.price = price;
        this.desc = desc;
    }
}

class Grain {
    constructor(name, price, desc) {
        this.name = name
        this.price = price;
        this.desc = desc;
    }
}

class Wrap {
    constructor(name, price, desc) {
        this.name = name
        this.price = price;
        this.desc = desc;
    }
}

class Juice {
    constructor(name, price, desc) {
        this.name = name
        this.price = price;
        this.desc = desc;
    }
}

class Side {
    constructor(name, price, desc) {
        this.name = name
        this.price = price;
        this.desc = desc;
    }
}

class Options {
    constructor(name, desc) {
        this.name = name
        this.desc = desc;
    }
}

function addFoodToMenu(category, name, price, desc) {
    if (category == "meal") {
        let newItem = new Meal(name, price, desc);
        meals.push(newItem);
    }

    if (category == "wrap") {
        let newItem = new Wrap(name, price, desc);
        wraps.push(newItem);       
    }

    if (category == "juice") {
        let newItem = new Juice(name, price, desc);
        Juices.push(newItem);         
    }

    if (category == "grain") {
        let newItem = new Grain(name, price, desc);
        grains.push(newItem); 
    }

    if (category == "side") {
        let newItem = new Side(name, price, desc);
        sides.push(newItem); 
    }

    if (category == "options") {
        let newItem = new Options(name, desc);
        options.push(newItem);         
    }
}

addFoodToMenu("options", "Grain Options", "", "Brown Rice, Wheat Bulgar, African Couscous, Quinoa ($1.25 extra)")
addFoodToMenu("options", "Stew Options", "", "Miser Wat (Ethiopian Spicy Lentils), Coconut Lentils, Curry Chickpeas, Spicy Veggie Korma")
addFoodToMenu("options", "Veggie Options", "", "Curry Cabbage, Seasoned Kale, Oasis Veggie Delight")

// MEALS
addFoodToMenu("meal", "The Oasis Everything Plate", "- $19.44", "Our large taster's choice plate with a variety of dishes, 2 Grains, 2 Stews and 2 Veggies.")
addFoodToMenu("meal", "Large Plate", "- $15.49", "Severing 1 grain, 2 Stews 2 Veggies")
addFoodToMenu("meal", "Medium Plate", "- $13.15", "Severing 1 Grain, 2 Stews, 1 Veggie")
addFoodToMenu("meal", "Small Plate", "- $9.75", "Serving of 1 Grain, 1 Stew, 1 Veggie")


// GRAIN BOWLS
addFoodToMenu("grain", "Quinoa Veggie Bowl", "$14.45", "Oasis savory herb sauce drizzled over seasoned quinoa tossed with a medley of raw veggies, sesame seeds or chia seeds, and dried cranberries.")
addFoodToMenu("grain", "Veggie Rice Bowl", "$14.45", "Fresh veggies seasoned and stirred -not fried- brown rice (spicy and tofu options available).")
addFoodToMenu("grain", "Oasis Vegan Burrito Bowl", "$14.45", "Seasoned brown rice and hot veggies smothered with vegan cheese and miser wat.")
addFoodToMenu("grain", "African Pot Bowl", "$14.45", "Our spicy Oasis African couscous with fresh kale alongside an array of fresh veggies. (Contains Gluten)")
addFoodToMenu("grain", "Veggie Korma Bowl", "$14.45", "taste of India in a rich savory coconut curry sauce drenched over an array of veggie delight and brown rice (spicy optional).")
addFoodToMenu("grain", "The Oasis Bowl", "$14.45", "Our favorite grain of the day and veggie medley seasoned to perfection with love!")

// WRAPS
addFoodToMenu("wrap", "Oasis Vegan Burritto", "$12.84", "Melted vegan cheese, seasoned brown rice, fresh veggies, miser wat, and Oasis dressings.")
addFoodToMenu("wrap", "The Oshun Wrap", "$12.84", "Melted vegan cheese over kale and curry chickpea stew.")
addFoodToMenu("wrap", "The Shango Wrap", "$12.84", "Miser wat (Ethiopian high protein lentils), spicy veggies, and vegan cheese (optional).")
addFoodToMenu("wrap", "Oasis Mushroom and Cheese Wrap", "$13.12", "Savory seasoned mushrooms, red onions, tomatoes, red bell peppers grilled with melted vegan cheese.")

// JUICES
addFoodToMenu("juice", "Mango Moon", "$6.96", "Mangos, Tumeric, Almondmilk, cinnimon, agave, Spice")
addFoodToMenu("juice", "The Oasis Ginger Bomb Juice", "$6.96", "Fresh squeezed ginger root, organic apple juice, and a dash of aid digesting cayenne.")
addFoodToMenu("juice", "Green Bliss Juice", "$6.96", "Organic apple juice, a sprinkle of high nutritious spirulina and moringa, fresh kale, mint leaves, and a variety of green veggies.")
addFoodToMenu("juice", "Golden Milk Shake", "$6.96", "Natural anti-inflammatory turmeric root, a hint of cinnamon and spices.")

// SIDES
addFoodToMenu("side", "The Oasis Mac and Cheese Pie", "$5.89", "Seasoned pasta and vegan cheese slowly baked to perfection! (Contains Gluten)")


const menuFunction =() => {
    window.scrollTo(0, 0);


    let home = document.querySelector("#content");
    let nav = document.createElement("div");
    nav.classList.add("topnav");
    home.appendChild(nav);

    let homeButton = document.createElement("button");
    homeButton.id = "homeButton"
    homeButton.innerHTML = "Home"

    let menuButton = document.createElement("button");
    menuButton.classList.add("active");
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

    // let link = document.createElement("a");
    // // web address
    // link.onclick = () => {
    //     removeAllChildNodes(home)
    //     homeFunction()
    // }
    // homeContent.appendChild(link)
    // let logo = document.createElement("img");
    // logo.classList.add("logo")
    // logo.src = "./images/logo.jpg"
    // link.appendChild(logo)

    for (let i = 0; i < 2; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };
    
    let optionsFlexContainer = document.createElement("div");
    optionsFlexContainer.classList.add("flex-container-options")
    homeContent.appendChild(optionsFlexContainer)

    for (let i = 0; i < options.length; i++) {
        let p1 = document.createElement("div");
        p1.classList.add("card-options")
        p1.innerHTML = `
        <b>${options[i].name}</b>
        <p style="color:black; line-height:1.2; font-weight: 20; width: fit-content; padding: 10px;">
        ${options[i].desc}
        </p>`
        optionsFlexContainer.appendChild(p1)
    }

    // MEALS SECTION

    for (let i = 0; i < 1; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };

    let mealLine = document.createElement("div");
    mealLine.classList.add("line")
    mealLine.style.marginTop = "50px";
    homeContent.appendChild(mealLine)

    let mealTitle = document.createElement("div");
    mealTitle.classList.add("titlecard")
    mealTitle.innerHTML = "OVVP MEALS"
    homeContent.appendChild(mealTitle)
    
    let mealFlexContainer = document.createElement("div");
    mealFlexContainer.classList.add("flex-container")
    homeContent.appendChild(mealFlexContainer)

    for (let i = 0; i < meals.length; i++) {
        let p1 = document.createElement("div");
        p1.classList.add("card")
        p1.innerHTML = `
        <b>${meals[i].name} ${meals[i].price}</b>
        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">
        ${meals[i].desc}
        </p>`
        mealFlexContainer.appendChild(p1)
    }

    // GRAINS SECTION

    for (let i = 0; i < 2; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };

    let grainLine = document.createElement("div");
    grainLine.classList.add("line")
    homeContent.appendChild(grainLine)

    let grainTitle = document.createElement("div");
    grainTitle.classList.add("titlecard")
    grainTitle.innerHTML = "OVVP GRAIN BOWLS"
    homeContent.appendChild(grainTitle)

    let grainFlexContainer = document.createElement("div");
    grainFlexContainer.classList.add("flex-container")
    homeContent.appendChild(grainFlexContainer)

    for (let i = 0; i < grains.length; i++) {

        let p1 = document.createElement("div");
        p1.classList.add("card")
        p1.innerHTML = `
        <b>${grains[i].name} - ${grains[i].price}</b>
        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">
        ${grains[i].desc}
        </p>`
        grainFlexContainer.appendChild(p1)
    }

    // WRAPS SECTION


    for (let i = 0; i < 2; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };

    let wrapLine = document.createElement("div");
    wrapLine.classList.add("line")
    homeContent.appendChild(wrapLine)

    let wrapTitle = document.createElement("div");
    wrapTitle.classList.add("titlecard")
    wrapTitle.innerHTML = "OVVP WRAPS"
    homeContent.appendChild(wrapTitle)

    let wrapFlexContainer = document.createElement("div");
    wrapFlexContainer.classList.add("flex-container")
    homeContent.appendChild(wrapFlexContainer)

    for (let i = 0; i < wraps.length; i++) {

        let p1 = document.createElement("div");
        p1.classList.add("card")
        p1.innerHTML = `
        <b>${wraps[i].name} - ${wraps[i].price}</b>
        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">
        ${wraps[i].desc}
        </p>`
        wrapFlexContainer.appendChild(p1)
    }

    // JUICE SECTION

    for (let i = 0; i < 2; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };

    let juiceLine = document.createElement("div");
    juiceLine.classList.add("line")
    homeContent.appendChild(juiceLine)

    let juiceTitle = document.createElement("div");
    juiceTitle.classList.add("titlecard")
    juiceTitle.innerHTML = "ORGANIC OASIS JUICES & SMOOTHIES"
    homeContent.appendChild(juiceTitle)

    let juiceFlexContainer = document.createElement("div");
    juiceFlexContainer.classList.add("flex-container")
    homeContent.appendChild(juiceFlexContainer)

    for (let i = 0; i < Juices.length; i++) {

        let p1 = document.createElement("div");
        p1.classList.add("card")
        p1.innerHTML = `
        <b>${Juices[i].name} - ${Juices[i].price}</b>
        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">
        ${Juices[i].desc}
        </p>`
        juiceFlexContainer.appendChild(p1)
    }

    // SIDE SECTION

    for (let i = 0; i < 2; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };

    let sideLine = document.createElement("div");
    sideLine.classList.add("line")
    homeContent.appendChild(sideLine)

    let sideTitle = document.createElement("div");
    sideTitle.classList.add("titlecard")
    sideTitle.innerHTML = "SIDE DISHES"
    homeContent.appendChild(sideTitle)

    let sideFlexContainer = document.createElement("div");
    sideFlexContainer.classList.add("flex-container")
    homeContent.appendChild(sideFlexContainer)

    for (let i = 0; i < sides.length; i++) {

        let p1 = document.createElement("div");
        p1.classList.add("card")
        p1.innerHTML = `
        <b>${sides[i].name} - ${sides[i].price}</b>
        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">
        ${sides[i].desc}
        </p>`
        sideFlexContainer.appendChild(p1)
    }

    //FOOTER

    for (let i = 0; i < 1; i++) {
        let breaker = document.createElement("br");
        homeContent.appendChild(breaker);
    };
    
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

export default menuFunction
