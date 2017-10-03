import { Injectable } from '@angular/core';
import { User } from './user';
import { find } from 'lodash';

@Injectable()
export class UsersService {

  users: User[] = [
    {
      id: 1,
      name: 'Martin',
      pixels: 100
    },
    {
      id: 5,
      name: 'Lars',
      pixels: 200
    },
    {
      id: 3,
      name: 'Ivo',
      pixels: 22150
    }
  ];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  fetchUser(id: number): User {
    return find(this.users, {id});
  }
}
