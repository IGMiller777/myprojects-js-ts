import './filters.css'
export class Filters {
    filters: HTMLDivElement;

    constructor() {
        this.filters = document.createElement('div');
        this.filters.classList.add('filters');
    }

    createFilters() {
        this.filters.innerHTML = ` 
        <div class="filter">
        <h2>Filters</h2>
        <button type="submit" class= "button-f1" id = "clear" >Clear filter</button>
        <div class="year">
            <h3 class="title-f" >Year Output</h3>
            <select class = "sort-fil-as" id = "year-sel">
                <option value="all">All</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
        </div>
        <div class="price">
            <h3 class="title-f">Price range</h3>
            <select class = "sort-fil-as" id = "price-sel">
                <option value="all">All</option>
                <option value="low">300$ - 600$</option>
                <option value="medium">600$ - 900$</option>
                <option value="high">900$ - 1300$</option>
            </select>
        </div>
        <div class="color">
            <h3 class="title-f">Color</h3>
            <select class = "sort-fil-as" id = "color-sel">
                <option value="all">All</option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="grey">Grey</option>
            </select>
        </div>
        <div class="brands">
        <h3>Brands</h3>
        <button type="submit" class= "button-f1">All brands</button>
        <div class="brand-item">
        </div>
            </div>
            <div class="bill-board"></div>
            </div>
        `;
        return this.filters
    }
}