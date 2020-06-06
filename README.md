# BreakitApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Local Stepup

- Install node on your system.
- Clone the project from [here](https://github.com/anarchistMegaByte/breakit-app.git)
- Istall all packages used by the project:
>>> npm install

- Build the project so that distribution package is created.
>>> ng build --prod

- Installing HTTP server

>>> npm i angular-http-server
>>> http-server -p 8080 -c -1 dist/breakit-app

- Change base URLs pointing to your local server.

```
Make change in following files:
1. src/app/service/core.service.ts -> base_url: string = "https://fc425648a9d9.ngrok.io";
2. src/app/service/foodmenu.service.ts -> base_url: string = "https://fc425648a9d9.ngrok.io";
```

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

## Deployment 

Deployment of this project has done on github pages, using ghpages of angular cli.
