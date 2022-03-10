# NgxOwnuiComponent
## Getting Started

ngx-ownui-component provides Bootstrap components powered by Angular, so you don't need to include original JS components.

## Installation

### Angular CLI way
Use the Angular CLI ng add command for updating your Angular project.

```javascript
ng add ngx-ownui-component
```

### Manual way
Install ngx-ownui-component from npm:

```javascript
npm install ngx-ownui-component --save
```

Add wanted package to NgModule imports:

```javascript
import { NgxOwnuiComponentModule } from 'ngx-ownui-component';

@NgModule({
  ...
  imports: [NgxOwnuiComponentModule,...]
  ...
})
```

## Compatibility

|ngx-ownui-component  | Angular    |
|-------------------- |:------------
|0.0.5                | Angular 12 |

## License
MIT