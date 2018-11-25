import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Misc as msc} from "../../common/Misc"

@Component({
  selector: 'single-selector',
  templateUrl: 'single-selector.html'
})


export class SingleSelectorComponent {

  // input representing whole selector object
  @Input() selectorObject: msc.SingleSelector<any>;

  // input representing selection property of selector object
  // this is a workaround, because change detection of whole selector object does not work!
  @Input()
  set selection(value:any) {
    //console.log("selectorObject.selection: setter");
    this._localSelection = value;
  }
  get selection():any {return this._selection};
  private _selection: any;

  // event without information to update service in parent component
  @Output() onChange = new EventEmitter<void>()
 
  // internal property to be set and read by two way binding
  private _localSelection: string;
  set localSelection(newval: string){
    //console.log("single selector setter");
    this.selectorObject.selection = newval; // obviously, the selector object is propagated back to parent component
    this.onChange.emit();
  }
  get localSelection():string {
    return this._localSelection
  }


}
