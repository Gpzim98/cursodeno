import { GlobalSettings } from "./global_settings.ts";

export class DenoServer
{
    globalSettings : GlobalSettings;

    constructor()
    {
        this.globalSettings = GlobalSettings.GetInstance();
    }
}