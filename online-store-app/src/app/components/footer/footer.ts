import './footer.css'
export class Footer {
    footer: HTMLElement;

    constructor() {
        this.footer = document.createElement('footer');
        this.footer.classList.add('footer');
    }

    createFooter() {
        const footWrap2 = document.createElement('div') as HTMLDivElement;
        footWrap2.classList.add('footer-wrap-2');
        footWrap2.innerHTML = ` 
            <div class="sigh-foot">
                <h3>Sign Up To Our Newsletter.</h3>
                <p>Be the first to hear about the latest offers.</p>
            </div>
            <div class="email">
                <input type="email" name="email" id="email-f" placeholder="Your Email" />
                <button type="submit" class="emeil-but">Subscribe</button>
            </div>`;
        const footWrap1 = document.createElement('div');
        footWrap1.classList.add('footer-wrap-1');
        footWrap1.innerHTML = ` 
            <p class="year-foot">2022</p>
            <a href="https://github.com/IGMiller777" class="git-hub" target="_blank"> github</a>
            <a href="https://rs.school/js/" class="link-rs">Rolling Scopes School </a>`;
        this.footer.append(footWrap2);
        this.footer.append(footWrap1);
    }
}