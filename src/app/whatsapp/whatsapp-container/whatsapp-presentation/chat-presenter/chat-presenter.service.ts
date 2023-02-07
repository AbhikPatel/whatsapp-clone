import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Chat } from 'src/app/shared/model/user.model';

@Injectable()

export class ChatPresenterService {

  private message:Subject<Chat>
  public message$:Observable<Chat>
  constructor(
    private _fb:FormBuilder
  ) { 
    this.message = new Subject();
    this.message$ = new Observable();
    this.message$ = this.message.asObservable();
  }

  public getGroup(){
    return this._fb.group({
      content:['', [Validators.required]]
    })
  }

  public getMessage(chat:any){
    let obj = {
      isSender:true,
      isSeen:false,
      time:null
    }
    this.message.next(Object.assign(obj,chat))
  }
}
