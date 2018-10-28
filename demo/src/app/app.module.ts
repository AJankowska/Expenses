import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExpensesComponent } from './expenses/expenses.component';
import { SavingsComponent } from './savings/savings.component';
import { IncomeComponent } from './income/income.component';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { BlankComponent } from './blank/blank.component';
import {ProgressBarModule} from "angular-progress-bar";
import {SearchTerm} from './pipes/searchTerm';
import {Unnecessary} from './pipes/unnecessary';
import {SearchPriceChE} from './pipes/searchPriceChE';
import {SearchPriceFE} from './pipes/searchPriceFE';
import {NotAchieved} from './pipes/notachieved';
import {SearchTermS} from './pipes/searchTermS';
const appRoutes: Routes =[
{path:'expenses', component: ExpensesComponent},
{path:'income', component:IncomeComponent},
{path:'savings', component:SavingsComponent},
{path:'history', component: HistoryComponent},
{path:'**', component: BlankComponent}
]
@NgModule({
  declarations: [ 
    AppComponent,
    ExpensesComponent,
    SavingsComponent,
    IncomeComponent,
    HistoryComponent,
    BlankComponent,
    Unnecessary,SearchTerm,SearchPriceChE,SearchPriceFE,NotAchieved, SearchTermS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ProgressBarModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
