import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(private _ContactService:ContactService){}

  contactForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required , Validators.minLength(3),Validators.maxLength(15)]),
    email:new FormControl(null, [Validators.required , Validators.email]),
    phone:new FormControl(null, [Validators.required,Validators.pattern(/^(010|011|012|015)[0-9]{8}$/)])
  })
  sendData(formInfo:FormGroup){
    this._ContactService.sendInfo(formInfo.value).subscribe({
      next: (response) => {
      alert("Email sent successfully");
      this.contactForm.reset();
      },
      error: (error) => {
        alert("Error occurred while sending email");
      }
    });
    
  }

}
 // sendData(formInfo:FormGroup){
  //   console.log(formInfo.value);
  // }