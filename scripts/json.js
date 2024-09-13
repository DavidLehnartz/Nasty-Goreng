'use strict';

/* JSON */


let isDeliverySelected = false;

let myBasket = [];

let myDishes = [
    {
        "category": "Starter",
        "img_src": "./assets/images/spring_rolls.jpg",
        "order_number": 4512,
        "name": "Spring Rolls",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 5.99,
        "description": "Crispy rolls filled with fresh vegetables and served with a tangy dipping sauce.",
        "amount": "4 pieces",
        "toppings": ["Extra Sauce", "Sesame Seeds"]
    },
    {
        "category": "Starter",
        "img_src": "./assets/images/edamame.jpg",
        "order_number": 3927,
        "name": "Edamame",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 4.99,
        "description": "Steamed young soybeans sprinkled with sea salt.",
        "amount": "1 bowl",
        "toppings": ["Spicy Salt", "Lemon Zest"]
    },
    {
        "category": "Starter",
        "img_src": "./assets/images/gyoza.jpg",
        "order_number": 5173,
        "name": "Gyoza",
        "veggie": "./assets/icons/spicy.svg",
        "price": 6.99,
        "description": "Pan-fried dumplings stuffed with seasoned pork and vegetables.",
        "amount": "5 pieces",
        "toppings": ["Extra Soy Sauce", "Chili Oil"]
    },
    {
        "category": "Starter",
        "img_src": "./assets/images/miso_soup.jpg",
        "order_number": 6298,
        "name": "Miso Soup",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 3.99,
        "description": "Traditional Japanese soup with tofu, seaweed, and green onions in a savory miso broth.",
        "amount": "1 bowl",
        "toppings": ["Extra Tofu", "Nori Strips"]
    },
    {
        "category": "Starter",
        "img_src": "./assets/images/crab_rangoon.jpg",
        "order_number": 7645,
        "name": "Crab Rangoon",
        "veggie": "./assets/icons/spicy.svg",
        "price": 7.49,
        "description": "Crispy wontons filled with a blend of crab meat and cream cheese.",
        "amount": "6 pieces",
        "toppings": ["Sweet Chili Sauce", "Green Onions"]
    },
    {
        "category": "Main Dish",
        "img_src": "./assets/images/sushi_platter.jpg",
        "order_number": 8231,
        "name": "Sushi Platter",
        "veggie": "./assets/icons/spicy.svg",
        "price": 25.99,
        "description": "An assortment of fresh nigiri and rolls, served with soy sauce and wasabi.",
        "amount": "12 pieces",
        "toppings": ["Extra Wasabi", "Pickled Ginger"]
    },
    {
        "category": "Main Dish",
        "img_src": "./assets/images/pad_thai.webp",
        "order_number": 9564,
        "name": "Pad Thai",
        "veggie": "./assets/icons/spicy.svg",
        "price": 14.99,
        "description": "Stir-fried rice noodles with shrimp, tofu, eggs, and peanuts in a tamarind sauce.",
        "amount": "1 plate",
        "toppings": ["Lime Wedges", "Chili Flakes"]
    },
    {
        "category": "Main Dish",
        "img_src": "./assets/images/tos_chicken.jpg",
        "order_number": 6827,
        "name": "General Tso's Chicken",
        "veggie": "./assets/icons/spicy.svg",
        "price": 12.99,
        "description": "Crispy chicken pieces coated in a sweet and spicy sauce, served with steamed rice.",
        "amount": "1 plate",
        "toppings": ["Extra Sauce", "Steamed Broccoli"]
    },
    {
        "category": "Main Dish",
        "img_src": "./assets/images/pho.jpg",
        "order_number": 7719,
        "name": "Pho",
        "veggie": "./assets/icons/spicy.svg",
        "price": 10.99,
        "description": "A fragrant Vietnamese noodle soup with beef, fresh herbs, and lime.",
        "amount": "1 bowl",
        "toppings": ["Extra Basil", "Bean Sprouts"]
    },
    {
        "category": "Main Dish",
        "img_src": "./assets/images/kung_pao.jpg",
        "order_number": 8432,
        "name": "Kung Pao Chicken",
        "veggie": "./assets/icons/spicy.svg",
        "price": 13.99,
        "description": "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory sauce.",
        "amount": "1 plate",
        "toppings": ["Extra Peanuts", "Green Onions"]
    },
    {
        "category": "Dessert",
        "img_src": "./assets/images/desserts_img.jpg",
        "order_number": 6923,
        "name": "Mochi Ice Cream",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 6.49,
        "description": "Chewy mochi filled with creamy ice cream, available in various flavors.",
        "amount": "3 pieces",
        "toppings": ["Chocolate Sauce", "Fruit Garnish"]
    },
    {
        "category": "Dessert",
        "img_src": "./assets/images/sticky_rice.jpg",
        "order_number": 8157,
        "name": "Mango Sticky Rice",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 8.99,
        "description": "Sweet sticky rice served with fresh mango slices and coconut milk.",
        "amount": "1 plate",
        "toppings": ["Extra Coconut Milk", "Toasted Sesame Seeds"]
    },
    {
        "category": "Dessert",
        "img_src": "./assets/images/bananas.webp",
        "order_number": 7348,
        "name": "Fried Bananas",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 5.99,
        "description": "Golden fried bananas drizzled with honey and sprinkled with sesame seeds.",
        "amount": "1 plate",
        "toppings": ["Whipped Cream", "Honey Drizzle"]
    },
    {
        "category": "Dessert",
        "img_src": "./assets/images/sesame_balls.jpg",
        "order_number": 5831,
        "name": "Sesame Balls",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 4.99,
        "description": "Glutinous rice balls filled with sweet red bean paste and coated in sesame seeds.",
        "amount": "4 pieces",
        "toppings": ["Coconut Flakes", "Sesame Seeds"]
    },
    {
        "category": "Dessert",
        "img_src": "./assets/images/green_cake.jpg",
        "order_number": 9102,
        "name": "Green Tea Cake",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 7.49,
        "description": "Light and fluffy cake infused with the earthy flavor of matcha green tea.",
        "amount": "1 slice",
        "toppings": ["Whipped Cream", "Matcha Powder"]
    },
    {
        "category": "Drink",
        "img_src": "./assets/images/green_tea.webp",
        "order_number": 7234,
        "name": "Green Tea",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 2.99,
        "description": "Traditional Japanese green tea, served hot and brewed to perfection.",
        "amount": "1 cup",
        "toppings": ["Honey", "Lemon Slice"]
    },
    {
        "category": "Drink",
        "img_src": "./assets/images/thai_tea.jpg",
        "order_number": 5498,
        "name": "Thai Iced Tea",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 3.99,
        "description": "Sweet and creamy tea with a blend of spices and milk, served over ice.",
        "amount": "1 glass",
        "toppings": ["Extra Ice", "Mint Leaves"]
    },
    {
        "category": "Drink",
        "img_src": "./assets/images/sake1.jfif",
        "order_number": 8129,
        "name": "Sake",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 5.99,
        "description": "Warm Japanese rice wine with a smooth and slightly sweet flavor.",
        "amount": "1 cup",
        "toppings": ["Extra Warmth", "Lemon Peel"]
    },
    {
        "category": "Drink",
        "img_src": "./assets/images/lychee1.jpg",
        "order_number": 6371,
        "name": "Lychee Juice",
        "veggie": "./assets/icons/vegetarian.svg",
        "price": 4.49,
        "description": "Refreshing juice made from sweet and aromatic lychee fruit.",
        "amount": "1 glass",
        "toppings": ["Small", "Large"]
    }
]
