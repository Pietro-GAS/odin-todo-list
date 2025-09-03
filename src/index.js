import "./css/default.css";
import { loadDOM } from "./scripts/DOMfunctions.js";
import { initialiseLogic } from "./scripts/logic.js";

const main = (() => {
    document.addEventListener("DOMContentLoaded", () =>{
        initialiseLogic(); // to be developed
        loadDOM();
    });
})();