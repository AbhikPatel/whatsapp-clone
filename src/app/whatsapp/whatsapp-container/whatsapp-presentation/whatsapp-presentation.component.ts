import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WhatsappPresenterService } from '../whatsapp-presenter/whatsapp-presenter.service';

@Component({
  selector: 'app-whatsapp-presentation',
  templateUrl: './whatsapp-presentation.component.html',
  viewProviders:[WhatsappPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class WhatsappPresentationComponent implements OnInit {

  constructor(
    private _service:WhatsappPresenterService
  ) { }

  ngOnInit(): void {
  }

}
