import { Component } from '@angular/core';
import { NavController, DateTime,NavParams } from 'ionic-angular';
import { IfStmt } from '@angular/compiler';
import { DatePipe, DOCUMENT, getLocaleMonthNames } from '@angular/common';
import { daysInMonth, parseDate } from 'ionic-angular/util/datetime-util';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import moment from 'moment';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

numberA;
numberB;
numberN;
numberH;
numberT;
numberP;
numberO;
datef;
datett;
dated1;
dated2;
timeDiff;
DaysDiff;
typeOfAction;
result;
resultvat;
typeOfDateYear;
typeOfDateMonth;
typeOfDateDay;
date1;
date2;

  constructor(public navCtrl: NavController) {

  }

  

performFunction(type){

var d1 = parseFloat (this.dated1);   
var d2 = parseFloat (this.dated2);  
var a = parseFloat  (this.numberA);
var b = parseFloat  (this.numberB);
var n = parseFloat  (this.numberN);
var h = parseFloat  (this.numberH);
var t = parseFloat  (this.numberT);
var p = parseFloat  (this.numberP);
var o = parseFloat  (this.numberO);
var f = parseInt    (this.datef);
var tt = parseInt   (this.datett);
var de1 = parseFloat  (this.date1);
var de2 = parseFloat  (this.date2);


var date1 = moment("DD-MM-YYYY");
var date2 = moment("DD-MM-YYYY"); 
let duration = moment.duration(date1.diff(date2));
let days = duration.asDays();



if(type =='a'){

this.typeOfAction = 
(b+h+t+o) || (b+h+t) || (b+h+o) || (b+o) || (b+t+o) || (b+h) || (b+t) || (h+t+o) ||  (h+t) ||(h+o) || (t+o)  ||  (t) || (o) || (b) ||
(h)  

//this.result=a-a*(b/100)


this.typeOfDateYear = de2 -de1

this.typeOfDateMonth = this.typeOfDateYear / (24* 3600* 1000)

}
}
}

