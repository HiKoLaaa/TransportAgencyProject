import {NgModule} from '@angular/core';
import {FormErrorComponent} from './form-error/form-error.component';
import {CommonModule} from '@angular/common';
import { ControlErrorComponent } from './control-error/control-error.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FormErrorComponent, ControlErrorComponent],
  exports: [FormErrorComponent, ControlErrorComponent]
})
export class CommonErrorModule {
}
