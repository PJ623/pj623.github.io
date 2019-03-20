const makeCollection = function makeCollection(CSSClass) {
    const collectionElement = document.createElement("div");

    if (!CSSClass) {
        CSSClass = "collection";
    }

    collectionElement.className = CSSClass;

    collectionElement.add = function (entry) {
        collectionElement.appendChild(entry);
    }
    collectionElement.addAll = function (entries) {
        entries.forEach(function (entry) { collectionElement.add(entry); });
    }

    return Object.freeze(collectionElement);
}