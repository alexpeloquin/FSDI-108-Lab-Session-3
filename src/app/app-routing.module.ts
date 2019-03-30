import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { InspectComponent } from './inspect/inspect.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //entry point
  {path:"",component:MainpageComponent},

  {path:"user/register", component: RegisteruserComponent  },
  {path:"user/list",component: ListuserComponent},
  {path:"user/inspect",component: InspectComponent},
  {path:"user/login",component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
