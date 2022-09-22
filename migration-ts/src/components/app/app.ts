import { IResponseAPI } from '../../types/for-response';
import { IResponseSources } from '../../types/for-response-sources';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {

    readonly controller: AppController;
    readonly view: AppView; 

    constructor() {
        
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start() {

        const source = document.querySelector('.sources') as HTMLElement;
        if (source) { 
            source.addEventListener('click', (e: Event) =>  {
                this.controller.getNews(e, (data: IResponseAPI) => {  
                this.view.drawNews(data)
            })}) 
            this.controller.getSources((data: IResponseSources) => { 
                this.view.drawSources(data)
            })   
        }
    }
}

export default App;
