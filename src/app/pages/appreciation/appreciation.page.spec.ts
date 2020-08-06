import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppreciationPage } from './appreciation.page';

describe('AppreciationPage', () => {
  let component: AppreciationPage;
  let fixture: ComponentFixture<AppreciationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppreciationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppreciationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
