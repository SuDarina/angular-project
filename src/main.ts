import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {GraphicComponent} from './app/components/graphic/graphic.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// tslint:disable-next-line:only-arrow-functions
// window.addEventListener('resize', function(): void{
//   const but = document.getElementById('hiddenButton');
//   const form = document.getElementById('form');
//   if (but.style.display === '' && form.style.display === 'none'){
//     form.style.display = 'block';
//     console.log('work!');
//   }
//   console.log(but.style.display);
//   console.log( form.style.display);
// });

// tslint:disable-next-line:only-arrow-functions
window.addEventListener('resize', function(): void{
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
  // const gc = new GraphicComponent();
  // gc.drawCanvas(1);
});
