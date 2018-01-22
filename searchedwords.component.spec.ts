import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedwordsComponent } from './searchedwords.component';

describe('SearchedwordsComponent', () => {
  let component: SearchedwordsComponent;
  let fixture: ComponentFixture<SearchedwordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedwordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedwordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
