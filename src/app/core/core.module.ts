import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master/master.component';
import { SidebarComponent } from './components/master/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonService } from '../shared/services/common.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers:[
    CommonService
  ]
})
export class CoreModule { }
