# ReclamaGuarapuavaOficial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Requirements

+ Angular-cli >= 6.1.x
+ Typescript >= 3.0.3
+ Node latest version

## first steps

+ Run `npm i` or `npm install`
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
      | core |
             | guard    --all router guards 
             | interceptor  --all request and errors interceptos
             | service  --all services 
                      | AbstractService  --all services must to extends this abstract class
             core.module.ts   -- imported ONLY in root module! This module are a Singleton  DO NOT import in another module
            
      | layout
             | footer            
             | navbar  
                       
      | shared
             | component  --all shared components
             | model  --all models
             shared.module.ts --import in your module, this contain all modules where you are need
      

```
