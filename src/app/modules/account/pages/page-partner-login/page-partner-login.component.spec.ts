import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartnerLoginComponent } from './page-partner-login.component';

describe('PagePartnerLoginComponent', () => {
  let component: PagePartnerLoginComponent;
  let fixture: ComponentFixture<PagePartnerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePartnerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePartnerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
