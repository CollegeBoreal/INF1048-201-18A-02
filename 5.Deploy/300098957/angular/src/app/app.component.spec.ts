import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
=======
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
>>>>>>> 931d3ea90b61dc9acb2c35a0be46f32e63b17ce7
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
<<<<<<< HEAD
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  }));
  it('should render title in a h1 tag', async(() => {
=======

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular');
  });

  it('should render title in a h1 tag', () => {
>>>>>>> 931d3ea90b61dc9acb2c35a0be46f32e63b17ce7
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular!');
<<<<<<< HEAD
  }));
=======
  });
>>>>>>> 931d3ea90b61dc9acb2c35a0be46f32e63b17ce7
});
