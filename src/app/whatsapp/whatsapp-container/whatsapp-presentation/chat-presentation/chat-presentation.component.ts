import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chat, UserChat } from 'src/app/shared/model/user.model';
import { ChatPresenterService } from '../chat-presenter/chat-presenter.service';

@Component({
  selector: 'app-chat-presentation',
  templateUrl: './chat-presentation.component.html',
  viewProviders: [ChatPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPresentationComponent implements OnInit {

  @Input() public set chats(v: Chat[]) {
    this._chats = v;
    if (v[0]?.content === "Send your message by selecting one user")
      this.show = true
    else
      this.show = false
  }
  public get chats(): Chat[] {
    return this._chats;
  }

  @Input() public set usersData(v: UserChat[] | null) {
    this._usersData = v;
  }

  public get usersData(): UserChat[] | null {
    return this._usersData;
  }

  @Output() public emitMessage: EventEmitter<Chat>;
  private _usersData: UserChat[] | null;
  private _chats: Chat[];
  public chatGroup: FormGroup;
  public show: boolean;

  @ViewChild('goToBottom') public content!: ElementRef;

  constructor(
    private _service: ChatPresenterService,
  ) {
    this._chats = [];
    this._usersData = [];
    this.chatGroup = this._service.getGroup();
    this.emitMessage = new EventEmitter();
    this.show = false
  }

  public ngAfterViewChecked() {
    this.scrollToBottom();
  }

  public scrollToBottom(): void {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }

  ngOnInit(): void {
    this._service.message$.subscribe((items) => this.emitMessage.emit(items));
  }

  public onSubmit() {
    if (this.show === false && this.chatGroup.valid) {
      this._service.getMessage(this.chatGroup.value);
      this.chatGroup.reset();
    }

    if (this.show === true && this.chatGroup.value.sender && this.chatGroup.valid) {
      this._service.getClientMessage(this.chatGroup.value);
      this.chatGroup.controls['content'].setValue('')
    }

  }

}
