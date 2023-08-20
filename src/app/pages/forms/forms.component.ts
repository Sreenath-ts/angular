import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  templateFormSubmit(form:NgForm){
    
     if(form.valid){
      console.log(form.value);
     }
  }

  errors : {name:{minLength:boolean},email:{email:boolean}} = {name:{minLength:false},email:{email:false}}

  constumValidator(control:AbstractControl){
  }

  form = new FormGroup({
    name: new FormControl('name',[Validators.minLength(3),Validators.maxLength(10)]),
    email : new FormControl('email',[Validators.email])
  })

  submit(){
    console.log(this.form.value,'value');
    
    if(!this.form.valid){
      console.log('hi');
      
      const nameCon = this.form.controls.name;
      const emailCon = this.form.controls.email;
      if(!nameCon.valid){
       
        console.log(nameCon.errors);
        
        if(nameCon.errors?.['minlength']){
       
          this.errors.name.minLength = true
        }
      } else if(!emailCon.valid){
        if(emailCon.errors?.['email']){
          this.errors.email.email = true
        }
      }
    }else{
    
      
      this.errors = {name:{minLength:false},email:{email:false}}
    }

  }

}
