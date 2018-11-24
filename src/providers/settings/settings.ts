import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Misc as msc } from "../../common/Misc";

@Injectable()
export class SettingsProvider {
  
  // observable property
  private _settings = new BehaviorSubject<msc.Settings>(new msc.Settings());
  public settings = this._settings.asObservable();

  // method to modifiy observable property
  changeSettingsTo(newval: msc.Settings) {
    //console.log("changeSettingsTo");
    this._settings.next(newval);
  };

  getSettings():msc.Settings {
    return this._settings.getValue();
  }

}
