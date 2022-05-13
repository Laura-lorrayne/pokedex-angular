import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeKistComponent } from './poke-kist.component';

describe('PokeKistComponent', () => {
  let component: PokeKistComponent;
  let fixture: ComponentFixture<PokeKistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeKistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeKistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
