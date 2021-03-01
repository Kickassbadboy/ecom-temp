import { Component } from '@angular/core';

@Component({
    selector: 'app-page-profile',
    templateUrl: './page-profile.component.html',
    styleUrls: ['./page-profile.component.sass']
})
export class PageProfileComponent {
    constructor() { }
    
    src='./assets/images/avatars/avatar-3.jpg'
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
    
          reader.readAsDataURL(event.target.files[0]); // read file as data url
    
          reader.onload = (event:any) => { // called once readAsDataURL is completed
            this.src = event.target.result;
          }
        }
      }
}
