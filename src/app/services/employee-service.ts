import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';

import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../app-error/App-error';
import 'rxjs/add/operator/map'; // map called on instance
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';// throw is static method

/**
 * 
 * 
 * @export
 * @class EmployeeService
 */
@Injectable()
export class EmployeeService{
 
      
      private empList:Employee[] =[];
      private apiUrl='http://localhost:3000/employees';
    
      constructor(private http: Http){}

      /**
       * 
       * 
       * @returns {Observable<Employee[]>} 
       * @memberof EmployeeService
       */
      getEmployees(): Observable<Employee[]> 
      { 
      return this.http.get(this.apiUrl)
      .map((response:Response)=>{return response.json()})
      .catch(this.handleError);
  
      }
      
      /**
       * 
       * 
       * @param {Employee} employee 
       * @returns {Observable<Employee>} 
       * @memberof EmployeeService
       */
      createEmployee(employee: Employee): Observable<Employee>
      {
            //this.empList.unshift(employee);
            return this.http
            .post(this.apiUrl,employee)
            .map((response:Response)=>{return response.json()})
            .catch(this.handleError);
      }
      /**
       * 
       * 
       * @param {number} id 
       * @returns {Observable<Employee>} 
       * @memberof EmployeeService
       */
      deleteEmployee(id: number): Observable<Employee> {
        return this.http
          .delete(this.apiUrl + '/' + id)
          
          .map((response: Response) => response.json())
          .catch(this.handleError);
      }

      //Error Handling
      private handleError(error: Response) {
        return Observable.throw(new AppError(error));
      }
    
        
}