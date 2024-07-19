import { Product } from "./product";

export interface Inventory {
    product: Product;
    quantity: number;
}
export const inventory: Inventory[] = [
    { product: { name: "Motor", price: 10.00 }, quantity: 10 },
    { product: { name: "Sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];

export function calcInventoryValue(inventory: Inventory[]): void {
    let sum = 0;

    for (const inventoryItem of inventory) {
        sum += (inventoryItem.product.price * inventoryItem.quantity);
    }
    console.log(`Inventory value is ${sum}`);
}