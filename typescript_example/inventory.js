"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventory = void 0;
exports.calcInventoryValue = calcInventoryValue;
exports.inventory = [
    { product: { name: "Motor", price: 10.00 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var sum = 0;
    for (var _i = 0, inventory_1 = inventory; _i < inventory_1.length; _i++) {
        var inventoryItem = inventory_1[_i];
        sum += (inventoryItem.product.price * inventoryItem.quantity);
    }
    console.log("Inventory value is ".concat(sum));
}
