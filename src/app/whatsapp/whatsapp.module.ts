import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsappRoutingModule } from './whatsapp-routing.module';
import { WhatsappContainerComponent } from './whatsapp-container/whatsapp-container.component';
import { WhatsappPresentationComponent } from './whatsapp-container/whatsapp-presentation/whatsapp-presentation.component';
import { ChatHeaderPresentationComponent } from './whatsapp-container/whatsapp-presentation/chat-header-presentation/chat-header-presentation.component';
import { ChatPresentationComponent } from './whatsapp-container/whatsapp-presentation/chat-presentation/chat-presentation.component';
import { WhatsappService } from './whatsapp.service';


@NgModule({
  declarations: [
    WhatsappContainerComponent,
    WhatsappPresentationComponent,
    ChatHeaderPresentationComponent,
    ChatPresentationComponent
  ],
  imports: [
    CommonModule,
    WhatsappRoutingModule
  ],
  providers:[
    WhatsappService
  ]
})
export class WhatsappModule { }
