import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super ('https://newsapi.org/v2/', {
            apiKey: '73a61b7e03034db9a02e6024734d7e31', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
