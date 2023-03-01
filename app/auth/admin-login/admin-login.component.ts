import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminLoginService } from '../services/admin-login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  LoginForm!:FormGroup
  showError:boolean=false
  constructor(private fb :FormBuilder,private serv:AdminLoginService,
      private toaster:ToastrService, private rouer:Router,
      private spinner:NgxSpinnerService) { } 


      
      ngOnInit(): void {

  this.creatForm()
}
creatForm(){
  this.LoginForm=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],
     role:['admin']
  })
  
}

login(){

 this.spinner.show()
  this.serv.loginAdmin(this.LoginForm.value).subscribe((data:any)=>{
    localStorage.setItem('token' , data.token)
    this.toaster.success('Hello world!', 'Toastr fun!', {
      disableTimeOut:false,
     titleClass:"toastr_title",
     messageClass:"toastr_message",
     timeOut:1000,
     onActivateTick:false,
     toastClass:'ngx-toastr'	,
     progressBar	:true,
     easing:'ease-in',
     enableHtml	:true,
     newestOnTop:true,
     tapToDismiss:true,
     positionClass:'toast-top-right',
     closeButton:true,
  
    })
    this.spinner.hide()
    this.rouer.navigateByUrl('/home')
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
  }, error =>{
    this.showError=true
    this.toaster.error('Email Or Password Is Not Valid', '', {
      disableTimeOut:false,
     titleClass:"toastr_title",
     messageClass:"toastr_message",
     timeOut:1000,
     onActivateTick:false,
  
     toastClass:'ngx-toastr'	,
     progressBar	:true,
     easing:'ease-in',
     enableHtml	:true,
     newestOnTop:true,
     tapToDismiss:true,
     positionClass:'toast-top-right',
     closeButton:true,
  
    })
   
    let audio = new Audio
    audio.src='../../../assets/notification-sound/login.wav'
    audio.load()
    audio.play()
    this.spinner.hide()
  
    })
   
      }  

}
