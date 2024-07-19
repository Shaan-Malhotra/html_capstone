export interface Product {
    name: string;
    price: number;
}
export const products: Product[] = [
    { name: "SmartPhone", price: 100 },
    { name: "Laptop", price: 300 },
    { name: "Mouse Pad", price: 50 }
];

export function calcAverageProductPrice(products: Product[]): void {
    let average = 0;
    let sum = 0;
    let count = 0;

    for (const product of products) {
        sum += product.price;
        count++;
    }
    average = sum / count;
    console.log(`average price is ${average}`);
}