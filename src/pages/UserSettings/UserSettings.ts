import { Component, OnInit } from "@angular/core";
import { Misc as msc } from "../../common/Misc";
import { SettingsProvider } from "../../providers/settings/settings";

@Component({
    selector: "page-UserSettings",
    templateUrl: "UserSettings.html"
})


export class UserSettings implements OnInit {
     
    
    altitude = new msc.SingleSelector<msc.AltitudeUnits>(
        "Altitude", [msc.AltitudeUnits.Feet,msc.AltitudeUnits.Meters]);
    distance = new msc.SingleSelector<msc.DistanceUnits>(
        "Distance", [msc.DistanceUnits.Kilometers,msc.DistanceUnits.Miles]);

    showADSB = new msc.BooleanSelector("Show ADS-B");
    showFLARM = new msc.BooleanSelector("Show FLARM");
    showACS = new msc.BooleanSelector("Show ACS");

    constructor(private settingsPrvd: SettingsProvider) { }

    // update settings provider if any UI element changes
    anyUIChanged(){
        //console.log("anyUIChanged!!");
        let actualSettings: msc.Settings = this.settingsPrvd.getSettings();
        actualSettings.altitudeUnit = this.altitude.selection;
        actualSettings.distanceUnit = this.distance.selection;
        actualSettings.showADSBtraffic = this.showADSB.selection;
        actualSettings.showFLARMTraffic = this.showFLARM.selection;
        actualSettings.showACStraffic = this.showACS.selection;
        this.settingsPrvd.changeSettingsTo(actualSettings);
    }

    ngOnInit() {
        
        // update view model if settings object changes
        this.settingsPrvd.settings.subscribe(
            (x:msc.Settings):void => {
                //console.log("event received in settings page!");
                this.altitude.selection = x.altitudeUnit;
                this.distance.selection = x.distanceUnit;
                this.showADSB.selection = x.showADSBtraffic;
                this.showFLARM.selection = x.showFLARMTraffic;
                this.showACS.selection = x.showACStraffic;
            }
        );
    }
   

}