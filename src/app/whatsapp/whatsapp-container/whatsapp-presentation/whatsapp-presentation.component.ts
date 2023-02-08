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
    if (v) {
      this._getChats = v;
      this.splitData(v);
    }
  }

  public get getChats(): UserChat | null {
    return this._getChats;
  }

  @Input() public set getSendersChat(v: UserChat[] | null) {
    this._getSendersChat = v;
  }
  public get getSendersChat(): UserChat[] | null {
    return this._getSendersChat;
  }


  @Output() public emitChat: EventEmitter<UserChat>;

  private _getChats: UserChat | null;
  private _getSendersChat: UserChat[] | null;
  public chatsData: Chat[];

  constructor(
    private _service: WhatsappPresenterService
  ) {
    this.chatsData = [];
    this._getChats = null;
    this._getSendersChat = [];
    this.emitChat = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public splitData(data: UserChat) {
    data.chats.map((items) => items.newMessage = false)
    this.chatsData = data.chats
    this.emitChat.emit(data)
  }

  public getMessage(data: any) {
    if (data.sender) {
      if (this.getSendersChat) {
        let currentUser = this.getSendersChat.find((items) => items.firstName === data.sender)
        currentUser?.chats.push(data);
        this.emitChat.emit(currentUser);
      }
    } else {
      if (this.getChats) {
        this.getChats.chats.push(data);
        this.emitChat.emit(this.getChats);
      }
    }
  }

}
