const makeModal = function makeModal(CSSClass) {
    const element = document.createElement("div");

    if (!CSSClass) {
        CSSClass = "modal";
    }

    element.className = CSSClass;
    element.show = function (content) {
        element.style.display = "flex";
        if (content) {
            var content = content.cloneNode(true)

            if (element.hasChildNodes) {
                Array.from(element.childNodes).forEach(
                    function (child) {
                        element.removeChild(child);
                    }
                );
            }
            element.appendChild(content);
        }
    }
    element.hide = function () {
        element.style.display = "none";
    }
    element.onclick = element.hide;
    element.hide(); // hide by default

    return Object.freeze(element);
}