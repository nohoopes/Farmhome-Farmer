import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { OrderComponent } from './order/order.component';
import { AgriculturalComponent } from './agricultural/agricultural.component';
import { HistoryComponent } from './history/history.component';
import { SettingComponent } from './setting/setting.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgriculturalCardComponent } from './components/agricultural-card/agricultural-card.component';
import { AgriculturalAddFormComponent } from './components/agricultural-add-form/agricultural-add-form.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { OrderTableComponent } from './components/order-table/order-table.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { FarmerSettingFormComponent } from './components/farmer-setting-form/farmer-setting-form.component';
import { DiscussFormComponent } from './components/discuss-form/discuss-form.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    OrderComponent,
    AgriculturalComponent,
    HistoryComponent,
    SettingComponent,
    WeatherComponent,
    AgriculturalCardComponent,
    AgriculturalAddFormComponent,
    DatePickerComponent,
    LoginComponent,
    RegisterComponent,
    HistoryTableComponent,
    OrderTableComponent,
    DashboardCardComponent,
    FarmerSettingFormComponent,
    DiscussFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
