import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(activatedRoute: ActivatedRoute, usersService: UsersService) {
    const userIdString: string = activatedRoute.snapshot.params['userId'];
    const userId: number = +userIdString;
    this.user = usersService.fetchUser(userId);
  }

  ngOnInit() {
  }

}
