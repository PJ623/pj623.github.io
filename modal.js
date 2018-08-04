class Modal {
    constructor() {
        this.modal;
    }

    bind(modal) {
        if (typeof modal == "string")
            modal = document.getElementById(modal);

        this.modal = modal;
        this.modal.addEventListener("click", this.hide.bind(this));
    }

    hide() {
        this.modal.style.display = "none";
        this.clear();
    }

    show() {
        this.modal.style.display = "flex";
    }

    insert(element) {
        let clone = element.cloneNode(true);
        this.modal.appendChild(clone);
    }

    bindElementById(element) {
        if (typeof element == "string") {
            element = document.getElementById(element);
        }

        this.bindElement(element);
    }

    bindElementsByClassName(className) {
        let elementArray = document.getElementsByClassName(className);
        for (let i = 0; i < elementArray.length; i++) {
            this.bindElement(elementArray[i]);
        }
    }

    bindElement(element) {
        element.addEventListener("click", () => {
            this.insert(element);
            this.show();
        });
    }

    clear() {
        this.modal.removeChild(this.modal.lastChild);
    }
}

let modal = new Modal();
modal.bind("modal");
modal.bindElementsByClassName("modal-target");