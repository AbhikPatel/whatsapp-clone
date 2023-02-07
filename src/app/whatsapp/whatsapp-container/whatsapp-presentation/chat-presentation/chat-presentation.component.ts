import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Chat } from 'src/app/shared/model/user.model';
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
  }
  public get chats(): Chat[] {
    return this._chats;
  }

  @Output() public emitMessage: EventEmitter<Chat>;
  private _chats: Chat[];
  public chatGroup: FormGroup;

  @ViewChild('goToBottom')public content!: ElementRef;

  constructor(
    private _service: ChatPresenterService,
  ) {
    this._chats = [];
    this.chatGroup = this._service.getGroup();
    this.emitMessage = new EventEmitter();
  }

  ngOnChanges(){
    this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
  }

  ngOnInit(): void {
    this._service.message$.subscribe((items) => this.emitMessage.emit(items))
  }

  public onSubmit() {
    if (this.chatGroup.valid)
      this._service.getMessage(this.chatGroup.value);
    this.chatGroup.reset();
    // let time = new Date();
    // console.log(time);
  }

}
