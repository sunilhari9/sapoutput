import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import {KeysPipe} from './pipes'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers:[KeysPipe]
})
export class IndexComponent implements OnInit {
private checkBoxOptions:any;
private documentNumber:any;
 private customername:any;
 private shipTo:any; 
  constructor() {
    this.checkBoxOptions = {
      "Item": "Item / Type",
      "UnitPricing": "Unit Pricing",
      "MFRName": "MFR NAME",
      "MFRPart": "MFR PART #",
      "ShippingPoint": "Shipping Point",
      "CustomerItem": "Customer Item Sort",
      "Tax": "Tax or no TAX",
      "ThumbnailImages": "Thumbnail images",
      "link": "Spec Sheet URL link",
      "Country": "Country of Origin",
      "LeadTime": "Lead Time",
      "LongDescription": "Long Description",
      "UNSPCS": "UNSPCS"
  };
  var keys = Object.keys(this.checkBoxOptions).sort();
  this.documentNumber = "88882322";
  this.customername = "Kolusu";
  this.shipTo = "234815";
   }

   

  ngOnInit() {
  }

}

