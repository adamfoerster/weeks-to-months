import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  form: {weeks: number, months: number} = {weeks: 1, months: 1};

  constructor(public navCtrl: NavController) {
  }

  convert(weeks) {
    if (!weeks) return null;
    switch(weeks){
      case "1":
      case "2":
      case "3":
      case "4":
        this.form['months'] = 1;
      break;
      case "5":
      case "6":
      case "7":
      case "8":
        this.form['months']=2;
      break;
      case '9':
      case '10':
      case '11':
      case '12':
        this.form['months']=3;
      break;
      case '13':
      case '14':
      case '15':
      case '16':
        this.form['months']=4;
      break;
      case '17':
      case '18':
      case '19':
      case '20':
      case '21':
        this.form['months']=5;
      break;
      case '22':
      case '23':
      case '24':
      case '25':
      case '26':
        this.form['months']=6;
      break;
      case '27':
      case '28':
      case '29':
      case '30':
        this.form['months']=7;
      break;
      case '31':
      case '32':
      case '33':
      case '34':
      case '35':
        this.form['months']=8;
      break;
      case '36':
      case '37':
      case '38':
      case '39':
      case '40':
      case '41':
      case '42':
        this.form['months']=9;
      break;
      default:
        this.form['months']=-1;
    }
  }
}
