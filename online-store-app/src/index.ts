import './global.css';
import { App } from './app/app';

const root: Element | null = document.querySelector('.root');
const app: App = new App();

app.createApp(root);

