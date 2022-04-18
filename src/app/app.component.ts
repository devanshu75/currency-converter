import { Component, OnInit } from '@angular/core';
import { ConverterService } from './services/converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public amount:number = 1;
  public data:any;
  public valueFrom:any = 'usd';
  public valueTo:any = 'inr';
  public result:any;
  public constructor(private converterService: ConverterService) {}

  ngOnInit(): void {
  
  }

  convertCurrency(){
    
    this.converterService.convert(this.valueFrom,this.valueTo).subscribe(data => {
      this.data = Object.entries(data).map(x => x[1])
      this.valueFrom = Object.entries(this.data[4]).map(x => x[1])[0]
      this.valueTo = Object.entries(this.data[4]).map(x => x[1])[1]
      this.result = (this.amount * (this.valueTo/this.valueFrom))
      console.log(this.result)
    });
  }

}
