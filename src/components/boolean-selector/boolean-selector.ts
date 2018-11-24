import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Misc as msc} from "../../common/Misc"

@Component({
  selector: 'boolean-selector',
  templateUrl: 'boolean-selector.html'
})


export class BooleanSelectorComponent implements OnInit{

  @Input() selectorObject: msc.BooleanSelector;
  @Output() onChange = new EventEmitter<void>();
  
  // property to be set and read by two way binding
  private _localSelection: boolean;
  set localSelection(newval: boolean){
    //console.log("boolean selector setter");
    this.selectorObject.selection = newval; // obviously, the selector object is propagated back to parent component
    this.onChange.emit();                   // event without information to update service in parent component
  }
  get localSelection() {return this._localSelection}

  // initialize selection
  // obviously I need this inside here, not inside constructor
  ngOnInit(){
    this._localSelection = this.selectorObject.selection;
  }

}
