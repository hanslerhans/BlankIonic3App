import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export namespace Misc {


    export const enum IonSelectInterface {
        popover = "popover",
        actionSheet = "action-sheet",
        alert = "alert"
    }

    export const enum AltitudeUnits {
        Feet = "Feet",
        Meters = "Meters",
    }

    export const enum DistanceUnits {
        Miles = "Miles",
        Kilometers = "Kilometers"
    }

    export class SingleSelector<T> {

        readonly name: string;              // e.g. Altitude, Distance, ...
        readonly selectables: T[];          // array of possible options to select
        public ionInterface: IonSelectInterface;
        public selection: T;        

        constructor(name: string, selectables: T[]) {
            this.name = name;
            this.selectables = selectables;
            this.ionInterface= IonSelectInterface.alert;
        }

    }

    export class BooleanSelector {
        readonly name: string;
        public selection: boolean;

        constructor(name: string) {
            this.name = name;
        }
    }


    export class Settings {

        // following assignments define the default settings
        altitudeUnit: AltitudeUnits = AltitudeUnits.Feet;
        distanceUnit: DistanceUnits = DistanceUnits.Kilometers;
        showADSBtraffic: boolean = true;
        showFLARMTraffic: boolean = true;        
        showACStraffic: boolean = true;
    }




}