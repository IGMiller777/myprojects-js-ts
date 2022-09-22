// import { BuilderDom } from "../service/builder";
import { Aside } from "./aside/aside";
import { Products } from "./rightside/productside"
import './main.css'
export class Main {
    main: HTMLElement;
    aside: string | Node | undefined;
    productsSide: string | Node | undefined;

    constructor() {
        this.main = document.createElement('main');
        this.main.classList.add('main');
    }
    createMain() {
        this.aside = this.createAside();
        this.productsSide = this.createProducts();
        this.main.append(this.aside);
        this.main.append(this.productsSide);
    }
    createAside() {
        const asideApp: Aside = new Aside();
        asideApp.createAsidePart();
        return asideApp.aside;
    }

    createProducts() {
        const productSide = new Products();
        productSide.createProdList();
        return productSide.productSide;
    }
}