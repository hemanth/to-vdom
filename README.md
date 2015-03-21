## virtual-html

Convert given HTML/DOM into [Virtual DOM](http://npmjs.org/virtual-dom) object

## Install

```bash
$ npm install to-vdom
```

## Usage

Async:

```js
var html = '<div class="foo bar" style="color: red; background: yellow;" data-yo="123">yo</div>';
// ^ Could be a DOM object as well.

var virtual = require('to-vdom')

virtual(html, function (error, dom) {
  if (error) throw error

  dom.tagName
  // => 'div'

  dom.children[0].text
  // => 'yo'

  dom.properties.dataset.yo
  // => 123
})
```
Sync:

```js
var html = '<div class="foo bar" style="color: red; background: yellow;" data-yo="123">yo</div>';

var virtual = require('to-vdom')

// synchronous interface
var dom = virtual(html)

dom.tagName
// => 'div'

dom.children[0].text
// => 'yo'

dom.properties.dataset.yo
// => 123
```
