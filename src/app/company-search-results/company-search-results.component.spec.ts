import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySearchResultsComponent } from './company-search-results.component';

describe('CompanySearchResultsComponent', () => {
  let component: CompanySearchResultsComponent;
  let fixture: ComponentFixture<CompanySearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanySearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
