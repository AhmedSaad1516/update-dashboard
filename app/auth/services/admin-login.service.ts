import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }
  loginAdmin(model:any) {
    return this.http.post('https://curd-task.onrender.com/auth/login' , model)
   
}
}
