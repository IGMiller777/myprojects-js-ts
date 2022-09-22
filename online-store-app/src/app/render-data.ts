import productList from '../assets/info.json'
import { IJsonData } from './interface';
import { IFilteredData } from './interface';
export class RenderData {
    items;
    filtersData:IFilteredData = {
        year: '',
        color: '',
        price: ''
    };
    
    productCards: HTMLDivElement;
    getProductsArr: IJsonData[];
    constructor() {
        this.items = document.querySelectorAll('.item-product');
        this.getProductsArr = [];
        this.productCards = document.createElement('div');
        this.productCards.classList.add('product-cards');
    }
    renderData() {
        const products:IJsonData[]= this.getData();
        const productside = document.querySelector('.product-side') as Element;
        const prodCards = this.createProdCards(products) as HTMLDivElement;
        productside.append(prodCards);
        this.filters();
    }

    getData() { 
        const prodL: IJsonData[] = JSON.parse(JSON.stringify(productList));
        for (let l = 0; l < prodL.length; l++) {
            this.getProductsArr.push(prodL[l])
        }            
        return this.getProductsArr; 
    }

    applyfilters() { 
        const productsA:IJsonData[] = this.getProductsArr
            .filter((item: IJsonData) => { 
                if(this.filtersData.year){ 

                    if(this.filtersData.year ==='all'){ 
                        return item.year;
                    }
                    return +item.year === +this.filtersData.year;
                }
                else { 
                    return true;
                }
            })
            .filter((item: IJsonData) => { 
                if(this.filtersData.color){ 
                    if(this.filtersData.color === 'all'){ 
                        return item.color;
                    }
                    return item.color === this.filtersData.color
                }
                else { 
                    return true;
                }
            })
            .filter((item: IJsonData) => { 
                if(this.filtersData.price){ 
                    if(this.filtersData.price === 'all'){ 
                        return item.price
                    }
                    return item.level === this.filtersData.price
                }
                else { 
                    return true;
                }
            })
            
            console.log("PROD", productsA);

        this.createProdCards(productsA);
        this.sortingData(productsA)
    }

    filters() { 
        const yearSelect = document.getElementById('year-sel') as HTMLInputElement;
        const colorSelect = document.getElementById('color-sel') as HTMLInputElement;
        const priceSelect = document.getElementById('price-sel') as HTMLInputElement;
        const buttonReset: Element | null = document.querySelector('.button-f1');
        buttonReset?.addEventListener('click', function() { 
            filters.year = 'all';
            yearSelect.value = 'all';
            filters.color = 'all';
            colorSelect.value = 'all';
            filters.price = 'all';
            priceSelect.value = 'all';
            window.localStorage.clear();
            applyFilters();
        });
        
        const filters: IFilteredData = this.filtersData;

        const applyFilters = () => { 
            return this.applyfilters();
        }
        const localStorData = () => { 
            const dataYear: string | null = window.localStorage.getItem('year');
            const dataColor: string | null = window.localStorage.getItem('color');
            const dataPrice: string | null = window.localStorage.getItem('price');

            if(dataYear !== null) { 
                this.filtersData.year = dataYear;
                yearSelect.value = dataYear;
                applyFilters();
            }
            if(dataColor !== null) { 
                this.filtersData.color = dataColor;
                colorSelect.value = dataColor;
                applyFilters();
            }
            if(dataPrice !== null) { 
                this.filtersData.price = dataPrice;
                priceSelect.value = dataPrice;
                applyFilters();
            }
        }
        localStorData()
        this.sortingData(this.getProductsArr)

        yearSelect?.addEventListener('change', function() { 
            const currentYear = this.value; 
            window.localStorage.setItem('year', currentYear)
            filters.year = this.value;
            applyFilters();
        })
        colorSelect?.addEventListener('change', function() { 
            const currentColor = this.value; 
            window.localStorage.setItem('color', currentColor)
            filters.color = this.value;
            applyFilters();
        })
        priceSelect?.addEventListener('change', function() { 
            const currentPrice = this.value; 
            window.localStorage.setItem('price', currentPrice)
            filters.price = this.value;
            applyFilters();
        })
    }

    createProdCards(currentProducts: IJsonData[]) {  
        this.productCards.innerHTML = '';
        currentProducts.forEach((elem: IJsonData, ind: number) => {
            const productItem = document.createElement('div') as HTMLElement;
            productItem.classList.add('item-product');
            productItem.classList.add('sort-name');
            productItem.innerHTML = ` 
                <div class="head-st">
                    <div class="stock"></div>
                    <div class="basketMain"></div>
                </div>
                <div class="comp">
                <img src="assets/icons/${ind}.svg" alt="cards-${ind}" class = "icon-prod">
                </div>
                <div class="rating">${elem.rating}</div>
                <h3 class="name-product">${elem.fullname}</h3>
                <p class="color-prod all block ${elem.color}">${elem.color}</p>
                <p class="price-prod all block ${elem.level}">${elem.price}</p>
                <p class="year-prod all block ${elem.year}">${elem.year}</p>
            `;
            this.productCards.append(productItem);
        })
        return this.productCards;
    }

    sortingData(currentProducts: IJsonData[]) {    
        const nameSort = document.getElementById('sort-name') as HTMLInputElement;
        const yearSort = document.getElementById('sort-year') as HTMLInputElement;
        yearSort.value = 'none';
        nameSort.value = 'none';
        const createProdCar = (cards: IJsonData[]) => { 
            return this.createProdCards(cards);
        }


        const localStorageNameSort = () => { 
            const nameSortM: string | null = window.localStorage.getItem('SortName');
            const yearSortM: string | null = window.localStorage.getItem('SortYear');
            if(nameSortM !== null){ 
                nameSort.value = nameSortM;
                sortName(window.localStorage.getItem('SortName'))
            }
            if(yearSortM !== null){ 
                yearSort.value = yearSortM;
                sortYear(window.localStorage.getItem('SortYear'))
            }
        } 
        localStorageNameSort();

        nameSort?.addEventListener('change', function () { 
            sortName(this.value)
        })
        function sortName(valueCur: string | null | undefined) { 
            let sortedNameAZ: IJsonData[];
            if (valueCur == 'A-Z') {
                window.localStorage.setItem('SortName', valueCur);           
                console.log(currentProducts);
                sortedNameAZ  = currentProducts.sort((prev, next) => { 
                    if (prev.fullname < next.fullname ) {
                        return -1
                    }
                        return 1;
                    
                })
                createProdCar(sortedNameAZ)
            }
            if (valueCur == 'Z-A') {
                window.localStorage.setItem('SortName', valueCur);           
                console.log(currentProducts);
                sortedNameAZ  = currentProducts.sort((prev, next) => { 
                    if (prev.fullname > next.fullname ) { 
                        return -1;
                    }
                    return 1;
                })  
                createProdCar(sortedNameAZ)
            }
        }

        yearSort?.addEventListener('change', function() { 
            sortYear(this.value)

        })

        function sortYear(valueCur: string | null | undefined) {
            let sortedYearAZ: IJsonData[];
            if(valueCur === 'newer'){ 
                window.localStorage.setItem('SortYear', valueCur);           
                sortedYearAZ  = currentProducts.sort((prev, next) => { 
                    return next.year - prev.year
                })  
                createProdCar(sortedYearAZ)
            }
            if(valueCur === 'older'){ 
                window.localStorage.setItem('SortYear', valueCur);           
                sortedYearAZ  = currentProducts.sort((prev, next) => { 
                    return prev.year - next.year
                })  
                createProdCar(sortedYearAZ)
            }
        }
    }
}
