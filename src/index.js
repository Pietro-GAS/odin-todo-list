import "./css/default.css";
import { loadDOM } from "./scripts/DOMfunctions.js";

const main = (() => {
    const test = "Working properly!";
    console.log(test);
    loadDOM();
})();