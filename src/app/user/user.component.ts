import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../model/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Array<User>;
  user: User = {
    name: "",
    email: ""
  }

  constructor(private userService: UserService) {
   
  }

  ngOnInit(): void {
   this.user
   this.userService.listUser().subscribe(resposta => this.users = resposta);
  }

  createUser(userForm):void{
    this.userService.createUser(this.user).subscribe(() =>{
      console.log("Usuario criado"); userForm.reset();
    })
  }

}
