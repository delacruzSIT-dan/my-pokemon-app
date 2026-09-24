import { TestBed } from '@angular/core/testing';
import { HoennTrainers } from './hoenn-trainers';

describe('HoennTrainers', () => {
  let service: HoennTrainers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennTrainers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
