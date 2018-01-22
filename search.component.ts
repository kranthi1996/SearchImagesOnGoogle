import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  myForm:FormGroup;
  constructor(private activateRoute:ActivatedRoute,
    private myRoute:Router) { 
      this.myForm = new FormGroup({
       search:new FormControl('',[Validators.required,Validators.minLength(6)]),
       
        
       })
    }
    get search(){
      return this.myForm.get('search');
    }
    
      ngOnInit() {
       
         
        }
        
        gotoReg(){
          
           
          this.myRoute.navigateByUrl('/keyword');
          
        } 
      }

  
