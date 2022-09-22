export class BasketForm { 
    createBasket() { 
        const amount = document.querySelector('.amount') as Element;
        const items = document.querySelectorAll('.item-product');
        let count = 0;
        amount.innerHTML = `${count}`;
        items.forEach((item: Element) => { 
            item.addEventListener('click', function () {
                const logoB = item.querySelector('.basketMain') as HTMLElement;
                if(count > 19) { 
                    alert('Sorry. Basket slots are full')
                }          
                else { 
                    if (item.classList.contains('bascket')) {
                        logoB.style.display = 'none';
                        amount.innerHTML = `${count = count - 1}`;
                        item.classList.remove('bascket')
        
                    }
                    else {
                        amount.innerHTML = `${count = count + 1}`;
                        item.classList.add('bascket');
                        logoB.style.display = 'block';        
                    }
                }      
            })
        })    
    }
}