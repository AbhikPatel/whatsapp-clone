import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserChat } from 'src/app/shared/model/user.model';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-whatsapp-container',
  templateUrl: './whatsapp-container.component.html'
})
export class WhatsappContainerComponent implements OnInit {

  public getChatsData:Observable<UserChat>

  constructor(
    private _service: CommonService
  ) { 
    this.getChatsData = new Observable();
  }

  ngOnInit(): void {
    this._service.userId.subscribe((number) => this.getChatsData = this._service.getUserChats(number))
  }

  public getNewMessage(data:UserChat){
    this._service.upDateChat(data.id, data).subscribe()
  }
}
