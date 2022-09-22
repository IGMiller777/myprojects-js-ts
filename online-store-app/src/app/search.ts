export class Searching { 
    searchData() {
        // eslint-disable-next-line no-undef
        const items:NodeListOf<HTMLElement> = document.querySelectorAll('.item-product');
        const input = document.querySelector('.searchIn') as HTMLInputElement;
            input.addEventListener('change', () => {
                const filter: string = input.value.toLowerCase();
                console.log(filter);
                items.forEach((item) => {
                    if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                        item.style.display = '';
                    }
                    else {
                        item.style.display = 'none';
                    }
                })
            })
    }
}