//const projects = ["New Project"];
import { saveProjects, loadProjects, clearProjects } from "./storage.js";

function initialiseLogic() {
    // to be developed
    let myProjects;
    if (loadProjects() == null) {
      myProjects = new ProjectList(["My First Project"]);
      saveProjects(myProjects);
    } else {
      myProjects = loadProjects();
    }
    //const myProjects = new ProjectList(["New Project"]);
    return myProjects;
}

function newProject(projectList, project) {
    projectList.addProject(project);
}

function editProject(projectList, oldProject, newProject) {
    projectList.editProject(oldProject, newProject);
}

function deleteProject(projectList, project) {
    projectList.deleteProject(project);
}

function listProjects(projectList) {
  projectList.getProjects();
}

class ProjectList {
  #projects;
  constructor(projects) {
    this.#projects = projects;
  }

  getProjects() {
    return this.#projects;
  }

  setProjects(projects) {
    this.#projects = projects;
  }

  addProject(project) {
    this.#projects.push(project);
  }

  editProject(oldProject, newProject) {
    const index = this.#projects.indexOf(oldProject);
    this.#projects[index] = newProject;
  }

  deleteProject(project) {
    const index = this.#projects.indexOf(project);
    if (index > -1) {
        this.#projects.splice(index, 1);
    }
  }

  stringify() {
    return JSON.stringify({["projects"]: this.getProjects()})
  }
}

class Task {
  #title;
  #dueDate;
  #priority;
  #description;
  #project;
    constructor(title, date, priority, description, project) {
    this.#title = title;
    this.#dueDate = date;
    this.#priority = priority;
    this.#description = description;
    this.#project = project;
  }

  getTitle() {
    return this.#title;
  }

  getDueDate() {
    return this.#dueDate;
  }

  getPriority() {
    return this.#priority;
  }

  getDescription() {
    return this.#description;
  }

  getProject() {
    return this.#project;
  }

  setTitle(title) {
    this.#title = title;
  }

  setDueDate(date) {
    this.#dueDate = date;
  }

  setPriority(priority) {
    this.#priority = priority;
  }
  
  setDescription(description) {
    this.#description = description;
  }

  setProject(project) {
    this.#project = project;
  }
}

export { initialiseLogic, newProject, editProject, deleteProject, Task, ProjectList }