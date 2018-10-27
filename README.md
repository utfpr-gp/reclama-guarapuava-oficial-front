# ReclamaGuarapuavaOficial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Requirements

+ Angular-cli >= 6.1.x
+ Typescript >= 3.0.3
+ Node latest version
+ Json-server

## first steps

+ Run `npm i -g json-server`
+ Run `npm i` or `npm install`
+ Run `json-server --watch db.json`
+ Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project Structure

```
  app |
      | auth | --module to authentication
             | interceptor  --all request and errors interceptos                  
             | guard    --all router guards
             | service -- all services to auth
             | core.module.ts   -- imported ONLY in root module! This module are a Singleton  DO NOT import in another module
                           
      | core |             
             | interceptor  --all request and errors interceptos
             | data-service  --all services who make requests to server (where
                      | AbstractService  --all services must to extends this abstract class
             | service --all services where do not make requests to server         
             | core.module.ts   -- imported ONLY in root module! This module are a Singleton  DO NOT import in another module
            
      | layout
             | app-loader -- spinner when page load 
             | footer            
             | navbar  
      | model  --all models
      | shared
             | component  --all shared components          
             | pipe  --all shared pipes          
             | directive  --all shared directives          
             | shared.module.ts --import in your module, this contain all modules where you are need
      | static-page | --module to static pages
      | app.module.ts --root module
      | app-routing.module --root routes module
      | module.import.guard --throw exception where singleton modules are imported inside multiples modules

```

## libs

+ [Angular Material](https://material.angular.io/)
+ [Masks](https://www.npmjs.com/package/ngx-mask)
+ [Validation](https://www.npmjs.com/package/ng2-validation)

## How to use components

### Dialog

```
  | shared |
           | component
                       | dialog
```

inside your component Typescript 

```typescript
  constructor(private dialog: MatDialog){}
  
  openDialog(title: string, message: string, confirmBtn: string) {
    const dialog = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {title: title, message: message, confirmButton: confirmBtn}
    });

    dialog.afterClosed().subscribe(result => {
    });
  }
```

inside `result` you can take result from the user

### Custom colors

+ [Material Design Palette Generator](http://mcg.mbitson.com)
