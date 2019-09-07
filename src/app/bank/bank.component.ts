import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
 
  public branch_name;
  public ifsc;
  public bank_id;
  public branch;
  city: FormGroup;

  constructor(private router: Router, private build: FormBuilder, private http:HttpClient) { 
  this.city = this.build.group({
    cities: new FormControl()
  });
}
  ngOnInit() {
    
  }
  mumba(values){
    
    let mumbai=this.city.get('mumbai').value;
    let body={
    "city":mumbai
    }
     this.http.post("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI ",body).subscribe(data => {
      console.log(data)
     if(mumbai == data.value.city)
     {
        this.branch_name =  data.value.branch_name;
        this.ifsc = data.value.ifsc;
        this.bank_id = data.value.bank_id;
        this.branch = data.value.branch;
        console.log(this.branch_name);
        console.log(this.ifsc);
        console.log(this.bank_id);
        console.log(this.branch);
        
     }
 });
 console.log("hello");
 
}

delh(cities){
   cities = "delhi";
  let delhi=this.city.get(cities).value;
  let body={
  "city":delhi
  }
   this.http.post("https://vast-shore-74260.herokuapp.com/banks?city=DELHI",body).subscribe(data => {
    console.log(data) 
    if(delhi == data.value.city)
     {
        this.branch_name =  data.value.branch_name;
        this.ifsc = data.value.ifsc;
        this.bank_id = data.value.bank_id;
        this.branch = data.value.branch;
        console.log(this.branch_name);
        console.log(this.ifsc);
        console.log(this.bank_id);
        console.log(this.branch);
     } 
});
return cities;
}

kolkat(cities){
  cities = "kolkata";
  let kolkata=this.city.get(cities).value;
  let body={
  "city":kolkata
  }
   this.http.post("https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA",body).subscribe(data => {
    console.log(data)  
    if(kolkata == data.value.city)
     {
        this.branch_name =  data.value.branch_name;
        this.ifsc = data.value.ifsc;
        this.bank_id = data.value.bank_id;
        this.branch = data.value.branch;
        console.log(this.branch_name);
        console.log(this.ifsc);
        console.log(this.bank_id);
        console.log(this.branch);
       
     }
});
return cities;
}

bangalor(cities){
 cities = "bangalore";
  let bangalore=this.city.get(cities).value;
  let body={
  "city":bangalore
  }
   this.http.post("https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE",body).subscribe(data => {
    console.log(data)  
    if(bangalore == data.value.city)
     {
        this.branch_name =  data.value.branch_name;
        this.ifsc = data.value.ifsc;
        this.bank_id = data.value.bank_id;
        this.branch = data.value.branch;
        console.log(this.branch_name);
        console.log(this.ifsc);
        console.log(this.bank_id);
        console.log(this.branch);
     }
     
});
return cities;
}

cuttac(cities){
   cities = "cuttack";
  let cuttack=this.city.get(cities).value;
  let body={
  "city":cuttack
  }
   this.http.post("https://vast-shore-74260.herokuapp.com/banks?city=KOLKATA",body).subscribe(data => {
    console.log(data) 
    if(cuttack == data.value.city)
     {
        this.branch_name =  data.value.branch_name;
        this.ifsc = data.value.ifsc;
        this.bank_id = data.value.bank_id;
        this.branch = data.value.branch;
        console.log(this.branch_name);
        console.log(this.ifsc);
        console.log(this.bank_id);
        console.log(this.branch);
     } 
});
return cities;
}
}

   
  
​

​
​
 