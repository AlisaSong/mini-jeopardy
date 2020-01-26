import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BoardComponent } from './board.component';
import { Clue } from 'src/app/models/clue';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent],
      imports: [HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set current clue', () => {
    const clue: Clue = {
      id: 145,
      answer: 'a sonic boom',
      question: 'Shattering sound that accompanies breaking the sound barrier',
      value: 500,
      airdate: '1984-12-10T12:00:00.000Z',
      created_at: '2014-02-11T22:47:22.181Z',
      updated_at: '2014-02-11T22:47:22.181Z',
      category_id: 25,
      game_id: null,
      invalid_count: null
    };

    component.showClue(clue);
    expect(clue.picked).toBeTruthy();
  })
});
