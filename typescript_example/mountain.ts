export interface Mountain {
    name: string;
    height: number;
}
export const mountains: Mountain[] = [
    { name: "Killimangaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
export function findNameOfTallestMountain(mountains: Mountain[]): void {
    let tallestMountain = mountains[0];

    for (const mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }
    console.log(`tallest mountain is ${tallestMountain.name} which is ${tallestMountain.height} meters tall.`);
}