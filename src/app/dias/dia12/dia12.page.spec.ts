import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia12Page } from './dia12.page';

describe('Dia12Page', () => {
  let component: Dia12Page;
  let fixture: ComponentFixture<Dia12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
