import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/components/master/master.component';

const routes: Routes = [
  {
    path:'',
    component:MasterComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('./whatsapp/whatsapp.module').then(m => m.WhatsappModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
