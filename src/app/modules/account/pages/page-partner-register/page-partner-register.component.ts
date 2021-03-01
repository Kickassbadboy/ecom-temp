import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-partner-register',
  templateUrl: './page-partner-register.component.html',
  styleUrls: ['./page-partner-register.component.scss']
})
export class PagePartnerRegisterComponent  {

  constructor(private fb:FormBuilder) { }

  get first(){
      return this.registrationForm.get('first');
    }

  get last(){
      return this.registrationForm.get('last');
    }  

  get mail(){
      return this.registrationForm.get('mail');
    }  
  
  get PW(){
      return this.registrationForm.get('PW');
    }

  get RPW(){
      return this.registrationForm.get('RPW');
    }


  registrationForm = this.fb.group({
      first:['',[Validators.required]],
      last:['',[Validators.required]],
      mail : ['',[Validators.required,Validators.email]],
      PW : ['',[Validators.required,Validators.minLength(5)]],
      RPW : ['',[Validators.required,Validators.minLength(5)]]
  });
  onSubmit(){
     if ( this.registrationForm.value.PW != this.registrationForm.value.RPW  ) {
      alert("Please enter same password");
     }
      else  if(this.registrationForm.value.mail=''){
      alert("Please enter your email address");
     }

     else {
          console.log(this.registrationForm.value);
         
     }
      
  }
}
