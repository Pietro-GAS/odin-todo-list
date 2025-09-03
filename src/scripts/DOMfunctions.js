//DOM manipulation
export function loadDOM() {
    const body = document.querySelector("body");
    
    const sidebar = document.createElement("div");
    sidebar.setAttribute("class", "sidebar");
    sidebar.textContent = "Sidebar";
    body.appendChild(sidebar);

    const main = document.createElement("div");
    main.setAttribute("class", "main");
    main.textContent = "Main";
    body.appendChild(main);
}