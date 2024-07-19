"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountains = void 0;
exports.findNameOfTallestMountain = findNameOfTallestMountain;
exports.mountains = [
    { name: "Killimangaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var tallestMountain = mountains[0];
    for (var _i = 0, mountains_1 = mountains; _i < mountains_1.length; _i++) {
        var mountain = mountains_1[_i];
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }
    console.log("tallest mountain is ".concat(tallestMountain.name, " which is ").concat(tallestMountain.height, " meters tall."));
}
