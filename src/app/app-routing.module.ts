import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyResultsComponent } from './company-results/company-results.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { OfficerListComponent } from './officer-list/officer-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanySearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'company-detail',
    component: CompanyDetailsComponent
  },
  {
    path: 'company-results',
    component: CompanyResultsComponent
  },
  {
    path: 'officer-list',
    component: OfficerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
