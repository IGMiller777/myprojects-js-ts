// import { BuilderDom } from "../service/builder";
import './header.css'
export class Header {
    public header: HTMLElement;

    constructor() {
        this.header = document.createElement('header');
        this.header.classList.add('header');
    }

    public createHeader() {
        return (
        this.createFirstPart(),
        this.createSecondPart())
    }

    public createFirstPart() { 
        const firstPart = document.createElement('div') as HTMLElement;
        firstPart.classList.add('firstpart');
        firstPart.innerHTML = ` 
        <div class="time-work">
        <p class="days"> <span>Mon-Thu:</span>  9:00 AM - 5:30 PM</p>
        <p class="time">Call Us: (00) 1234 5678 </p>
        </div>`;
        return this.header.append(firstPart)
    }

    public createSecondPart() {
        const secondPart = document.createElement('div')
        secondPart.classList.add('second-part');
        const nav = document.createElement('nav')
        nav.classList.add('nav');
        nav.innerHTML = `
        <div class = "logo-m"> </div>
        <ul class= "items-h">
            <li class="item-h">LapTops</li>
            <li class="item-h">Desktop PCs</li>
            <li class="item-h">Networking Devices</li>
            <li class="item-h">Printers&Scanners</li>
            <li class="item-h">PC Parts</li>
            <li class="item-h">All Other Products</li>
        </ul>`;
        secondPart.append(nav);
        this.header.append(secondPart);

        const rightBar = document.createElement('div') as HTMLDivElement;
        rightBar.classList.add('right-bar');
        rightBar.innerHTML = ` 
        <form class="example" action="" onsubmit="return false">
            <input type = "text" placeholder="Search..." class = "searchIn" name="search" autofocus autocomplete = "off">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <div class = "backet"> </div>
        <div class = "amount"></div>
            `
        secondPart.append(rightBar);
        this.header.append(secondPart);

        const thirdPart = document.createElement('div') as HTMLDivElement;
        thirdPart.classList.add('third-part');
        this.header.append(thirdPart);
         
    }
}