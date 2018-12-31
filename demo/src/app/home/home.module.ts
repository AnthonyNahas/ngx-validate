import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgxValidateModule  } from 'ngx-validate';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        NgxValidateModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
