import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopticAlphabetPage } from './coptic-alphabet.page';

describe('CopticAlphabetPage', () => {
  let component: CopticAlphabetPage;
  let fixture: ComponentFixture<CopticAlphabetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopticAlphabetPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CopticAlphabetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
