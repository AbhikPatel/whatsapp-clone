import { Component, OnInit } from '@angular/core';
import { WhatsappService } from '../whatsapp.service';

@Component({
  selector: 'app-whatsapp-container',
  templateUrl: './whatsapp-container.component.html'
})
export class WhatsappContainerComponent implements OnInit {

  constructor(
    private _service: WhatsappService
  ) { }

  ngOnInit(): void {
  }

}
