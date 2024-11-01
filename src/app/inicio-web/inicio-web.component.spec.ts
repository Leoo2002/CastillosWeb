import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioWebComponent } from './inicio-web.component';

describe('InicioWebComponent', () => {
  let component: InicioWebComponent;
  let fixture: ComponentFixture<InicioWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
