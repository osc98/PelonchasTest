import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia13Page } from './dia13.page';

describe('Dia13Page', () => {
  let component: Dia13Page;
  let fixture: ComponentFixture<Dia13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
