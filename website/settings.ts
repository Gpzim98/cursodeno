import { urls } from './urls.ts';
import { Home, Enquete } from './apps/homepage/models.ts';

export var config = {
    global_urls: urls,
    appname: 'www.meusite.com.br',
    db_setup: {
        dbname: './website.sqlite3',
        dbengine: 'sqlite3'
    },
    models_to_sync: [
        Home,
        Enquete
    ]
}