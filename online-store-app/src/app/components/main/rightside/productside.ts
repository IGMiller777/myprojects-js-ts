import { IJsonData } from '../../../interface';

import './productside.css'
export class Products {
    productSide: HTMLDivElement;
    productTitle: HTMLDivElement;
    productCards: HTMLDivElement;

    getProductsArr: Array <IJsonData>;
    productArrSorted: Array <IJsonData>;

    constructor() {
        this.productSide = document.createElement('div');
        this.productSide.classList.add('product-side');

        this.productTitle = document.createElement('div');
        this.productTitle.classList.add('product-title');

        this.productCards = document.createElement('div');
        this.productCards.classList.add('product-cards');

        this.getProductsArr = [];
        this.productArrSorted = [];
    }

    createProdList() {
        const title = this.createProdTitle() as HTMLDivElement;
        this.productSide.append(title)
    }

    createProdTitle() {
        this.productTitle.innerHTML = ` 
        <div class="title">
            <h2>MSI PS Series (20)</h2>
            <div class="sort-form">

            <select class="sort-fil" id="sort-name">
                <option value="none">Sort by Name:</span> None</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            <select class="sort-fil" id="sort-year">
                <option value="none">Sort by Year: None</option>
                <option value="newer">Newer</option>
                <option value="older">Older</option>
            </select>
            </div>
        </div>
        `
        return this.productTitle;
    }
}