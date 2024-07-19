"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventory_1 = require("./inventory");
var mountain_1 = require("./mountain");
var product_1 = require("./product");
(0, mountain_1.findNameOfTallestMountain)(mountain_1.mountains);
(0, product_1.calcAverageProductPrice)(product_1.products);
(0, inventory_1.calcInventoryValue)(inventory_1.inventory);
