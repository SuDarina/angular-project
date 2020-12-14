import {AfterViewInit, Component, OnInit} from '@angular/core';
import {GraphicComponent} from '../graphic/graphic.component';
import {migrateLegacyGlobalConfig} from '@angular/cli/utilities/config';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  canvasName: string;
  formName: string;
  constructor() { }

  ngOnInit(): void {
    this.formName = 'Show';
    this.canvasName = 'Show';
  }

  clickButton(): void{
    console.log('Send is clicked!');
    const table = document.getElementsByTagName('table').item(0);
    const row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = 'ujoiiuh';
    row.insertCell(1).innerHTML = 'ujoiiuh';
    row.insertCell(2).innerHTML = 'ujoiiuh';
    row.insertCell(3).innerHTML = 'ujoiiuh';
  }
  click(id: string): void{
    // document.getElementById('form').setAttribute('style', 'display: block');
    const form = document.getElementById(id);
    if (form.style.display === 'none' || form.style.display === '') {
      console.log(form.style.display);
      form.style.display = 'block';
      if (id === 'canvas') {
        this.canvasName = 'Hide';
      } else {
        this.formName = 'Hide';
      }
    } else{
      form.style.display = 'none';
      if (id === 'canvas') {
        this.canvasName = 'Show';
      } else {
        this.formName = 'Show';
      }
    }
    console.log('clicked');
    // if (id === 'canvas' && this.canvasName === 'Show'){
    //  this.canvasName = 'Hide';
    // } else {
    //   if (id === 'canvas' && this.canvasName === 'Hide') {
    //     this.canvasName = 'Show';
    //   }
    // }
    // if (id === 'form' && this.formName === 'Show'){
    //   this.formName = 'Hide';
    // } else {
    //   if (id === 'form' && this.formName === 'Hide') {
    //     this.formName = 'Show';
    //   }
    // }
  }
}

