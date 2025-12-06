import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../types/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http=inject(HttpClient);
  currentUser=signal<User | null>(null);

  baseUrl='https://localhost:7023/api/';

  login(creds:any){
    return this.http.post(this.baseUrl+'account/login',creds);
  }
}
