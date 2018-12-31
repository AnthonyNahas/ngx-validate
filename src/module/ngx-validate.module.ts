import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {NgxValidate} from './service/ngx-validate.service';

// Export module's public API
export {NgxValidate} from './service/ngx-validate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: []
})
export class NgxValidateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxValidateModule,
      providers: [NgxValidate]
    };
  }
}
