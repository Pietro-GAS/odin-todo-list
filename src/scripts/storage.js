function saveProjects(projects) {
    localStorage.setItem("projects", projects.stringify())
}

function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"))
}

function clearProjects() {
    localStorage.clear();
}

export { saveProjects, loadProjects, clearProjects }