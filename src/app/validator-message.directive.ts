import { Directive, Input, OnInit, Host } from '@angular/core';'devextreme-angular';
import { DxiValidationRuleComponent } from 'devextreme-angular/ui/nested';

@Directive({
  selector: '[appValidatorMessage]'
})
export class ValidatorMessageDirective implements OnInit {
  @Input() fieldName: string
  private rule: DxiValidationRuleComponent;

  constructor(@Host() rule: DxiValidationRuleComponent) {
    this.rule = rule;
   }

  public ngOnInit(): void {
    this.rule.message = this.getMessage();
  }

  private getMessage(): string {
    let message: string;
    console.log(this.rule)
    switch(this.rule?.type) { 
      case 'required': { 
          message = `${this.fieldName} is required'`;
          break; 
      } 
      case 'stringLength': { 
          if (this.rule.min && this.rule.max) {
            message = `${this.fieldName} must be between ${this.rule.min} and ${this.rule.max} characters`
          }
          if (!this.rule.min && this.rule.max) {
            message = `${this.fieldName} must be less than ${this.rule.max} characters`
          }
          if (this.rule.min && !this.rule.max) {
            message = `${this.fieldName} must be greater than ${this.rule.min} characters`
          }
          break; 
      } 
      default: { 
          break; 
      } 
    }
    return message;
  }

}