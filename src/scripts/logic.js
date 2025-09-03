const projects = ["New Project"];

function initialiseLogic() {
    // to be developed
}

function newProject(project) {
    projects.push(project);
}

function editProject(oldProject, newProject) {
    const index = projects.indexOf(oldProject);
    projects[index] = newProject;
}

function deleteProject(project) {
    const index = projects.indexOf(project);
    if (index > -1) {
        projects.splice(index, 1);
    };
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

export { initialiseLogic, projects, newProject, editProject, deleteProject, Task }