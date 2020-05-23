import { Home, Enquete } from './apps/homepage/models.ts';

export var config = {
    projectname: 'website',
    db_setup: {
        dbname: './website.sqlite3',
        dbengine: 'sqlite3'
    },
    models_to_sync: [
        Home,
        Enquete,
    ]
}