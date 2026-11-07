class Product {
    constructor(details) {
        this.name = details.name || 'Generic Product';
        this.price = details.price || 0;
    }
    describe() {
        console.log(`${this.name} - $${this.price}`);
    }
     getPrice() {
        return this.price;
    }
    getDescription() {
        return this.name;
    }
}

class Book extends Product {
    constructor(details) {
        super(details);
        this.name = details.title;
        this.author = details.author || 'Unknown';
    }
    describe() {
        console.log(`Book: "${this.name}" by ${this.author} - $${this.price}`);
    }
}

class Electronic extends Product {
    constructor(details) {
        super(details);
        this.name = details.model;
        this.brand = details.brand || 'Unknown';
    }
    describe() {
        console.log(`Electronic: ${this.brand} ${this.name} - $${this.price}`);
    }
}
let instance = null;
class ProductFactory {
    createProduct(type, details) {
        // TODO: Implement the Factory method.
        // Use a switch statement or if/else chain to check the `type`.
        // Based on the `type`, return a new instance of `Book`, `Electronic`, or a default `Product`.
        // Pass the `details` object to the constructor of the chosen class.
        switch(type){
        case "book":
            instance = new Book(details);
            break;
        case "electronic":
            instance = new Electronic(details);
            break;
        default:
            instance = new Product(details);
        }
        return instance;
    }
}

export { ProductFactory };
