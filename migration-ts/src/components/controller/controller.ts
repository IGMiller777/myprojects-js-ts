/* eslint-disable no-unused-vars */
import AppLoader from './appLoader';
import { IResponseAPI } from '../../types/for-response';
import { IResponseSources } from '../../types/for-response-sources';

class AppController extends AppLoader {
    public getSources(
        callback: ((data: IResponseSources) => void)
        ): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: IResponseAPI) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                break;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
