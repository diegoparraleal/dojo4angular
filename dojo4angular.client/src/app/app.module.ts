import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader} from 'ng2-translate';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { ItemsService } from './services/items.service';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
    })
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
