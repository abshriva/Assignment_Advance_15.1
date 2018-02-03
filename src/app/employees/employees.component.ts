import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';


/**
 * 
 * 
 * @export
 * @class EmployeesComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  //providers:[EmployeeService,EmployeeDropDownService]

})

export class EmployeesComponent implements OnInit {

  //employees: Employee[];
  //empdetail:Employee;
  //employee:Employee = new Employee();

  /**
   * Creates an instance of EmployeesComponent.
   * @param {EmployeeService} employeService 
   * @memberof EmployeesComponent
   */
  //constructor(private employeService: EmployeeService) { }
  constructor(){}


  ngOnInit() {
    //this.employees = this.employeService.getEmployees();
    
  }
}
