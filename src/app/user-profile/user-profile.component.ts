import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  
  displayAge : boolean = true;

  afficherAge() {
    if (this.displayAge === true){
      this.displayAge=false
    }else{
      this.displayAge=true
    }
  }


}
