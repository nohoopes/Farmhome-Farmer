import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgriculturalComponent } from './agricultural/agricultural.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { SettingComponent } from './setting/setting.component';
import { WeatherComponent } from './weather/weather.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'agricultural', component: AgriculturalComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
