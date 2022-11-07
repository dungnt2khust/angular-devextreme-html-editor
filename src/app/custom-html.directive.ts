import { ComponentRef, Directive, ElementRef, OnInit,  ViewContainerRef, ComponentFactoryResolver, HostListener } from '@angular/core';
import { PopupComponent } from './components/popup/popup.component';


@Directive({
  selector: '[appCustomHtml]'
})
export class CustomHtmlDirective implements OnInit{
  private popup: ComponentRef<PopupComponent>;
  public showPopup: boolean = false


  constructor(private elementRef: ElementRef, public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { 
    
  }

    @HostListener('click', [])
    onClick(e: any) {
      this.showPopup = true;
      // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
      // this.popup = this.viewContainerRef.createComponent<PopupComponent>(componentFactory);
      // this.popup.instance.showPopup = this.showPopup;
      // console.log(this.popup.instance);
    }
  
  ngOnInit(): void {
    this.elementRef.nativeElement.innerHTML = '<h1>hello butt face</h1>';

    
  }

}