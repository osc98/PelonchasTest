import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia10Page } from './dia10.page';

describe('Dia10Page', () => {
  let component: Dia10Page;
  let fixture: ComponentFixture<Dia10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
