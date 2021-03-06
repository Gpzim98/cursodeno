import { Home, Enquete, Enquete2 } from './apps/homepage/models.ts';

export var config = {
    projectname: 'website',
    db_setup: {
        dbname: './NewIntegratedDB.sqlite3',
        dbengine: 'sqlite3'
    },
    models_to_sync: [
        Home,
        Enquete,
        Enquete2,
    ],
    static_folder: 'static',
    static_url: 'http://localhost:8002/',
    media_folder: 'media'
}