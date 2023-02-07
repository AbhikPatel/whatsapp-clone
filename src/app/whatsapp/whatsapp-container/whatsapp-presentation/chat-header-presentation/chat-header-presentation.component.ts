import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChatHeaderPresenterService } from '../chat-header-presenter/chat-header-presenter.service';

@Component({
  selector: 'app-chat-header-presentation',
  templateUrl: './chat-header-presentation.component.html',
  viewProviders:[ChatHeaderPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChatHeaderPresentationComponent implements OnInit {

  constructor(
    private _service:ChatHeaderPresenterService
  ) { }

  ngOnInit(): void {
  }

}
