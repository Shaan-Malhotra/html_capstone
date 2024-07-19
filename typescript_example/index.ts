import { calcInventoryValue, inventory } from './inventory';
import { mountains, findNameOfTallestMountain } from './mountain';
import { calcAverageProductPrice, products } from './product';


findNameOfTallestMountain(mountains);
calcAverageProductPrice(products);
calcInventoryValue(inventory);