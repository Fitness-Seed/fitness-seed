import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkWithFitnessSeedComponent } from './work-with-fitness-seed.component';

describe('WorkWithFitnessSeedComponent', () => {
  let component: WorkWithFitnessSeedComponent;
  let fixture: ComponentFixture<WorkWithFitnessSeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithFitnessSeedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkWithFitnessSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
