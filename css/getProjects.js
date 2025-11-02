const projectsUrl = "https://github.com/Amandaintransit/Amandaintransit.github.io/blob/main/projects.html"

const projectPage = document.getElementById("get-project-page")
projectPage.addEventListener("click", displayProjectPage)


function displayProjectPage() {


fetch(projectsUrl)

.then(response => response.json())
.then(value => console.log(value))

}