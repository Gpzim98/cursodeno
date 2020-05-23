export class GlobalSettings
{
    private static INSTANCE : GlobalSettings;
    public path : string = "";
    public projectName : string = "";
    public handler : any;

    private constructor() {}

    public static GetInstance() : GlobalSettings
    {
        if(!GlobalSettings.INSTANCE)
            GlobalSettings.INSTANCE = new GlobalSettings();

        return GlobalSettings.INSTANCE;
    }

}