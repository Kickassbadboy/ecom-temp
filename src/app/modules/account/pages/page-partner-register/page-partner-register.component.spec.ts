import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePartnerRegisterComponent } from './page-partner-register.component';

describe('PagePartnerRegisterComponent', () => {
  let component: PagePartnerRegisterComponent;
  let fixture: ComponentFixture<PagePartnerRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePartnerRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePartnerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
