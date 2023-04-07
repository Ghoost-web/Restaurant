/**
 *  This was created by GhostWeb Design company
 *  All rights reserved 2023.
 */

/**
 * Start of global variables
 */
const burgerIcon = document.querySelector(".burger-icon");
const linksMenu = document.querySelector(".links-menu");
const bodyEl = document.body;
const cateBtns = document.querySelectorAll(".cate-btn")
const categoryBoxes = [
    `<div class="box" id="ethnic">
    <a href="" class="item">
        <div class="img">
            <img src="./images/leven/indianFood.jpg" alt="indian food">
        </div>
        <h1 class="title">
            Indian Food
        </h1>
        <p class="content">
            If you're looking for a delicious and comforting meal that's bursting with flavor, look no
            further than Dhaba Style Matar Paneer. This classic North Indian dish combines soft, creamy
            paneer cheese with tender green peas in a rich and aromatic tomato-based gravy. The dish is
            spiced to perfection with a blend of fragrant herbs and spices, making every bite a tantalizing
            explosion of taste and texture. Whether you're a vegetarian or just looking for a hearty and
            satisfying meal, Dhaba Style Matar Paneer is sure to delight your taste buds and transport you
            to the vibrant streets of India.
        </p>
    </a>
    <a href="" class="item">
        <div class="img">
            <img src="./images/leven/italianFood.jpg" alt="italianFood">
        </div>
        <h1 class="title">
            Italian Food
        </h1>
        <p class="content">
            Indulge in the authentic flavors of Italy with a classic beef ragu. This hearty dish features
            tender, slow-cooked beef in a rich and savory tomato sauce that's been simmered to perfection
            with aromatic herbs and spices. The result is a melt-in-your-mouth texture that's full of depth
            and complexity. Pair it with your favorite pasta or crusty bread for a satisfying and comforting
            meal that's perfect for any occasion. Whether you're a fan of Italian cuisine or simply looking
            for a comforting and delicious meal, a classic beef ragu is sure to hit the spot.
        </p>
    </a>
    <a href="" class="item">
        <div class="img">
            <img src="./images/leven/japaneseFood.jpg" alt="japaneseFood">
        </div>
        <h1 class="title">
            Japanese Food
        </h1>
        <p class="content">
            Savor the mouthwatering taste of gyōza, a popular Japanese dumpling that's sure to delight your
            taste buds. These delectable dumplings are made with a delicate, thin wrapper that's filled with
            a savory mixture of ground pork, vegetables, and aromatic spices. Each bite is a burst of flavor
            and texture, with a crispy exterior and juicy, flavorful filling. Served with a soy-based
            dipping sauce and a sprinkle of sesame seeds, gyōza is a perfect snack or appetizer that's easy
            to enjoy on the go or as part of a full meal. If you're a fan of Japanese cuisine, or just
            looking for a tasty and satisfying bite, you won't want to miss out on the irresistible taste of
            gyōza.
        </p>
    </a>
    <a href="" class="item">
        <div class="img">
            <img src="./images/leven/turkishFood.jpg" alt="turkishFood">
        </div>
        <h1 class="title">
            Turkish food
        </h1>
        <p class="content">
            Experience the delicious and authentic taste of Turkish Pide, a traditional flatbread that's
            beloved across Turkey and beyond. This fluffy and slightly crispy bread is baked to perfection
            in a wood-fired oven, giving it a unique smoky flavor and chewy texture. Topped with a range of
            savory ingredients, such as juicy ground beef, fresh vegetables, and fragrant herbs, each bite
            is a burst of bold and satisfying flavors that will transport you straight to the streets of
            Istanbul. Whether enjoyed as a snack or as part of a larger meal, Turkish Pide is a must-try
            dish for anyone looking to explore the rich and diverse cuisine of Turkey.
        </p>
    </a>
</div>`
,
`<div class="box" id="fast-food">
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/burger.jpg" alt="burger">
    </div>
    <h1 class="title">
        Burgers
    </h1>
    <p class="content">
        Indulge in a classic American meal with juicy burgers and crispy fries. Our burgers are made with premium
        beef patties, topped with melted cheese, fresh lettuce, tomato, and onion, and served on a toasted bun.
        Our fries are crispy on the outside and fluffy on the inside, seasoned with a blend of spices for an
        extra kick of flavor. Whether you're looking for a quick and satisfying meal on the go or a fun night
        out with friends, burgers and fries are a timeless classic that never goes out of style.
    </p>
</a>
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/pizza.jpg" alt="pizza">
    </div>
    <h1 class="title">
        Pizza
    </h1>
    <p class="content">
        Satisfy your cravings with a delicious and cheesy pizza, made fresh to order with your favorite toppings.
        Our pizzas are crafted with the perfect blend of tangy tomato sauce, gooey mozzarella cheese, and a
        crispy crust that's baked to perfection in our wood-fired oven. Choose from classic toppings like
        pepperoni and mushrooms, or get creative with our selection of specialty pizzas. Whether you're in
        the mood for a savory slice or a whole pie to share, our pizza is the perfect comfort food for any
        occasion.
    </p>
</a>
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/taco.jpg" alt="taco">
    </div>
    <h1 class="title">
        Tacos
    </h1>
    <p class="content">
        Spice up your day with our delicious and authentic tacos, made with fresh ingredients and bold flavors.
        Our tacos are made with soft, warm tortillas, and filled with your choice of meats, such as grilled
        chicken, spicy beef, or savory pork. We top them off with fresh salsa, guacamole, and cilantro, for
        a burst of flavor in every bite. Whether you're a fan of traditional Mexican cuisine or just looking
        for a tasty and satisfying meal, our tacos are the perfect choice for a quick and delicious lunch or
        dinner.
    </p>
</a>
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/friedChicken.jpg" alt="fried chicken">
    </div>
    <h1 class="title">
        Fried Chicken
    </h1>
    <p class="content">
        Craving some crispy and delicious fried chicken? Look no further than our mouth-watering fried chicken, made with
        a secret blend of herbs and spices that will tantalize your taste buds. Our chicken is perfectly crispy on the
        outside and juicy on the inside, making it the perfect comfort food for any occasion. Whether you prefer classic
        fried chicken or want to try something new, our menu has something for everyone. So come and indulge in our
        irresistible fried chicken and experience a taste sensation like no other.
    </p>
</a>
</div>`
,
`<div class="box" id="fastCasual">
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/mexicanFood.jpg" alt="mexicanFood">
    </div>
    <h1 class="title">
        Mexican Food
    </h1>
    <p class="content">
        Enjoy the bold and spicy flavors of Mexican cuisine with a classic burrito bowl. Packed with
        tender grilled chicken or steak, fluffy rice, hearty black beans, fresh vegetables, and a
        variety of zesty toppings, every bite is a burst of savory goodness. Customize your bowl with
        your favorite ingredients and toppings, such as tangy salsa, creamy guacamole, or spicy jalapeño
        peppers, to create a personalized and satisfying meal that's perfect for any time of day. Whether
        you're a fan of spicy foods or simply looking for a quick and delicious meal on the go, a
        burrito bowl is sure to satisfy your cravings and leave you feeling satisfied and full.
    </p>
</a>
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/americanFood.jpg" alt="americanFood">
    </div>
    <h1 class="title">
        American Food
    </h1>
    <p class="content">
        Satisfy your hunger with a classic burger and fries, a staple of American fast food. Sink your
        teeth into a juicy beef patty, topped with gooey melted cheese, crisp lettuce, and fresh tomato
        slices, all nestled between two soft and fluffy buns. Paired with a side of golden and crispy
        French fries, this meal is the ultimate comfort food that's perfect for any occasion. Whether you're
        grabbing a quick bite on your lunch break or enjoying a leisurely meal with friends and family,
        a classic burger and fries is sure to hit the spot and leave you feeling satisfied and content.
    </p>
</a>
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/thaiFood.jpg" alt="thaiFood">
    </div>
    <h1 class="title">
        Thai Food
    </h1>
    <p class="content">
        Experience the exotic flavors of Thailand with a delicious and satisfying pad Thai. This classic
        dish features stir-fried noodles, succulent shrimp or chicken, crunchy peanuts, and a range of
        fresh vegetables, all tossed in a sweet and tangy tamarind sauce. The result is a mouthwatering
        and satisfying meal that's bursting with bold and complex flavors. Whether you're a fan of
        Thai cuisine or simply looking for a tasty and convenient meal on the go, pad Thai is sure to
        satisfy your cravings and leave you feeling full and content.
    </p>
</a>
<a href="" class="item">
    <div class="img">
        <img src="./images/leven/mediterraneanFood.jpg" alt="mediterraneanFood">
    </div>
    <h1 class="title">
        Mediterranean Food
    </h1>
    <p class="content">
        Treat your taste buds to the fresh and vibrant flavors of Mediterranean cuisine with a classic
        falafel wrap. This vegetarian dish features crispy and flavorful falafel balls, wrapped in a soft
        pita bread and stuffed with fresh veggies, tangy tzatziki sauce, and a range of aromatic spices.
        The result is a satisfying and delicious meal 
    </p>
</a>
</div>`
]




/**
 * End of global variables
 */


/**
 * Start helper fuctions
 */
burgerIcon.addEventListener("click", () => {
    if (linksMenu.style.display === "none") {
        linksMenu.style.display = "flex"
        bodyEl.style.overflow = 'hidden' 
    } else {
        closeMenu()
        bodyEl.style.overflow = 'visible';
    }
})

function closeMenu() {
    bodyEl.style.overflow = 'visible';
    linksMenu.style = 'animation: rev-menu 1s linear 0s 1 forwards;';
    setTimeout(() => {
        linksMenu.style = 'animation: menu 1s linear 0s 1 forwards;';
        linksMenu.style.display = "none"
    }, 200)
};
let i = 1;

const btns = Array.from(cateBtns)
btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        document.getElementById("menu-category").innerHTML = categoryBoxes[index]
        i = index + 1
    })
})
const changeCate = setInterval(intervalCate, 3000);

function intervalCate() {
    btns.forEach(b => b.classList.remove("active"));
    btns[i].classList.add("active");
    document.getElementById("menu-category").innerHTML = categoryBoxes[i]
    if (i === btns.length - 1) i = 0;
    else i++;
}
/**
 * End helper fuctions
 */


/**
 * End of script
 */
