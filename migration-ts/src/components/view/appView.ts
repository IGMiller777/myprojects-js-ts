import News from './news/news';
import Sources from './sources/sources';
import { IForNewsData, NewsData } from '../../types/interfaces-news';
import { IForResourcesData, ResourcesData } from '../../types/interfaces-sources';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    drawNews(data: NewsData) {
        const values = data?.articles ? data?.articles : [] as IForNewsData[];
        this.news.draw(values);

    }
    drawSources(data: ResourcesData) {
        const values = data?.sources ? data?.sources : [] as IForResourcesData[];
        
        this.sources.draw(values);
    }
}
export default AppView;
