import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenruPrincipalComponent } from './menru-principal.component';

describe('MenruPrincipalComponent', () => {
  let component: MenruPrincipalComponent;
  let fixture: ComponentFixture<MenruPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenruPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenruPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
