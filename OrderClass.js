class Order {
    constructor(name) {
        this.name = name;
    }

    getOrderName() {
        console.log(`${this.name} getOrderName.`);
    }
}

class Apple extends Order {
    constructor(name) {
        super(name); // call the super class constructor and pass in the name parameter
    }

    getOrderDetails() {
        console.log(`${this.name} getProductDetails.`);
    }
}
//creating an instance with new
var a = new Apple(`iphoneX`);
a.getOrderName();
a.getOrderDetails();