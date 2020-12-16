import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  constructor() {
  }
  canvasName: string;
  formName: string;

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
  }
  resize(): void{
    this.formName = 'Show';
    this.canvasName = 'Show';
    const but = document.getElementById('hiddenButton');
    const canvasBut = document.getElementById('hiddenCanvas');
    const form = document.getElementById('form');
    const canvas = document.getElementById('canvas');
    if (document.body.clientWidth < 700) {
      form.style.display = 'none';
      canvas.style.display = 'none';
      but.style.display = 'block';
      canvasBut.style.display = 'block';
    } else {
      form.style.display = 'block';
      canvas.style.display = 'block';
      but.style.display = 'none';
      canvasBut.style.display = 'none';
    }
  }
}
// tslint:disable-next-line:only-arrow-functions
// window.addEventListener('resize', function(): void{
//   const but = document.getElementById('hiddenButton');
//   const canvasBut = document.getElementById('hiddenCanvas');
//   const form = document.getElementById('form');
//   const canvas = document.getElementById('canvas');
//   if (document.body.clientWidth < 700) {
//     form.style.display = 'none';
//     canvas.style.display = 'none';
//     but.style.display = 'block';
//     canvasBut.style.display = 'block';
//   } else {
//     form.style.display = 'block';
//     canvas.style.display = 'block';
//     but.style.display = 'none';
//     canvasBut.style.display = 'none';
//   }
// });

