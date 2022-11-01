class ProductsStorage {
    constructor() {
        this.products = [];
    }

    get length() {
        return this.products.length;
    }

    //product is an instance of Product and any derived classes
    store(product) {
        this.products.push(product);
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    //Adds item to the store of products and returns the total number of products after insertion
    save(storage) {
        storage.store({ name: this.name, price: this.price });
        return storage.length;
    }
}

class DiscountProduct extends Product {
    constructor(name, price, discount) {
        super(name, price); 
        this.discount = discount;
    }

    save(storage) {
        let discounted = { name: this.name, price: this.price - (this.price * this.discount) }
        storage.store(discounted);
        //return discounted;  //Violates LSP
        return storage.length;
    }
}

let products = [
    { name: 'ProductA', price: 28.90 },
    { name: 'ProductB', price: 34.40 },
    { name: 'ProductC', price: 149.90, discount: 0.2 }
];

function insertAll(products) {
    let storage = new ProductsStorage();
    for (let p of products) {
        let product;
        if (p.discount) {
            product = new DiscountProduct(p.name, p.price, p.discount);
        }
        else {
            product = new Product(p.name, p.price);
        }
        let count = product.save(storage);
        console.log(`Product inserted. ${count} products in total`);
    }
}
insertAll(products);