import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia6Page } from './dia6.page';

describe('Dia6Page', () => {
  let component: Dia6Page;
  let fixture: ComponentFixture<Dia6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
