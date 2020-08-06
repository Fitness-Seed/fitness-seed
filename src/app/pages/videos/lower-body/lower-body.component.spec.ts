import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LowerBodyComponent } from './lower-body.component';

describe('LowerBodyComponent', () => {
  let component: LowerBodyComponent;
  let fixture: ComponentFixture<LowerBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowerBodyComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LowerBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
