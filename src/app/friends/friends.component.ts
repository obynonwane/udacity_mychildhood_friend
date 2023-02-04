import { Component, OnInit } from '@angular/core';
import { Friend } from './model/friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  title: string = 'List of my childhood friend ';
  listOfFriend: Friend[] = [];
  friendExist: boolean = false;

  ngOnInit(): void {
    this.listOfFriend = [
      {
        id: 1,
        name: 'Mamodow',
        age: 21,
        email: 'mamodow@y.com',
        friend: [{ id: 1, name: 'Mamodow', age: '21' }],
      },
      {
        id: 2,
        name: 'jacob',
        age: 23,
        email: 'jacob@g.com',
        friend: [{ id: 1, name: 'Mamodow', age: '21' }],
      },
      {
        id: 3,
        name: 'Sale',
        age: 24,
        email: 'sale@g.com',
        friend: [{ id: 1, name: 'Mamodow', age: '21' }],
      },
      {
        id: 4,
        name: 'Emma',
        age: 19,
        email: 'ema@g.com',
        friend: [{ id: 1, name: 'Mamodow', age: '21' }],
      },
      {
        id: 5,
        name: 'Saidu',
        age: 19,
        email: 'Saidu@g.com',
        friend: [{ id: 1, name: 'Mamodow', age: '21' }],
      },
    ];

    this.checkFriendExist();
  }

  checkFriendExist() {
    if (this.listOfFriend.length > 0) {
      this.friendExist = true;
    } else {
      this.friendExist = false;
    }
  }
}
