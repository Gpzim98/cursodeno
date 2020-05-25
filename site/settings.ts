import { Home, Customer } from './apps/home/models.ts';

export var config = {
    projectname: 'site',
    db_setup: {
        database: 'store',
        engine: 'postgres',
        username: 'postgres',
        password: 'deno',
        host: 'localhost',
    },
    // db_setup: {
    //     engine: 'sqlite3',
    //     database: 'sitedb3.sqlite3'
    // },
    models_to_sync: [
        Home,
        Customer
    ],
    static_folder: 'static',
    static_url: 'http://localhost:8002/',
    media_folder: 'media'
}