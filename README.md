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
`git clone https://github.com/diegoparraleal/dojo4angular.git --branch dojo`
- Install angular/cli (globally)
`npm install -g @angular/cli`
`cd dojo4angular`
`cd dojo4angular.server`
`dotnet restore`
`dotnet run`
- Navigate to service in chrome
	http://localhost:5000/api/items

## DOJO STEPS

### STEP 1 - Creating the project
- Open a new cmd window 
- Go to repository
- Create a project
`ng new dojo4angular.client --skip-git --skip-commit --style scss --routing`
- Run the application
`cd dojo4angular.client`
`ng serve`

### STEP 2 - Adding routes and components
- Add two components
`ng g component items`
`ng g component users`
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