import { Directive, EventEmitter,  Host, OnDestroy,  OnInit, Output } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSelectCellText]'
})
export class SelectCellTextDirective implements OnInit, OnDestroy {
  private subscription: Subscription;
  private grid: DxDataGridComponent;

  constructor(@Host() grid: DxDataGridComponent) { 
    this.grid = grid
  }


  ngOnInit(): void {
    this.subscription = this.grid.onEditorPreparing.subscribe((x: any) => {
      this.onEditorPrepared(x);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onEditorPrepared(e: any) {
    if (e.parentType === 'dataRow') {
      e.editorOptions.onFocusIn = function(args: any) {
        args.element.querySelector('input.dx-texteditor-input').select();
      };}
  }
}