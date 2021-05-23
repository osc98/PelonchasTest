import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia9Page } from './dia9.page';

describe('Dia9Page', () => {
  let component: Dia9Page;
  let fixture: ComponentFixture<Dia9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
