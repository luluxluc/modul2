
const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" },
];

/* This code uses a filter to find the products that are under the price of 200. */

const cheapProducts = products.filter(product => product.price < 200);

    console.log(cheapProducts)

/* In this code only the names are being listed instead of the whole name, price and category.
(I am unsure if I was supposed to make a list of 'ALL' the products or the cheapProducts. Did both, just in case). */

const productNames = products.map(product => product.name);

    console.log(productNames)

const cheapProductNames = cheapProducts.map(product => product.name);

    console.log(cheapProductNames)

/* This one was a bit trickier to figure out:
So this code filters out the electronics, and then maps out their names so price and category isnt visible. */

const popularEl = products
.filter(product => product.category === "electronics")
.map(product => product.name);

    console.log(popularEl)

/* This is supposed to help find if there is any products in the array that is over 1000. It would have then given me a true or false statement in the console.
It logs "true" which means there is a product over the price of 1000 */

const luxusProduct = products.some(product => product.price > 1000);

    console.log(luxusProduct)

const totalPrice = products.reduce((accumulator, product) => {
    return accumulator + product.price;
}, 0);

    console.log(totalPrice)