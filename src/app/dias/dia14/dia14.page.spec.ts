import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dia14Page } from './dia14.page';

describe('Dia14Page', () => {
  let component: Dia14Page;
  let fixture: ComponentFixture<Dia14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dia14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dia14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
