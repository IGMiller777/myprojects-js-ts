export interface IJsonData {
    id: number,
    fullname: string | number,
    price: string,
    level: string,
    year: number,
    color: string,
    rating: string
}

export interface IFilteredData { 
    year: string | number,
    color: string,
    price: string
}
