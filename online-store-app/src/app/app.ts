import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { RenderData } from "./render-data";
import { BasketForm } from "./basket";
import { Searching } from "./search";
export class App {
    app: HTMLElement;
    header!: void; 
    main!: void;
    footer!: void;

    constructor() {
        this.app = document.createElement('div');   
        this.app.classList.add('wrapper-app');
    }

    createApp(root: Element | null) {
        this.createHeaderApp();
        this.createMainApp();
        this.createFooterApp();
        if(root !== null) { 
            root.append(this.app);
        }
        const render: RenderData = new RenderData();
        render.renderData();
        const bascket: BasketForm = new BasketForm();
        bascket.createBasket();
        const search: Searching = new Searching();
        search.searchData();
    }

    createHeaderApp() {
        const headerPart: Header = new Header();
        this.header = headerPart.createHeader();
        this.app.append(headerPart.header);
    }

    createMainApp() {
        const main: Main = new Main();
        this.main = main.createMain();
        this.app.append(main.main);
    }

    createFooterApp() {
        const footer: Footer = new Footer();
        this.footer = footer.createFooter();
        this.app.append(footer.footer);
    }
}

