import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureByClientComponentComponent } from './voiture-by-client-component.component';

describe('VoitureByClientComponentComponent', () => {
  let component: VoitureByClientComponentComponent;
  let fixture: ComponentFixture<VoitureByClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoitureByClientComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoitureByClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
