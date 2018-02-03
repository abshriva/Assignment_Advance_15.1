
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee-service';

import { ActivatedRoute, Router } from '@angular/router';
import { AppError } from '../app-error/App-error';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger,group, keyframes } from '@angular/animations';
/**
 * 
 * 
 * @export
 * @class EmployeeDetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  animations: [
    trigger('EmployeState',
      [
        state('inactive', style({
          backgroundColor: '#fff',
          transform: 'scale(1)'
        })),
        state('active', style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('1s')),
        transition('active => inactive', animate('1s'))
      ]
    ),
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition(':leave', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
        ])
      ])
    ])

  
  ]
})

export class EmployeeDetailComponent implements OnInit {


  // @Input() empdetail;
  employee:Employee[];
  id: number;
  emp:Employee= new Employee;
  
  private searchData: string;
  public stateExpression: string;
  
  imageUrl = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';
  //employeeList: Employee;
  
  
  constructor(private employeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.searchData = '';
    //this.employee = this.employeService.getEmployees();
    this.employeService.getEmployees().subscribe(
      (newemployee:Employee[])=>{
        console.log('Employee returned from the server:',newemployee);
        this.employee=newemployee;
  
      }
    )
    this.inactiveState();
    
  }

  onDelete(employeeId) {
    if (confirm('Are you sure?')) {
      this.employeService.deleteEmployee(employeeId).subscribe(
        (emp: Employee) => {
          const index = this.employee.findIndex(
            emp => emp.id === employeeId
          );

          if (index >= 0) {
            this.employee.splice(index, 1);
          }

          console.log('Employee deleted successfully!');
        },
        (error: AppError) => {
          console.log('error:', error);
        }
      );
    }
  }

  inactiveState() { this.stateExpression = 'inactive'; }
  activeState() { this.stateExpression = 'active'; }

  mouseEnter() {
    this.activeState();
    console.log('this.stateExpression '+this.stateExpression);
  }
  mouseLeave() {
    this.inactiveState();
    console.log(this.stateExpression)
  }
 
  animationStarted(e) {
    console.log('Animation Started', e)
  }
  
  animationDone(e) {
    console.log('Animation Done', e)
  }


}