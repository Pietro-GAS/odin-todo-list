//DOM manipulation
import { newProject, editProject, deleteProject, ProjectList } from "./logic.js"
import { loadProjects, saveProjects, clearProjects } from "./storage.js";

let myProjectsData = loadProjects();
const myProjects = new ProjectList(myProjectsData.projects);

export function loadDOM() {
    const body = document.querySelector("body");
    
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");
    body.appendChild(sidebar);

    const projectHeader = document.createElement("h1");
    projectHeader.textContent = "Projects";
    projectHeader.setAttribute("id", "project-header");
    sidebar.appendChild(projectHeader);

    const projectSection = document.createElement("div");
    projectSection.setAttribute("id", "project-section");
    sidebar.appendChild(projectSection);

    const btnNewProject = document.createElement("button");
    btnNewProject.setAttribute("class", "new-item");
    btnNewProject.setAttribute("id", "new-project");
    btnNewProject.textContent = "New Project";
    btnNewProject.addEventListener("click", () => {
        newProject(myProjects, "test");
        listProjects();
        console.log(myProjects); // for testing
    })
    sidebar.appendChild(btnNewProject);

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    main.textContent = "Main";
    body.appendChild(main);

    const btnNewTask = document.createElement("button");
    btnNewTask.setAttribute("class", "new-item");
    btnNewTask.setAttribute("id", "new-task");
    btnNewTask.textContent = "New Task";
    btnNewTask.addEventListener("click", () => {
        console.log("New task created"); // for testing
    })
    main.appendChild(btnNewTask);

    listProjects();

    function listProjects() {
        projectSection.replaceChildren();
        for (let i = 0; i < myProjects.getProjects().length; i++) {
            const project = document.createElement("div");
            project.textContent = myProjects.getProjects()[i];
            project.setAttribute("class", "project-item");
            projectSection.appendChild(project);
        }
    }
}

