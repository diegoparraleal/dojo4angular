# DOJO4ANGULAR

## INTRODUCTION

### GOAL
Show easily how to create a new angular 4 app using angular-cli, including SASS, I18N, and fully optimized for production and IE9+

### PREREQUISITES
- NodeJS (I have 6.x version)
- NPM (I have 3.8.7 version)
- Typescript (I have 2.2.1)
- Install dotnet core sdk (https://www.microsoft.com/net/core#windowscmd) to run the server service
- Visual studio Code (or favorite editor)
- Visual studio code cool extensions (_actually I have a lot installed, I don't know exactly who does the magic_)
	- language-vscode-javascript-angular2
	- angular-cli
	- Angular v4 TypeScript Snippets
	- Auto Import
	- Angular Support
	- Angular 4 and TypeScript/HTML VS Code Snippets
	- TypeScript Importer
	- and more ... 
- *OPTIONAL* CONEMU, nice CLI tool
- Google chrome or canary 

### *OPTIONAL* How to create a quick service using dotnet core and visual studio code

- Download dotnet CORE SDK https://www.microsoft.com/net/core#windowscmd Note: I'm running 1.0.3 version
- Download and install Visual Studio Code https://code.visualstudio.com/Download
- Install C#, extension (Inside VSCodedotnet)
- Run in console dotnet new webapi dotnet restore (to download dependencies) dotnet build (to compile)
- Edit Controllers, in the way you want
- Run the app In this this case ... dotnet run browse http://localhost:5000/api/items


### PREVIOUS STEPS (Instructions for Windows Users)
- Open a cmd window (_With CONEMU_)
- Clone the repository
> `git clone https://github.com/diegoparraleal/dojo4angular.git --branch dojo`
- Install angular/cli (globally)
> `npm install -g @angular/cli`
> `cd dojo4angular`
> `cd dojo4angular.server`
> `dotnet restore`
> `dotnet run`
- Navigate to service in chrome
	http://localhost:5000/api/items

## DOJO STEPS

### STEP 1 - Creating the project
- Open a new cmd window 
- Go to repository
- Create a project
> `ng new dojo4angular.client --skip-git --skip-commit --style scss --routing`
- Run the application
> `cd dojo4angular.client`
> `ng serve`

### STEP 2 - Adding routes and components
- Add two components
> `ng g component items`
> `ng g component users`
- Modify *app-routing.module.ts*
```javascript
...
import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];
...
```
- Modify *app.component.html*
``` html
<h1>
  {{title}}
</h1>
<content>
  <router-outlet></router-outlet>
</content>
<footer>
  <a [routerLink]="[ '/items']">Items</a>
  <a [routerLink]="[ '/users']">Users</a>
</footer>
```

### STEP 3 - Add a service
- Add a single service
> `ng g service services/items`
- Provide the service in app.module.ts
``` javascript
...
import { ItemsService } from './services/items.service';
...
providers: [*ItemsService*],
...
```
- Implement the service using async/await (_Dont'forgetto add toPromise operator *import "rxjs/add/operator/toPromise";*_)
``` javascript
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/add/operator/toPromise";

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  public async getItems(){
      var response = await this.http.get("/api/items").toPromise();
      return response.json();
  }
}
```

- Call the service in items.component.ts
``` javascript
import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  private items = [];
  constructor(private itemsService: ItemsService) { }

  async ngOnInit() {
    this.items = await this.itemsService.getItems();
  }

}
```

- Modify template items.component.html, in order ro render the items
``` html
<item *ngFor="let item of items">{{item}}</item>
```

- There is an error, because we are using a custom tag, and angular chacks that HTML is well-formed, to disable this we can go to app.module.ts and modify
``` javascript
...
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
...
bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
...
```

- Right now the app is rendering, but the service does not exist, since we are using different ports; in a real environment we will deploy back and front to a single webapp (if we use Azure), to workaround this, we can create a file named proxy.conf.json, and add the following json

``` javascript
{
  "/api/*": {
     "target": "http://localhost:5000",
     "secure": false     
  }
}
```

- Restart the server, using the following command
> `ng serve --proxy-config proxy.conf.json`

### STEP 4 - Add styles, images and fonts
- Add a font (_you can find the font in ./dependencies/fonts_)
- Copy the fonts and images folder from *./dependencies* to *assets* folder
- Modify styles.scss to add global styles, and import font stylesheet
``` css
/* You can add global styles to this file, and also import other style files */
@font-face {
  font-family: "nautilus";
  font-style: normal;
  font-weight: 600;
  src: url('~assets/fonts/nautilus/nautilus-webfont.woff2') format('woff2'),
       url('~assets/fonts/nautilus/nautilus-webfont.woff') format('woff'),
       url('~assets/fonts/nautilus/nautilus-webfont.ttf') format('truetype');
}

*{
    font-family: "nautilus";
}

html, body{
    position: relative;
    width: 100%;
    height: 100%;    
    padding: 0;
    margin: 0;
}
```
- Create a file under src, named variables.scss and add the following code
``` css
$color1: lightsteelblue;
$color2: steelblue;
```

- Modify users.component.html to add an image
``` html
<p>
  This is Diego's Car
  <img class="usercar" />
</p>
```

- Modify users.component.scss to add some styles
``` css
@import "~variables.scss";
:host{
    position: relative;
    width: 100%;
    height: 100%;    

    p{
        width: 100%;
        height: 100%;
        font-size: 48px;
        text-align: center;
        color: $color2;
    }

    .usercar{
        width: 50%;
        height: 85%;
        background: url("~assets/images/renault4.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        margin-left: 25%;
        border: 2px solid $color1;
        border-radius: 10px;
    }     
}
```

- Modify also app.component.scss to add some nice styles
``` css
@import "~variables.scss";
:host{
    position: relative;
    width: 100%;
    height: 100%;    
    
    h1{
        text-align: center;
        font-size: 59px;
        margin: 0;
        color: $color2;
        background: $color1;
        padding: 10px;
    }
    
    content{
        position: relative;
        display: block;
        width: 100%;
        height: 70%;        
    }

    footer{
        text-align: center;
        font-size: 25px;
        margin: 0;
        color: $color2;
        background: $color1;
        padding: 10px;
        display: block;

        a{
            margin-right: 20px;
        }
    }
}
```

- Modify items.component.scss to add some nice styles
``` css
@import "~variables.scss";
:host{
    position: relative;
    width: 100%;
    height: 100%;    
    padding: 50px;

    item{
        display: block;
        width: 20%;    
        height: 200px;    
        background-color: $color1;
        color: $color2;
        border-radius: 10px;
        display: inline-block;
        margin: 20px 50px 20px 0px;
        font-size: 35px;
        text-align: center;
        line-height: 200px;
    }
}
```