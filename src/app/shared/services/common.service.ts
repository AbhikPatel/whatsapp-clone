import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserChat } from '../model/user.model';

@Injectable()

export class CommonService {

  public api: string = 'http://localhost:3000';
  public userId: BehaviorSubject<number>;
  public changesOnSidebar: BehaviorSubject<boolean>;

  constructor(
    private _http: HttpClient
  ) {
    let number = localStorage.getItem('id')
    number ? this.userId = new BehaviorSubject(JSON.parse(number)) : this.userId = new BehaviorSubject(1);
    this.changesOnSidebar = new BehaviorSubject(false);
  }

  public getAllUserChats(): Observable<UserChat[]> {
    return this._http.get<UserChat[]>(`${this.api}/users`)
  }

  public getUserChats(id: number): Observable<UserChat> {
    return this._http.get<UserChat>(`${this.api}/users/${id}`)
  }

  public upDateChat(id: number, data: UserChat): Observable<UserChat> {
    return this._http.put<UserChat>(`${this.api}/users/${id}`, data)
  }
}
