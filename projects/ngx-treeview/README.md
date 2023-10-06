# ngx-treeview
An Angular Bootstrap treeview component
## Dependencies

- [Angular](https://angular.io)
- [Lodash](https://lodash.com)
- [Bootstrap 5.2](https://getbootstrap.com)

You can customize CSS yourself to break down dependencies to Bootstrap.

## Features

- Unlimited tree level
- State: disabled / collapse, expand

## Installation

After install the above dependencies, install `ngx-treeview` via:

```shell
npm i @treeview/ngx-treeview --save
```

Once installed you need to import our main module in your application module:

```js
import { TreeviewModule } from '@treeview/ngx-treeview';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [TreeviewModule.forRoot(), ...],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

## Usage

#### Treeview:

```html
<ngx-treeview
  [config]="config"
  [items]="items"
  (selectedChange)="onSelectedChange($event)"
  (filterChange)="onFilterChange($event)"
>
</ngx-treeview>
```

#### Treeview with dropdown:

```html
<ngx-dropdown-treeview
  [buttonClass]="buttonClass"
  [config]="config"
  [items]="items"
  (selectedChange)="onSelectedChange($event)"
  (filterChange)="onFilterChange($event)"
>
</ngx-dropdown-treeview>
```

`config` is optional. This is the default configuration:

```js
{
   hasAllCheckBox: true,
   hasFilter: false,
   hasCollapseExpand: false,
   decoupleChildFromParent: false,
   maxHeight: 500
}
```

You can change default configuration easily because TreeviewConfig is injectable.

#### Pipe `ngxTreeview`:

To map your JSON objects to TreeItem objects.

```html
<ngx-dropdown-treeview
  [config]="config"
  [items]="items | ngxTreeview:'textField'"
  (selectedChange)="onSelectedChange($event)"
>
</ngx-dropdown-treeview>
```

#### Create a TreeviewItem:

```ts
const itCategory = new TreeviewItem(
{
  text: "Software",
  value: 9,
  children: [
    {
      text: "Programming",
      value: 91,
      children: [
        {
          text: "Frontend",
          value: 911,
          children: [
            { text: "Angular 12", value: 9112 },
            { text: "Angular 13", value: 9113 },
            { text: "Angular 14", value: 9114 },
            { text: "Angular 15", value: 9115, disabled: true },
            { text: "ReactJS", value: 9120 },
          ],
        },
        {
          text: "Backend",
          value: 912,
          children: [
            { text: "C#", value: 9121 },
            { text: "Java", value: 9122 },
            { text: "Python", value: 9123, checked: false },
          ],
        },
      ],
    },
  ],
},
{
  text: "Networking",
  value: 92,
  children: [
    { text: "Internet", value: 921 },
    { text: "Security", value: 922 },
    { text: "Switches", value: 923 },
  ],
});
```

You can pass the second paramater 'autoCorrectChecked' with value=true (default is false) in constructor of TreeviewItem to correct checked value of it and all of its descendants. In some cases, you need to push or pop children flexibly, checked of parent may be not correct. Then you need to call function correctChecked() to help to correct from root to its descendants.

```ts
const vegetableCategory = new TreeviewItem({
  text: "Vegetable",
  value: 2,
  children: [
    { text: "Salad", value: 21 },
    { text: "Potato", value: 22 },
  ],
});
vegetableCategory.children.push(
  new TreeviewItem({ text: "Mushroom", value: 23, checked: false })
);
vegetableCategory.correctChecked(); // need this to make 'Vegetable' node to change checked value from true to false
```

#### TreeviewEventParser:

Extract data from list of checked TreeviewItem and send it in parameter of event selectedChange. Some built-in TreeviewEventParser:

- DefaultTreeviewEventParser: return values of checked items.
- DownlineTreeviewEventParser: return list of checked items in orginal order with their ancestors.
- OrderDownlineTreeviewEventParser: return list of checked items in checked order with their ancestors. Note that: value of a leaf must be different from value of other leaves.

#### Templating:

See example 4 & 5.
