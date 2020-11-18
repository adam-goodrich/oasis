(()=>{"use strict";const e=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)};let t=[];class n{constructor(e,t,n){this.src=e,this.alt=t,this.text=n}}function a(e,a,i){let o=new n(e,a,i);t.push(o)}a("./images/home.jpg","Photo of store front","Our Home"),a("./images/pancake.jpg","photo of pancakes","OVVP Pancakes"),a("./images/chopsuey.jpg","Photo of Vegan Chop Suey","Vegan Chop Suey"),a("./images/mango.jpg","Photo of Mango Smoothie","Mango Moon Smoothie"),a("./images/milk.jpg","Photo of Golden Milk Shake","Golden Milk Shake"),a("./images/rice.jpg","Photo of rice bowl","OVVP Rice Bowl"),a("./images/smoothies.jpg","Photo of all our Smoothies","Various Smoothie Options"),a("./images/reg-box.jpg","Photo of Medium Plate","Medium Plate Meal"),a("./images/mac.jpg","Photo of Mac n' Cheese","OVVP Vegan Mac & Cheese"),a("./images/pot.jpg","Photo of African Pot Bowl","African Pot Bowl"),a("./images/everything.jpg","Photo of Oasis Everything Plate"," Oasis Everything Plate"),a("./images/sub.jpg","Photo of a Vegan Sub","OVVP Soy Crumble Sub"),a("./images/sausage.jpg","Photo of Sausage and Cauliflower","Vegan Sausage and Cauliflower"),a("./images/large-meal.jpg","Photo of large-meal","large Meal Combo"),a("./images/small-plate.jpg","Photo of small-plate","Small Meal Combo"),a("./images/korma.jpg","Photo of Veggie Korma Bowl","Veggie Korma Bowl"),a("./images/burrito-bowl.jpg","Photo of burrito-bowl","Vegan Burrito Bowl"),a("./images/everything-plate.jpg","Photo of everything-plate","The Oasis Everything Plate"),a("./images/oasis-burrito.jpg","Photo of oasis-burrito","Oasis Burrito"),a("./images/medium-plate.jpg","Photo of medium-plate","Medium Meal");const i=()=>{window.scrollTo(0,0);let n=document.querySelector("#content"),a=document.createElement("div");a.classList.add("topnav"),n.appendChild(a);let i=document.createElement("button");i.id="homeButton",i.innerHTML="Home";let o=document.createElement("button");o.id="menuButton",o.innerHTML="Menu";let l=document.createElement("button");l.id="contactButton",l.innerHTML="Contact";let s=document.createElement("button");s.id="contactButton",s.classList.add("active"),s.innerHTML="Gallery",a.appendChild(i),a.appendChild(o),a.appendChild(l),a.appendChild(s);let r=document.createElement("div");r.id="menu",n.appendChild(r);let c=document.createElement("div");c.id="home",r.appendChild(c);for(let e=0;e<2;e++){let e=document.createElement("br");c.appendChild(e)}let m=document.createElement("div");m.classList.add("grid-container"),c.appendChild(m);for(let e=0;e<t.length;e++){let n=document.createElement("div");n.classList.add("container"),n.classList.add("grid-item"),n.innerHTML=`\n        <img src=${t[e].src} alt="${t[e].alt}" class="image">\n        <div class="overlay">\n            <div class="text">${t[e].text}</div>\n        </div>\n        `,m.appendChild(n)}let p=document.createElement("div");p.classList.add("footer"),n.appendChild(p);let g=document.createElement("p");g.classList.add("social"),g.innerHTML='\n    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">\n    <img src="./images/grub.png" alt="Grubhub Logo" class="grub">\n    </a>\n    <a href="https://www.facebook.com/OasisVeganVeggieParlor" target="_blank">\n    <img src="./images/facebook.png" alt="facebook Logo" class="grub">\n    </a>\n    <a href="https://www.instagram.com/oasisvvp/?hl=en" target="_blank">\n    <img src="./images/insta.png" alt="instagram Logo" class="grub">\n    </a>\n    <a href="https://www.yelp.com/biz/oasis-vegan-veggie-parlor-dorchester" target="_blank">\n    <img src="./images/yelp.png" alt="yelp Logo" class="grub">\n    </a>\n    ',p.appendChild(g);let h=document.createElement("p");h.classList.add("copyright"),h.innerHTML="© 2020 Oasis Vegan Veggie Parlor",p.appendChild(h),document.getElementById("homeButton").addEventListener("click",(function(t){e(n),y()})),document.getElementById("menuButton").addEventListener("click",(function(t){e(n),E()})),document.getElementById("contactButton").addEventListener("click",(function(t){e(n),d()}))},o=()=>{window.scrollTo(0,0);let t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("topnav"),t.appendChild(n);let a=document.createElement("button");a.id="homeButton",a.innerHTML="Home";let d=document.createElement("button");d.id="menuButton",d.innerHTML="Menu";let l=document.createElement("button");l.id="contactButton",l.classList.add("active"),l.innerHTML="Contact";let s=document.createElement("button");s.id="galleryButton",s.innerHTML="Gallery",n.appendChild(a),n.appendChild(d),n.appendChild(l),n.appendChild(s);let r=document.createElement("div");r.id="menu",t.appendChild(r);let c=document.createElement("div");c.id="home",r.appendChild(c);let m=document.createElement("p");m.classList.add("address"),m.innerHTML="340 Washington St, Boston, MA 02121<br>(617) 237-9033<br>";let p=document.createElement("br"),g=document.createElement("br"),h=document.createElement("table");h.classList.add("form"),h.innerHTML='\n    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdcN_GoYSEVYa0y1iN_QL7GaOFV7PldUCRzh8sQlKGoL2v9vg/viewform?embedded=true" width="640" height="670" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>\n    ';let u=document.createElement("div");u.classList.add("contactContainer"),c.appendChild(u),u.appendChild(m),c.appendChild(g);let b=document.createElement("div");b.id="map",c.appendChild(b);let f=document.createElement("div");f.innerHTML='\n    <br>\n    <p class="delivery">We deliver with Grubhub</p>\n    <br>\n    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">\n    <img src="./images/grub.png" alt="Grubhub Logo" class="grub-contact">\n    </a>',c.appendChild(f),c.appendChild(h),c.appendChild(p),function(){const e={lat:42.299525,lng:-71.073629},t=new google.maps.Map(document.getElementById("map"),{zoom:17,center:e});new google.maps.Marker({position:e,map:t})}();let v=document.createElement("div");v.classList.add("footer"),t.appendChild(v);let L=document.createElement("p");L.classList.add("social"),L.innerHTML='\n    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">\n    <img src="./images/grub.png" alt="Grubhub Logo" class="grub">\n    </a>\n    <a href="https://www.facebook.com/OasisVeganVeggieParlor" target="_blank">\n    <img src="./images/facebook.png" alt="facebook Logo" class="grub">\n    </a>\n    <a href="https://www.instagram.com/oasisvvp/?hl=en" target="_blank">\n    <img src="./images/insta.png" alt="instagram Logo" class="grub">\n    </a>\n    <a href="https://www.yelp.com/biz/oasis-vegan-veggie-parlor-dorchester" target="_blank">\n    <img src="./images/yelp.png" alt="yelp Logo" class="grub">\n    </a>\n    ',v.appendChild(L);let w=document.createElement("p");w.classList.add("copyright"),w.innerHTML="© 2020 Oasis Vegan Veggie Parlor",v.appendChild(w),document.getElementById("homeButton").addEventListener("click",(function(n){e(t),y()})),document.getElementById("menuButton").addEventListener("click",(function(n){e(t),E()})),document.getElementById("contactButton").addEventListener("click",(function(n){e(t),o()})),document.getElementById("galleryButton").addEventListener("click",(function(n){e(t),i()}))},d=o;let l=[],s=[],r=[],c=[],m=[],p=[];class g{constructor(e,t,n){this.name=e,this.price=t,this.desc=n}}class h{constructor(e,t,n){this.name=e,this.price=t,this.desc=n}}class u{constructor(e,t,n){this.name=e,this.price=t,this.desc=n}}class b{constructor(e,t,n){this.name=e,this.price=t,this.desc=n}}class f{constructor(e,t,n){this.name=e,this.price=t,this.desc=n}}class v{constructor(e,t){this.name=e,this.desc=t}}function L(e,t,n,a){if("meal"==e){let e=new g(t,n,a);l.push(e)}if("wrap"==e){let e=new u(t,n,a);s.push(e)}if("juice"==e){let e=new b(t,n,a);r.push(e)}if("grain"==e){let e=new h(t,n,a);c.push(e)}if("side"==e){let e=new f(t,n,a);m.push(e)}if("options"==e){let e=new v(t,a);p.push(e)}}L("options","Grain Options","","Brown Rice, Wheat Bulgar, African Couscous, Quinoa ($1.25 extra)"),L("options","Stew Options","","Miser Wat (Ethiopian Spicy Lentils), Coconut Lentils, Curry Chickpeas, Spicy Veggie Korma"),L("options","Veggie Options","","Curry Cabbage, Seasoned Kale, Oasis Veggie Delight"),L("meal","The Oasis Everything Plate","- $19.44","Our large taster's choice plate with a variety of dishes. 2 Grains, 2 Stews, and 2 Veggies."),L("meal","Large Plate","- $15.49","Serving 1 Grain, 2 Stews, and 2 Veggies"),L("meal","Medium Plate","- $13.15","Serving 1 Grain, 2 Stews, and 1 Veggie"),L("meal","Small Plate","- $9.75","Serving of 1 Grain, 1 Stew, and 1 Veggie"),L("grain","Quinoa Veggie Bowl","$14.45","Oasis savory herb sauce drizzled over seasoned quinoa tossed with a medley of raw veggies, sesame seeds or chia seeds, and dried cranberries."),L("grain","Veggie Rice Bowl","$14.45","Fresh veggies seasoned and stirred -not fried- brown rice (spicy and tofu options available)."),L("grain","Oasis Vegan Burrito Bowl","$14.45","Seasoned brown rice and hot veggies smothered with vegan cheese and miser wat."),L("grain","African Pot Bowl","$14.45","Our spicy Oasis African couscous with fresh kale along side an array of fresh veggies. (Contains Gluten)"),L("grain","Veggie Korma Bowl","$14.45","Taste of India in a rich savory coconut curry sauce drenched over an array of veggie delight and brown rice (spicy optional)."),L("grain","The Oasis Bowl","$14.45","Our favorite grain of the day and veggie medley seasoned to perfection with love!"),L("wrap","Oasis Vegan Burritto","$12.84","Melted vegan cheese, seasoned brown rice, fresh veggies, miser wat, and Oasis dressings."),L("wrap","The Oshun Wrap","$12.84","Melted vegan cheese over kale and curry chickpea stew."),L("wrap","The Shango Wrap","$12.84","Miser wat, spicy veggies, and vegan cheese (cheese optional)."),L("wrap","Oasis Mushroom and Cheese Wrap","$13.12","Savory seasoned mushrooms, red onions, tomatoes, red bell peppers, all grilled with melted vegan cheese."),L("juice","Mango Moon","$6.96","Mangos, turmeric, almond milk, cinnamon, agave, Spice"),L("juice","The Oasis Ginger Bomb Juice","$6.96","Fresh squeezed ginger root, organic apple juice, and a dash of aid digesting cayenne."),L("juice","Green Bliss Juice","$6.96","Organic apple juice, a sprinkle of high nutritious spirulina and moringa, fresh kale, mint leaves, and a variety of green veggies."),L("juice","Golden Milk Shake","$6.96","Natural anti-inflammatory turmeric root, a hint of cinnamon and other spices."),L("side","The Oasis Mac and Cheese Pie","$5.89","Seasoned pasta and vegan cheese slowly baked to perfection! (Contains Gluten)");const w=()=>{window.scrollTo(0,0);let t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("topnav"),t.appendChild(n);let a=document.createElement("button");a.id="homeButton",a.innerHTML="Home";let o=document.createElement("button");o.classList.add("active"),o.id="menuButton",o.innerHTML="Menu";let g=document.createElement("button");g.id="contactButton",g.innerHTML="Contact";let h=document.createElement("button");h.id="galleryButton",h.innerHTML="Gallery",n.appendChild(a),n.appendChild(o),n.appendChild(g),n.appendChild(h);let u=document.createElement("div");u.id="menu",t.appendChild(u);let b=document.createElement("div");b.id="home",u.appendChild(b);for(let e=0;e<2;e++){let e=document.createElement("br");b.appendChild(e)}let f=document.createElement("div");f.classList.add("flex-container-options"),b.appendChild(f);for(let e=0;e<p.length;e++){let t=document.createElement("div");t.classList.add("card-options"),t.innerHTML=`\n        <b>${p[e].name}</b>\n        <p style="color:black; line-height:1.2; font-weight: 20; width: fit-content; padding: 10px;">\n        ${p[e].desc}\n        </p>`,f.appendChild(t)}for(let e=0;e<1;e++){let e=document.createElement("br");b.appendChild(e)}let v=document.createElement("div");v.classList.add("line"),v.style.marginTop="50px",b.appendChild(v);let L=document.createElement("div");L.classList.add("titlecard"),L.innerHTML="OVVP MEALS",b.appendChild(L);let E=document.createElement("div");E.classList.add("flex-container"),b.appendChild(E);for(let e=0;e<l.length;e++){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n        <b>${l[e].name} ${l[e].price}</b>\n        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">\n        ${l[e].desc}\n        </p>`,E.appendChild(t)}for(let e=0;e<2;e++){let e=document.createElement("br");b.appendChild(e)}let C=document.createElement("div");C.classList.add("line"),b.appendChild(C);let M=document.createElement("div");M.classList.add("titlecard"),M.innerHTML="OVVP GRAIN BOWLS",b.appendChild(M);let k=document.createElement("div");k.classList.add("flex-container"),b.appendChild(k);for(let e=0;e<c.length;e++){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n        <b>${c[e].name} - ${c[e].price}</b>\n        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">\n        ${c[e].desc}\n        </p>`,k.appendChild(t)}for(let e=0;e<2;e++){let e=document.createElement("br");b.appendChild(e)}let B=document.createElement("div");B.classList.add("line"),b.appendChild(B);let T=document.createElement("div");T.classList.add("titlecard"),T.innerHTML="OVVP WRAPS",b.appendChild(T);let H=document.createElement("div");H.classList.add("flex-container"),b.appendChild(H);for(let e=0;e<s.length;e++){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n        <b>${s[e].name} - ${s[e].price}</b>\n        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">\n        ${s[e].desc}\n        </p>`,H.appendChild(t)}for(let e=0;e<2;e++){let e=document.createElement("br");b.appendChild(e)}let S=document.createElement("div");S.classList.add("line"),b.appendChild(S);let V=document.createElement("div");V.classList.add("titlecard"),V.innerHTML="ORGANIC OASIS JUICES & SMOOTHIES",b.appendChild(V);let P=document.createElement("div");P.classList.add("flex-container"),b.appendChild(P);for(let e=0;e<r.length;e++){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n        <b>${r[e].name} - ${r[e].price}</b>\n        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">\n        ${r[e].desc}\n        </p>`,P.appendChild(t)}for(let e=0;e<2;e++){let e=document.createElement("br");b.appendChild(e)}let O=document.createElement("div");O.classList.add("line"),b.appendChild(O);let $=document.createElement("div");$.classList.add("titlecard"),$.innerHTML="SIDE DISHES",b.appendChild($);let j=document.createElement("div");j.classList.add("flex-container"),b.appendChild(j);for(let e=0;e<m.length;e++){let t=document.createElement("div");t.classList.add("card"),t.innerHTML=`\n        <b>${m[e].name} - ${m[e].price}</b>\n        <p style="font-size:87%; color:black; line-height:1.2; font-weight: 20; padding: 10px;">\n        ${m[e].desc}\n        </p>`,j.appendChild(t)}for(let e=0;e<1;e++){let e=document.createElement("br");b.appendChild(e)}let G=document.createElement("div");G.classList.add("footer"),t.appendChild(G);let I=document.createElement("p");I.classList.add("social"),I.innerHTML='\n    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">\n    <img src="./images/grub.png" alt="Grubhub Logo" class="grub">\n    </a>\n    <a href="https://www.facebook.com/OasisVeganVeggieParlor" target="_blank">\n    <img src="./images/facebook.png" alt="facebook Logo" class="grub">\n    </a>\n    <a href="https://www.instagram.com/oasisvvp/?hl=en" target="_blank">\n    <img src="./images/insta.png" alt="instagram Logo" class="grub">\n    </a>\n    <a href="https://www.yelp.com/biz/oasis-vegan-veggie-parlor-dorchester" target="_blank">\n    <img src="./images/yelp.png" alt="yelp Logo" class="grub">\n    </a>\n    ',G.appendChild(I);let _=document.createElement("p");_.classList.add("copyright"),_.innerHTML="© 2020 Oasis Vegan Veggie Parlor",G.appendChild(_),document.getElementById("homeButton").addEventListener("click",(function(n){e(t),y()})),document.getElementById("menuButton").addEventListener("click",(function(n){e(t),w()})),document.getElementById("contactButton").addEventListener("click",(function(n){e(t),d()})),document.getElementById("galleryButton").addEventListener("click",(function(n){e(t),i()}))},E=w,C=()=>{window.scrollTo(0,0);let t=document.querySelector("#content"),n=document.createElement("div");n.classList.add("topnavHome"),t.appendChild(n);let a=document.createElement("button");a.id="homeButton",a.classList.add("buttonHomeActive"),a.innerHTML="Home";let o=document.createElement("button");o.id="menuButton",o.classList.add("buttonHome"),o.innerHTML="Menu";let l=document.createElement("button");l.id="contactButton",l.classList.add("buttonHome"),l.innerHTML="Contact";let s=document.createElement("button");s.id="galleryButton",s.classList.add("buttonHome"),s.innerHTML="Gallery",n.appendChild(a),n.appendChild(o),n.appendChild(l),n.appendChild(s);let r=document.createElement("div");r.id="menu",t.appendChild(r);let c=document.createElement("div");c.id="home",r.appendChild(c);let m=document.createElement("div");m.classList.add("logoDiv"),c.appendChild(m);let p=document.createElement("img");p.classList.add("logoHome"),p.src="./images/logo.png",m.appendChild(p);let g=document.createElement("p");g.classList.add("addressFront"),g.innerHTML="340 Washington St, Boston, MA 02121",m.appendChild(g);let h=document.createElement("div");c.appendChild(h);let u=document.createElement("div");u.classList.add("featuredFood"),h.appendChild(u);let b=document.createElement("div");b.classList.add("callToAction"),b.innerHTML='\n    <br>\n    <br>\n    <p>Please call <a href="tel:6172379033">(617) 237-9033</a> to place an order</p>\n    <br>\n    <p>Click below to order delivery with Grubhub</p>\n    <br>\n    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">\n    <img src="./images/grub.png" alt="Grubhub Logo" class="grub-contact"></a>\n    <br>\n\n    <br>\n    ',h.appendChild(b);let f=document.createElement("p"),v=document.createElement("table");v.classList.add("hours"),v.innerHTML="\n    <table>\n        <tr><th>Monday  -&#8287;</th><td>Closed</td></tr>\n        <tr><th>Tuesday  -&#8287;</th><td>8am - 8pm</td></tr>\n        <tr><th>Wednesday  -&#8287;</th><td>8am - 8pm</td></tr>\n        <tr><th>Thursday  -&#8287;</th><td>8am - 8pm</td></tr>\n        <tr><th>Friday  -&#8287;</th><td>8am - 8pm</td></tr>\n        <tr><th>Saturday  -&#8287;</th><td>8am - 8pm</td></tr>\n        <tr><th>Sunday  -&#8287;</th><td>Closed</td></tr>\n    </table>\n    ",h.appendChild(f),f.appendChild(v);let L=document.createElement("div");L.classList.add("featuredFood2"),h.appendChild(L);let w=document.createElement("p");w.classList.add("copy"),w.classList.add("first"),w.innerHTML="Serving the community since 2017 in the four corners neighborhood of Dorchester.",h.appendChild(w);let y=document.createElement("p");y.classList.add("copy"),y.innerHTML="The consciousness is expanded on health — health and wellness. It’s up to us to take care of our bodies, mind, and spirit. This is our focus: to help with the community and ourselves as well.",h.appendChild(y);let M=document.createElement("p");M.classList.add("copy"),M.classList.add("last"),M.innerHTML="Come by and enjoy one of our fresh dishes or one of our juices, smoothies, or shakes. Visit our menu section to see our combo meals, wraps, and grain bowl choices.",h.appendChild(M);let k=document.createElement("div");k.classList.add("footer"),t.appendChild(k);let B=document.createElement("p");B.classList.add("social"),B.innerHTML='\n    <a href="https://www.grubhub.com/restaurant/oasis-vegan-veggie-parlor-340-washington-st-dorchester/539264" target="_blank">\n    <img src="./images/grub.png" alt="Grubhub Logo" class="grub">\n    </a>\n    <a href="https://www.facebook.com/OasisVeganVeggieParlor" target="_blank">\n    <img src="./images/facebook.png" alt="facebook Logo" class="grub">\n    </a>\n    <a href="https://www.instagram.com/oasisvvp/?hl=en" target="_blank">\n    <img src="./images/insta.png" alt="instagram Logo" class="grub">\n    </a>\n    <a href="https://www.yelp.com/biz/oasis-vegan-veggie-parlor-dorchester" target="_blank">\n    <img src="./images/yelp.png" alt="yelp Logo" class="grub">\n    </a>\n    ',k.appendChild(B);let T=document.createElement("p");T.classList.add("copyright"),T.innerHTML="© 2020 Oasis Vegan Veggie Parlor",k.appendChild(T),document.getElementById("homeButton").addEventListener("click",(function(n){e(t),C()})),document.getElementById("menuButton").addEventListener("click",(function(n){e(t),E()})),document.getElementById("contactButton").addEventListener("click",(function(n){e(t),d()})),document.getElementById("galleryButton").addEventListener("click",(function(n){e(t),i()}))},y=C;y()})();