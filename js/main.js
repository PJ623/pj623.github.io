const myModal = makeModal("modal");
document.body.appendChild(myModal);

function getProjects(projectsJSON) {
    const result = [];

    for (let key in projectsJSON) {
        if (projectsJSON.hasOwnProperty(key) && projectsJSON[key]) {
            result.push(projectsJSON[key]);
        }
    }

    return result;
}

function makeProjectElement(data) {
    const contentDiv = document.createElement("div");
    const titleSpan = document.createElement("span");
    const img = document.createElement("img");
    const descP = document.createElement("p");
    const linksDiv = document.createElement("div");
    
    img.src = data.image.src;
    img.alt = data.image.alt;

    titleSpan.innerText = data.title;
    descP.innerText = data.description;

    if (Array.isArray(data.links)) {
        data.links.forEach(
            function (link) {
                const anchor = document.createElement("a");
                anchor.href = link.href;
                anchor.innerText = link.text;
                anchor.target = "_blank";
                linksDiv.appendChild(anchor);
            }
        );
    }

    contentDiv.appendChild(img);
    contentDiv.appendChild(document.createElement("br"));
    contentDiv.appendChild(titleSpan);
    contentDiv.appendChild(descP);
    contentDiv.appendChild(linksDiv);

    return Object.freeze(contentDiv);
}

const projectCollection = makeCollection("collection");
document.getElementById("projects-container").appendChild(projectCollection);

var projects = getProjects(JSON.parse(document.getElementById("project-collection-data").innerHTML));
projectCollection.addAll(projects.map(function (p) { return makeProjectElement(p); }));

Array.from(projectCollection.getElementsByTagName("img")).forEach(function (ele) { ele.onclick = myModal.show.bind(null, ele) });