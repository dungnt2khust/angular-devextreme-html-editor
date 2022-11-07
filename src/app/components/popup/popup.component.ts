import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  private _showPopup: boolean;
  @Input() 
  get showPopup(): boolean {
    return this._showPopup;
  }
  set showPopup(val: boolean) {
    console.log("value changed")
    this._showPopup = val;
  }

  @Output() dialogOpenedChange = new EventEmitter<boolean>();

  public text: string;
  
  constructor() { }

  ngOnInit() {
  }

  public closeDialog() {
    this.showPopup = false;
    this.dialogOpenedChange.emit(false);
  }

}