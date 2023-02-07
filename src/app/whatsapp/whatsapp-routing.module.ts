import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhatsappContainerComponent } from './whatsapp-container/whatsapp-container.component';

const routes: Routes = [
  {
    path:'',
    component:WhatsappContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatsappRoutingModule { }
