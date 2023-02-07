import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChatPresenterService } from '../chat-presenter/chat-presenter.service';

@Component({
  selector: 'app-chat-presentation',
  templateUrl: './chat-presentation.component.html',
  viewProviders:[ChatPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChatPresentationComponent implements OnInit {

  constructor(
    private _service: ChatPresenterService
  ) { }

  ngOnInit(): void {
  }

}
