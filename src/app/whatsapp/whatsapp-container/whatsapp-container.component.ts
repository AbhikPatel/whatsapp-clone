import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserChat } from 'src/app/shared/model/user.model';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-whatsapp-container',
  templateUrl: './whatsapp-container.component.html'
})
export class WhatsappContainerComponent implements OnInit {

  public getChatsData$: Observable<UserChat>
  public getAllData$: Observable<UserChat[]>

  constructor(
    private _service: CommonService
  ) {
    this.getChatsData$ = new Observable();
    this.getAllData$ = new Observable();
  }

  ngOnInit(): void {
    this.props();
  }

  /**
   * @name props
   * @description This method is called in ngOnInit
  */
  public props() {
    this._service.userId.subscribe((number) => {
      this.getChatsData$ = this._service.getUserChats(number)

      if (number === 0)
        this.getAllData$ = this._service.getAllUserChats()
    })
  }

  /**
   * @name getNewMessage
   * @param data 
   * @description This method is called to call the update API
   */
  public getNewMessage(data: UserChat) {
    this._service.upDateChat(data.id, data).subscribe(() => this._service.changesOnSidebar.next(true))
  }
}
