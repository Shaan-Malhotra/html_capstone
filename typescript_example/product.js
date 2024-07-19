"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.calcAverageProductPrice = calcAverageProductPrice;
exports.products = [
    { name: "SmartPhone", price: 100 },
    { name: "Laptop", price: 300 },
    { name: "Mouse Pad", price: 50 }
];
function calcAverageProductPrice(products) {
    var average = 0;
    var sum = 0;
    var count = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        sum += product.price;
        count++;
    }
    average = sum / count;
    console.log("average price is ".concat(average));
}
