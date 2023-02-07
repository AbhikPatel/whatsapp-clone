import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Chat, UserChat } from 'src/app/shared/model/user.model';
import { WhatsappPresenterService } from '../whatsapp-presenter/whatsapp-presenter.service';

@Component({
  selector: 'app-whatsapp-presentation',
  templateUrl: './whatsapp-presentation.component.html',
  viewProviders: [WhatsappPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatsappPresentationComponent implements OnInit {

  @Input() public set getChats(v: UserChat | null) {
    if (v){
      this._getChats = v;
      this.splitData(v);
    }
  }

  public get getChats(): UserChat | null {
    return this._getChats;
  }

  @Output() public emitChat:EventEmitter<UserChat>;

  private _getChats: UserChat | null;
  public chatsData: Chat[];

  constructor(
    private _service: WhatsappPresenterService
  ) {
    this.chatsData = [];
    this._getChats = null;
    this.emitChat = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public splitData(data:UserChat){
    this.chatsData = data.chats
  }

  public getMessage(data:Chat){
    if(this.getChats){
      this.getChats.chats.push(data);
      this.emitChat.emit(this.getChats);
    }
  }

}
