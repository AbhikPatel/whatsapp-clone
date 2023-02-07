import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './components/master/master.component';
import { SidebarComponent } from './components/master/sidebar/sidebar.component';



@NgModule({
  declarations: [
    MasterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
