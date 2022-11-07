
import { Component } from "@angular/core";

import { ExampleElement } from "../models/example-element.interface";
import { Child } from "../models/child.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  public showPopup: boolean;

  exampleDatasource: ExampleElement[] = [
    {
      father: { cod: "01", dex: "father1" },
      selectedChild: { dex: 'Mario' },
      selectableChildren: [{ dex: "Mario" }, { dex: "Luigi" }, { dex: "Wario" }]
    },
    {
      father: { cod: "02", dex: "father1" },
      selectedChild: { dex: "Red" },
      selectableChildren: [{ dex: "Red" }, { dex: "Gary" }, { dex: "Oak" }]
    },
    {
      father: { cod: "03", dex: "father1" },
      selectedChild: { dex: "Link" },
      selectableChildren: [{ dex: "Link" }, { dex: "Zelda" }]
    }
  ];


  constructor() {
    this.calculateSelectedChildDisplayValue = this.calculateSelectedChildDisplayValue.bind(this);
    this.getSelectableChildren = this.getSelectableChildren.bind(this);  
    this.selectableChildrenDisplayExpr = this.selectableChildrenDisplayExpr.bind(this);
  }

  click() {
    console.log('stuff');
    this.showPopup = true;
  }

  dialogOpenedChange(e: boolean) {
    console.log(e);
  }

  calculateSelectedChildDisplayValue(exampleElement: ExampleElement): string {
    if (exampleElement && exampleElement.selectedChild) {
      return exampleElement.selectedChild.dex;
    }

    return "";
  }

  getSelectableChildren(ev: any): Child[] {
 //    console.log('get selectable children', ev.data);

    if(ev && ev.data && ev.data.selectableChildren) {
      return ev.data.selectableChildren;
    }

    return [];
  }


  onValueChanged(e,cell){
    cell.setValue(e.value)
  }

  selectableChildrenDisplayExpr(selectableChild: Child): string {
    // console.log('selectable children display expr: ', selectableChild);

    if(selectableChild) {
      return selectableChild.dex;
    }

    return '';
  }
}
