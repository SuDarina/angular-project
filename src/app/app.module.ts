import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {RouterModule, Routes} from '@angular/router';
import { GraphicComponent } from './components/graphic/graphic.component';

const appRoutes: Routes = [
  {path: 'main', component: MainPageComponent},
  {path: '', component: AuthorizationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    MainPageComponent,
    GraphicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
