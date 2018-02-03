import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { FormsModule } from '@angular/forms'
import { EmployeeService } from './services/employee-service';
import { EmployeeDropDownService } from './services/employee-drop-dow.service';
import { CapitalizePipe } from './pipes/capitalize-pipe';
import { SearchPipe } from './pipes/search-pipe';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { appRouting } from './routes/employee-app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardComponent } from './services/auth-guard';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { EmployeeTypeResolveService } from './services/employeetype.resolve.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeDetailComponent,
    CapitalizePipe,
    SearchPipe,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    appRouting
  ],
  providers:[EmployeeDropDownService,
    EmployeeService,
    AuthGuardComponent,
    CanDeactivateGuard,
    EmployeeTypeResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }