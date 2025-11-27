const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Printer', price: 150 }
];
products.forEach(
    (prod) => console.log(
        `${prod.name} -> price: ${prod.price}`)
);