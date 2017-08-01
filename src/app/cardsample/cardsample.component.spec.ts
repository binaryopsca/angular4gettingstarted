import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { CardsampleComponent } from './cardsample.component';

describe('CardsampleComponent', () => {
  let component: CardsampleComponent;
  let fixture: ComponentFixture<CardsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsampleComponent ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
