import { Component, OnInit,Input } from '@angular/core';
import {Keyword} from '../models/keyword.model';
import {KeywordService} from '../services/keyword.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.css']
})
export class KeywordComponent implements OnInit {
@Input() keyword:Keyword;
  constructor(private keywordService:KeywordService,
    private activateRoute:ActivatedRoute,
    private myRoute:Router) { }

  ngOnInit() {
  }
  Redirect()
{
  this.myRoute.navigateByUrl('/DisplayImage');
}
}
