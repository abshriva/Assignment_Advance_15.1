import { Injectable } from '@angular/core';
import { EmployeeType } from '../models/Employee-type';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'; // map called on instance
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';// throw is static method
import { AppError } from './../app-error/App-error';

/**
 * 
 * 
 * @export
 * @class EmployeeDropDownService
 */

@Injectable()
export class EmployeeDropDownService {

  constructor(private http: Http){}

  //'https://my-json-server.typicode.com/abshriva/Abhishek-RepoJson/employeeType'
  private apiUrl='http://localhost:3000/employeeType';

  empType: EmployeeType[] = [];

  /** Get the EMPLOYEE Type */
  getEmployeeType(): Observable<EmployeeType[]> {
    return this.http.get(this.apiUrl)
    .map((response:Response)=>{return response.json()})
    .catch((error:Response)=>{
      const appError = new AppError(error);
      return Observable.throw(appError);
    });

  }

}
