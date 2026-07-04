// Import the arrow rest-function from another file and use it
import { multiply } from './ExportsumRest.js';

console.log('multiply(4, 5, 6) =', multiply(4, 5, 6));
console.log('multiply(...[2, 3, 4]) =', multiply(...[2, 3, 4]));
console.log('multiply(10, "2") =', multiply(10, '2'));