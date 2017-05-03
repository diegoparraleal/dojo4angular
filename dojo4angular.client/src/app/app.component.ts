import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bizagi app works!';

  constructor(private translate: TranslateService){
    translate.use('en');    
  }

  switchLang(lang){
    this.translate.use(lang); 
  }
}
