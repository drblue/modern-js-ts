import "./style.css";
import lol, { divide as divideNumbers, multiply } from "./math";
import superheroes from "./people";

console.log(multiply(6, 7));  // 42

console.log(divideNumbers(10, 2));

console.log("My super-hero friends:", superheroes);

console.log("lol:", lol(1335, 7));
