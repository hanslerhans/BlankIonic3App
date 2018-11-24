import { Component, OnInit } from "@angular/core";
import { SettingsProvider } from "../../providers/settings/settings";
import { Misc as msc } from "../../common/Misc";

@Component({
    selector: "page-testpage",
    templateUrl: "TestPage.html"
})



export class TestPage implements OnInit{

    
    showAltitudeUnit: msc.AltitudeUnits;
    showDistanceUnit: msc.DistanceUnits;

    showADSB = new msc.BooleanSelector("Show ADS-B");
    showFLARM = new msc.BooleanSelector("Show FLARM");
    showACS = new msc.BooleanSelector("Show ACS");


    constructor(private settingsPrvd: SettingsProvider) {}

    // update settings provider on button press
    onClick1() {
        let actualSettings: msc.Settings =  this.settingsPrvd.getSettings();
        actualSettings.altitudeUnit = msc.AltitudeUnits.Feet;
        this.settingsPrvd.changeSettingsTo(actualSettings);
    };

    // update settings provider on button press
    onClick2() {
        let actualSettings: msc.Settings =  this.settingsPrvd.getSettings();
        actualSettings.altitudeUnit = msc.AltitudeUnits.Meters;
        this.settingsPrvd.changeSettingsTo(actualSettings);
    };

    // update settings provider if any UI element changes
    anyUIChanged(){
        //console.log("anyUIChanged!!");
        let actualSettings: msc.Settings = this.settingsPrvd.getSettings();
        actualSettings.showADSBtraffic = this.showADSB.selection;
        actualSettings.showFLARMTraffic = this.showFLARM.selection;
        actualSettings.showACStraffic = this.showACS.selection;
        this.settingsPrvd.changeSettingsTo(actualSettings);
    }


    ngOnInit(){
        // subscribe to any changes of settings
        this.settingsPrvd.settings.subscribe( 
            (x:msc.Settings):void => { 
                this.showAltitudeUnit = x.altitudeUnit;
                this.showDistanceUnit = x.distanceUnit;
                this.showADSB.selection = x.showADSBtraffic;
                this.showFLARM.selection = x.showFLARMTraffic;
                this.showACS.selection = x.showACStraffic;
                //console.log("event received in TestPage");
            }
        );
    }

}
     