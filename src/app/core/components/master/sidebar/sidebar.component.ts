import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Chat, UserChat } from 'src/app/shared/model/user.model';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  public users: UserChat[];
  public currentId: number;

  constructor(
    private _service: CommonService,
  ) {
    this.users = [];
    this.currentId = 1;
  }

  ngOnInit(): void {
    this._service.getAllUserChats().subscribe((items: UserChat[]) => this.users = items);
    this._service.userId.subscribe((items) => this.currentId = items)
    this._service.changesOnSidebar.subscribe(() => this._service.getAllUserChats().subscribe((items: UserChat[]) => this.users = items))
  }

  public getLastMessage(data: Chat[]) {
    let lastMessage = data[data.length - 1];
    return lastMessage.content
  }

  public onUser(id: number) {
    this._service.userId.next(id);
    let data = JSON.stringify(id)
    localStorage.setItem('id', data)
    this._service.getAllUserChats().subscribe((items: UserChat[]) => this.users = items);
  }

  public getNewMessages(chats: Chat[]) {
    let newMessages = chats.filter((items) => items.newMessage === true)
    return newMessages.length
  }
}