import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ClientsComponent} from './clients/clients.component';
import {HttpClientModule} from '@angular/common/http';
import {FactureComponent} from './factures/facture.component';
import {ArticlesComponent} from './articles/articles.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AcheterComponent} from "./acheter/acheter.component";
import {FormsModule} from "@angular/forms";
import {StockComponent} from './stock/stock.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'acheter',
    component: AcheterComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {path: '', pathMatch: 'full', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    FactureComponent,
    ArticlesComponent,
    AcheterComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
