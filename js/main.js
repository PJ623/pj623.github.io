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

// Makes images viewable in modal.
function makeClickableImage(ele) {
    ele.onclick = myModal.show.bind(null, ele);
    ele.style.cursor = "pointer";
}

// Timing style for desktop CSS animations
if (window.matchMedia("(min-width: 768px)").matches) {
    setTimeout(() => {
        const sectionLinks = document.querySelector("section a");
        if (sectionLinks.length > 1) {
            Array.from(sectionLinks).forEach((a) => {
                a.style.cursor = "pointer";
            });
        } else {
            sectionLinks.style.cursor = "pointer";
        }
    }, 3500);

    setTimeout(() => {
        const collectionImages = projectCollection.getElementsByTagName("img");
        if (collectionImages.length > 1) {
            Array.from(collectionImages).forEach(makeClickableImage);
        } else {
            makeClickableImage(collectionImages);
        }
    }, 3600);

    setTimeout(() => {
        const collectionLinks = projectCollection.getElementsByTagName("a");
        if (collectionLinks.length > 1) {
            Array.from(collectionLinks).forEach((a) => {
                a.style.cursor = "pointer";
            });
        } else {
            collectionLinks.style.cursor = "pointer";
        }
    }, 3600);
} else {
    console.log("mobile");
    // clean up redundant code later
    const sectionLinks = document.querySelector("section a");
    if (sectionLinks.length > 1) {
        Array.from(sectionLinks).forEach((a) => {
            a.style.cursor = "pointer";
        });
    } else {
        sectionLinks.style.cursor = "pointer";
    }

    const collectionLinks = projectCollection.getElementsByTagName("a");
    if (collectionLinks.length > 1) {
        Array.from(collectionLinks).forEach((a) => {
            a.style.cursor = "pointer";
        });
    } else {
        collectionLinks.style.cursor = "pointer";
    }

    const collectionImages = projectCollection.getElementsByTagName("img");
    if (collectionImages.length > 1) {
        Array.from(collectionImages).forEach(makeClickableImage);
    } else {
        makeClickableImage(collectionImages);
    }
}