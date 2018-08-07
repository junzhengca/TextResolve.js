![TextResolve.js](http://i.imgur.com/idmENZk.gif)

TextResolve.js is a futuristic text animation plugin.

## How to use

1. Download the lastest copy.
> Or use CDN `https://cdn.jsdelivr.net/gh/junthehacker/textresolve.js@v0.1.0/src/textresolve.compiled.js`
2. Include `src/textresolve.compiled.js` in your page.
3. Here is a simple demo:
```html
<h1 id="title">TextResolve.js</h1>
<script>
  var resolve = new TextResolve("title", {
    text: ["TextResolve.js"]
  });
</script>
```

## API reference

### Creating the object
```js
new TextResolve("element id", {
  // Configurations
})
```

### Available configuration parameters

### text (required)
An array of string you wish to display.

### characterPool
An array of characters you wish to use as placeholders.
```js
// Default
['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '=']
```

### delay
Milliseconds until next sentence is displayed. Default 1000.

### loop
Boolean. Default true.

### targetLoop
How many placeholders to go through until next character is displayed. Default 3.

### resolveDelay
Milliseconds until next placeholder is calculated. Default 50.


Licenced under Do What the Fuck You Want to Public License.

```
        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2017 Jun Zheng <me@jackzh.com> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
```
