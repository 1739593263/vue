import {name,sum} from "./export.js";
import {clas} from "./export.js";
import {func} from "./export.js";

console.log(name);
console.log(sum);

const c = new clas();
c.run()

console.log(func(100, 1));



import * as imp from "./export.js";

console.log(imp.name);
console.log(imp.sum);
console.log(imp.func(1, 2));
new imp.clas().run();