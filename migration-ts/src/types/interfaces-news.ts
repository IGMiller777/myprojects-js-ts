export interface IForNewsArticle { 
    id: string
    name: string
}

export interface IForNewsData{ 
    source: IForNewsArticle;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}


export interface NewsData{ 
    status: string;
    totalResults: number;
    articles: IForNewsData[];
}

