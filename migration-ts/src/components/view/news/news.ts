/* eslint-disable no-unused-vars */
import './news.css';
import { IForNewsData } from '../../../types/interfaces-news';

class News {
    public draw(data: Required<IForNewsData[]>) {
        const news:IForNewsData[] = data.length >= 10 ? data.filter((_item: IForNewsData, idx: number) => { 
            idx < 10
        }): data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IForNewsData , idx: number ) => {
                const newsClone = newsItemTemp.content.cloneNode(true) as Document;

                if (idx % 2) { 
                    const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
                    if (newsItem) { 
                        newsItem.classList.add('alt');
                    }
                }
                const newsMetaPh = newsClone.querySelector('.news__meta-photo') as HTMLElement;
                    if (newsMetaPh) { 
                        newsMetaPh.style.backgroundImage = `url(${
                            item.urlToImage || 'img/news_placeholder.jpg'
                        })`;
                    }
                const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
                    if (newsMetaAuthor) { 
                        newsMetaAuthor.textContent = item.author || item.source.name;
                    }

                const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement
                    if (newsMetaDate) { 
                        newsMetaDate.textContent = item.publishedAt
                            .slice(0, 10)
                            .split('-')
                            .reverse()
                            .join('-');
                    }

                const newsDecritionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
                    if (newsDecritionTitle) { 
                        newsDecritionTitle.textContent = item.title;
                    }
                const newsDecritionSourse = newsClone.querySelector('.news__description-source') as HTMLElement;
                    if (newsDecritionSourse) { 
                        newsDecritionSourse.textContent = item.source.name;
                    }
                
                const newsDecritionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
                    if (newsDecritionContent) { 
                        newsDecritionContent.textContent = item.description;
                    }
                
                const newsDecritionMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
                    if (newsDecritionMore) {
                        newsDecritionMore.setAttribute('href', item.url);
                 }
    
                fragment.append(newsClone);
        });

        const newsDOM =  document.querySelector('.news') as HTMLElement;
        if (newsDOM !== null) {
            newsDOM.innerHTML = '';
            newsDOM.appendChild(fragment);
        }
    }
}

export default News;
