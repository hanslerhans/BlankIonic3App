import { Component, OnInit } from "@angular/core";
import { Misc as msc } from "../../common/Misc";
import { SettingsProvider } from "../../providers/settings/settings";
import { AppPreferences } from '@ionic-native/app-preferences';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Platform } from 'ionic-angular';


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

    constructor(
        private settingsPrvd: SettingsProvider,
        private appPrefs: AppPreferences,
        private batteryStatus: BatteryStatus,
        private plt: Platform
        ) { }

    // update settings provider if any UI element changes
    anyUIChanged(){
        //console.log(anyUIChanged!!);
        let actualSettings: msc.Settings = this.settingsPrvd.getSettings();
        actualSettings.altitudeUnit = this.altitude.selection;
        actualSettings.distanceUnit = this.distance.selection;
        actualSettings.showADSBtraffic = this.showADSB.selection;
        actualSettings.showFLARMTraffic = this.showFLARM.selection;
        actualSettings.showACStraffic = this.showACS.selection;
        this.settingsPrvd.changeSettingsTo(actualSettings);
    }

    onShowPref() {
        var promShow: Promise<any> = this.appPrefs.show().then( 
            (value: any) => {
                console.log("show then");
                console.log("value=" + value);
            } );
        promShow.catch(
            (value: any) => {
                console.log("show catch");
                console.log("value=" + value);
        } );
    }

    onTestSave() {
        var promStore:Promise<any> = this.appPrefs.store('param1','param1',"test value").then(
            (value:any) => {
                console.log("store then");
                console.log("value=" + value);
            }
        );
        promStore.catch( () => {console.log("store rejected!")}  );
        
    }

    onTestGet() {
        var promFetch:Promise<any> = this.appPrefs.fetch('param1').then(
            (value:any) => {
                console.log("fetch then");
                console.log("value=" + value);

            }
        );
        promFetch.catch( (error:any) => {  
            console.log("fetch rejected!");
            console.log(error);
        }  );
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

        // watch change in battery status
        const subscription = this.batteryStatus.onChange().subscribe(status => {
            console.log("battery plugin fired:");
            console.log(status.level, status.isPlugged);
        });

        let promPlt = this.plt.ready();
        promPlt.then(()=>{console.log("platform then")});
        promPlt.catch(()=>{console.log("platform catch")});


 

    }
   

}