import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Add imports
import {User} from '../../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [  // Add employee object
    {
      id: 1,
      name: 'Jane',
      role: 'Designer',
      dob: new Date("12-12-2000")
    },
    {
      id: 2,
      name: 'Bob',
      role: 'Developer',
      dob: new Date("12-12-2000")
    },
    {
      id: 4,
      name: 'Jim',
      role: 'Developer',
      dob:new Date("12-12-2000")
    },
    {
      id: 5,
      name: 'Adam',
      role: 'Designer',
      dob: new Date("12-12-2000")
    }
  ];

  constructor() { }
  all(): Observable<Array<object>> {
    return of(this.users);
  }

  addNewUser(user:User): Observable<object> {
    this.users.push(user);
    return of(user);
  }

  removeUser(index: number): Observable<object>{
    let user = this.users.splice(index,1);
    return of(user);
  }

  findOne(id: number): Observable<object> {
    const user = this.users.find((u: any) => {
      return u.id === id;
    });
    return of(user);
  }
}

