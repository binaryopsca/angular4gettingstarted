import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '@angular/material';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CardsampleComponent } from './cardsample/cardsample.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        CardsampleComponent
      ],
      imports: [
        AppRoutingModule,
        MaterialModule,
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  
});
