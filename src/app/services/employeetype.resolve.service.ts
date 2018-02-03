
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EmployeeDropDownService } from './employee-drop-dow.service';

@Injectable()
export class EmployeeTypeResolveService implements Resolve<any> {
  constructor(private _employeeDropDown:EmployeeDropDownService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('Resolve guard called');
    return this._employeeDropDown.getEmployeeType();
  }
}