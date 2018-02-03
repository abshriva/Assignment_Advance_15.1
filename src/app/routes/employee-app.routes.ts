import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { EmployeesComponent } from '../employees/employees.component';
import { HomeComponent } from '../home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardComponent } from '../services/auth-guard';
import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';
import { EmployeeTypeResolveService } from '../services/employeetype.resolve.service';

const appRoutes: Routes= [
    //{ path: '', redirectTo: '/employees', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path:'employees',
     component:EmployeesComponent,
     canActivate: [AuthGuardComponent],
     canDeactivate: [CanDeactivateGuard],
     resolve: { employeeType : EmployeeTypeResolveService }},
    { path: 'employees/:id', component: EmployeeDetailComponent },
    { path:'employeeList', component:EmployeeDetailComponent },
    { path:'',component:HomeComponent},
    { path:'not-found',component:NotFoundComponent},
    { path: '**', redirectTo: 'not-found' }

]

export const appRouting = RouterModule.forRoot(appRoutes);