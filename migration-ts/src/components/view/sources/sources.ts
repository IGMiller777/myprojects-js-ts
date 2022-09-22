import './sources.css';
import { IForSources } from '../../../types/for-response-sources';

class Sources {
    public draw(sources: Required <IForSources[]>) {
        
        const fragment  = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        sources.forEach((item:IForSources) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            if (sourceItemTemp !== null) { 

                const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement
                sourceItemName.textContent = item.name;

                const sourceItem = sourceClone.querySelector('.source__item') as HTMLElement;
                sourceItem.setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });

        const sourses =  document.querySelector('.sources') as Element;
             if (sourses !== null) { 
            sourses.append(fragment);
        }
    }
}
export default Sources;
