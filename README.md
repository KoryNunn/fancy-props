# fancy-props

DOM nodes have an eclectic (horrible) collection of properties and attributes, this library attempts to bring sanity to setting and getting them.

## Usage

```sh
npm i --save fancy-props
```

```js
var fancyProps = require('fancyProps')

var myDateInput = document.createElement('date')

myDateInput.value; // -> ""

fancyProps.value(someDateInput); // -> null

myDateInput.value = new Date('2020-01-01') // Does not work

myDateInput.value; // -> ""

fancyProps.value(someDateInput, new Date('2020-01-01')); // Set the date

myDateInput.value; // -> "2020-01-01"

fancyProps.value(someDateInput); // -> An actual date object eg: Wed Jan 01 2020 10:00:00 ... etc
```

## Supported properties: 

 - class
 - display
 - disabled
 - innerHTML
 - value
 - max
 - style
 - type
 - textContent
 - innerText