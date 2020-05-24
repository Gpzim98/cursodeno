import { Home } from './apps/home/models.ts';

export var config = {
    projectname: 'site',
    db_setup: {
        dbname: './site.sqlite3',
        dbengine: 'sqlite3'
    },
    models_to_sync: [
        Home
    ],
    static_folder: 'static',
    static_url: 'http://localhost:8002/',
    media_folder: 'media'
}