# Angular 공부

## 설치

```bash
$ npm install -g @angular/cli
```

## 프로젝트 생성

```bash
$ ng new angular-study
```

## 시작

```bash
$ npm start
# or
$ ng serve
```

## Build

빌드 아티팩트는 `dist/` 폴더에 저장됩니다.

```bash
$ ng build
```

## component 생성

`ng generate directive|pipe|service|class|guard|interface|enum|module` 명령어를 통해 component 외에 다른 파일들을 생성할 수 있습니다.

```bash
$ ng generate component component-name
# or
$ ng g c component-name
```

```bash
# 사용 예
$ ng g c section
# section 안에 생성
$ ng g c section/card
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 참고

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.
- https://angular.io/cli
- https://angular.io/tutorial
- https://material.angular.io/
- https://angular.io/guide/devtools
- https://blog.angular.io/

## vscode 플러그인

- Angular Files
- Angular Language Service
- TypeScript Hero: 소스 코드 관리에 필요한 TypeScript 코드 정렬을 도와주는 Plugin
