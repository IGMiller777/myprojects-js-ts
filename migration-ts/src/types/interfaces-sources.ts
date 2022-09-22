export interface IForResourcesData{
    id:string;
    name: string;
    description:string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ResourcesData {
    status: string;
    sources: IForResourcesData[]
}


