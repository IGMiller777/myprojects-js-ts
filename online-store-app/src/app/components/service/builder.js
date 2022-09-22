
export class BuilderDom {
    element;

    constructor(element, innerHTML, styles) {
        this.element = document.createElement(element)
        this.element.innerHTML = innerHTML;
        this.element.styles = styles;
    }

}