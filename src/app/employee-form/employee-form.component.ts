

import { Employee } from '../models/Employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';
import { CommonFunction } from '../common';
import { Router,ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../services/can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { AppError } from '../app-error/App-error';


/**
 * 
 * 
 * @export
 * @class EmployeeFormComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
  
})


export class EmployeeFormComponent implements OnInit {

  employee:Employee = new Employee();
  employeeType: EmployeeType[] = [];

  /**
   * Creates an instance of EmployeeFormComponent.
   * @param {EmployeeService} employeeService 
   * @param {EmployeeDropDownService} empDropDownService 
   * @memberof EmployeeFormComponent
   */
  constructor(private employeeService: EmployeeService,
    private empDropDownService: EmployeeDropDownService,
  private router:Router,
  private route: ActivatedRoute) { }

  ngOnInit() {

    this.employee={
      id:null,
      name:'',
      age:null,
      title:'',
      dob: new CommonFunction().getCurrentDate()
    }
    /* this.route.data.subscribe((data: any) => {
       this.employeeType = data.employeeType;
     });
     */
      this.empDropDownService.getEmployeeType().subscribe(
        (employeeType:EmployeeType[]) => {
          console.log('Employee Title returned from the server:',employeeType);
          this.employeeType = employeeType;
        },
        (error:AppError)=>{
          console.log('Error came while fetching employeeTitle details: ',error.OriginalError.statusText)
        }
    
      )

  }
  
  /**
   * 
   * 
   * @param {any} values 
   * @memberof EmployeeFormComponent
   */
  onSave(values)
  {
    this.employee={
      id:values.id,
      name:values.name,
      age:values.age,
      dob:values.dob,
      title:values.employeeType,
     
    };
    
    //this.employeeService.createEmployee(this.employee);
    //this.router.navigate(['/employeeList'])
    this.employeeService.createEmployee(this.employee).subscribe(
    (newEmp: Employee)=>{
      console.log('New Employee Added Successfully');
      console.log('Employee: ', newEmp);
      this.router.navigate(['/employeeList'])
    }),
    (error:AppError)=>{
      console.log('Error came while fetching employe details: ',error.OriginalError.statusText)
    }
    

  }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean  {
    if (this.employee.id !== null||
        this.employee.name !== ''||
        this.employee.age !== null ||
        this.employee.dob !== ''||
        this.employee.title !=='') {
        return confirm('Do you want to discard the changes?');
    }
    else{
    return true;
    }
  }
  
    /**Reset a form */
    // resetForm(f) {
    //   f.reset();
    // };
   

}
