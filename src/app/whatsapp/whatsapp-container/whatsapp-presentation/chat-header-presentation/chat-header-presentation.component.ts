import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { UserChat } from 'src/app/shared/model/user.model';
import { ChatHeaderPresenterService } from '../chat-header-presenter/chat-header-presenter.service';

@Component({
  selector: 'app-chat-header-presentation',
  templateUrl: './chat-header-presentation.component.html',
  viewProviders:[ChatHeaderPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChatHeaderPresentationComponent implements OnInit {

  @Input() public set getUser(v : UserChat | null) {
    this._getUser = v;
  }

  public get getUser() : UserChat | null {
    return this._getUser;
  }
  
  private _getUser : UserChat | null;
  constructor(
    private _service:ChatHeaderPresenterService
  ) { 
    this._getUser = null;
  }

  ngOnInit(): void {
  }

}
