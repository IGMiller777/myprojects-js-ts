// import { BuilderDom } from "../service/builder";
import { Filters } from "./filters";
import './aside.css'
export class Aside {
    aside: HTMLElement;
    filters: string | Node | undefined;

    constructor() {
        this.aside = document.createElement('aside');
        this.aside.classList.add('aside');
    }

    createAsidePart() {
        const filters: Filters = new Filters();
        this.filters = filters.createFilters();
        this.aside.append(this.filters);
    }
}