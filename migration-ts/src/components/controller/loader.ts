/* eslint-disable no-unused-vars */
import { NewsData } from '../../types/interfaces-news';
import { ResourcesData } from '../../types/interfaces-sources';
enum Errors { 
    UnauthorizedError = 401,
    NotFound = 404
}

interface IForOptions{ 
    [key:string]: string;
}

class Loader {

    baseLink: string;
    options: IForOptions

    constructor(baseLink: string, options: IForOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    protected getResp(

        {endpoint, options = {}}: {endpoint:string, options?: IForOptions} ,
        callback: (data: ResourcesData & NewsData) => void = () => { 
            console.error('No callback for GET response') }
            ): void 
            {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === Errors.UnauthorizedError || res.status === Errors.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Record<string, number>, endpoint:string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    // eslint-disable-next-line no-unused-vars
    private load(method: string, endpoint: string, callback: (data: ResourcesData & NewsData) => void, options = {}) {
        fetch(this.makeUrl (options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
