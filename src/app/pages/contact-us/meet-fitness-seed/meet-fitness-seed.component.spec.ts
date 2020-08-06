import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeetFitnessSeedComponent } from './meet-fitness-seed.component';

describe('MeetFitnessSeedComponent', () => {
  let component: MeetFitnessSeedComponent;
  let fixture: ComponentFixture<MeetFitnessSeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetFitnessSeedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeetFitnessSeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
