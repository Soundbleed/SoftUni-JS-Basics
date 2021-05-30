class Storage {
    constructor(capacity) {
        this.capacity = capacity
        this.storage = []
    }
    get totalCost () {
        let sum = 0
        for (let i = 0; i < this.storage.length; i++) {
           sum += this.storage[i].price * this.storage[i].quantity
        }
        return sum;

    }

    addProduct(obj) {
        this.storage.push(obj)
        this.capacity -= obj.quantity
    }

    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })
        console.log(output.join('\n')) 
    }

}

let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
storage.getProducts();
console.log(storage.capacity);
console.log(storage.totalCost);
