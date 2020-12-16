import {enableProdMode, Input} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {DataService} from './app/services/data.service';
import {MainPageComponent} from './app/components/main-page/main-page.component';

if (environment.production) {
  enableProdMode();
}
// tslint:disable-next-line:no-unused-expression label-position
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// // tslint:disable-next-line:only-arrow-functions
// window.addEventListener('resize', function(): void{
//   const mp = new MainPageComponent();
//   const but = document.getElementById('hiddenButton');
//   const canvasBut = document.getElementById('hiddenCanvas');
//   const form = document.getElementById('form');
//   const canvas = document.getElementById('canvas');
//   if (document.body.clientWidth < 700) {
//     form.style.display = 'none';
//     canvas.style.display = 'none';
//     but.style.display = 'block';
//     canvasBut.style.display = 'block';
//     // mp.dataService.formName = 'Hide';
//     // mp.dataService.canvasName = 'Hide';
//     // console.log(mp.canvasName);
//     // mp.click('canvas');
//     // mp.click('form');
//   } else {
//       form.style.display = 'block';
//       canvas.style.display = 'block';
//       but.style.display = 'none';
//       canvasBut.style.display = 'none';
//   }
// });
