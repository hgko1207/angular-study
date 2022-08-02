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

빌드 결과는 기본적으로 `dist/` 폴더에 저장됩니다.

```bash
$ ng build
```

## component 생성

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

`ng generate directive|pipe|service|class|guard|interface|enum|module` 명령어를 통해 component 외에 다른 파일들을 생성할 수 있습니다.

## Running unit tests

[Karma](https://karma-runner.github.io)를 통해 단위 테스트를 할 수 있습니다.

```bash
$ ng test
```

## Running end-to-end tests

선택한 플랫폼을 통해 end-to-end 테스트를 실행합니다. 이 명령을 사용하려면 먼저 end-to-end 테스트 기능을 구현하는 패키지를 추가해야 합니다.

```bash
$ ng e2e
```

## RxJS

- https://rxjs.dev/

RxJS는 Reactive Extensions For JavaScript 라이브러리이다.

## Service

Injector 검색 순서

자신의 컴포넌트
-> 부모 컴포넌트
-> 루트 컴포넌트까지 계속 부모-자식 관계를 타고 올라감
-> 루트 모듈
-> 하위 모듈
-> 자신이 속한 모듈까지 계속 내려옴
-> 도중에 해당 서비스에 대한 Providers 값이 있다면 검색 종료

## 참고

- [Angular CLI](https://github.com/angular/angular-cli)
- https://angular.io/cli
- https://angular.io/tutorial
- https://material.angular.io/
- https://angular.io/guide/devtools
- https://blog.angular.io/

## vscode 플러그인

- Angular Files
- Angular Language Service
- TypeScript Hero: 소스 코드 관리에 필요한 TypeScript 코드 정렬을 도와주는 Plugin

## 기타 설치

```bash
$ npm i moment --save
```
