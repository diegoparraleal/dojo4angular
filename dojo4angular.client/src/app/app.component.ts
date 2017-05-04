import { ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import {TranslateService} from 'ng2-translate';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bizagi app works!';

  constructor(private translate: TranslateService, private elementRef: ElementRef){
    translate.use('en');    
  }

  ngOnInit(){
    let element = $(this.elementRef.nativeElement);
    element.append("<label class='megalabel'>I SHOULD NOT BE HERE</label>");
    var label = $("label", element);
    label.lettering();
  }

  switchLang(lang){
    this.translate.use(lang); 
  }
}
