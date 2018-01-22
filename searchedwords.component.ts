import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormControl} from '@angular/forms';
import{KeywordService} from '../services/keyword.service';
import{Keyword} from '../models/keyword.model';
 
@Component({
  selector: 'app-searchedwords',
  templateUrl: './searchedwords.component.html',
  styleUrls: ['./searchedwords.component.css']
})
export class SearchedwordsComponent implements OnInit {
  
  keyword:Keyword;
  myKeywordForm:FormGroup;
  constructor(private keywordService:KeywordService) {
    
    this.keyword = new Keyword("","");
    this.myKeywordForm = new FormGroup({
      keywordName: new FormControl("",[Validators.required,Validators.minLength(3)]),
      keywordId: new FormControl("",[Validators.required,Validators.min(18)]),
    }
  );
}
  get keywordName(){
    return this.myKeywordForm.get('keywordName');
  }
  get keywordId(){
    return this.myKeywordForm.get('keywordId');
  }
  addKeyword(myKeywordForm){
    this.keyword.Word= myKeywordForm.keywordName;
    this.keyword.ID= myKeywordForm.keywordId;
    
  
  }
  
  ngOnInit() {
  }

}
