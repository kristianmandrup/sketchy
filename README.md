# Sketchy CLI

Sketch 43 CLI wrapper for [sketch2json](https://github.com/xaviervia/sketch2json)

*Print* or *Save* your Sketch files as JSON directly from the CLI :)

## Install

* npm: `npm i -g sketchy-cli`
* yarn: `yarn global add sketchy-cli`

## CLI usage

* `sketchy --version`
* `sketchy --help`
* `sketchy print samples/MyCool` - print it
* `sketchy save samples/MyCool` - save as JSON file

Process multiple files:

* `sketchy save samples/MyCool samples/MyOtherCool`

## Library usage

```js
import sketchy from 'sketchy-cli'
import sketch2json from 'sketch2json'

let file = './my-app.sketch'
let sketchJSON = sketch2json(file)

let options = {
  log: true,
  transform: 'pages',
  // transformation: (json, options) => {}
  action: (sketch) => {
    let newSketch = sketch
    // ... some JSON transformations
    return newSketch
  }
}

let mySketchy = sketchy.actions.transform(sketchJSON, file, options)
// ...
sketchy.actions.print(mySketchy, file, options)
// ...
sketchy.actions.save(mySketchy, outFile, options)
```

## Pretty indentation

* `-p --pretty` to enable pretty print output
* `-i --indent` to specify indentaiton (default 2 spaces)

These options can be used with both `print` and `save` commands

* `sketchy save samples/MyCool.sketch --pretty` (pretty print)
* `sketchy save samples/MyCool.sketch --indent 4` (implicit pretty print)

### Display

Display JSON for one or more sketch files

* `sketchy print MyCool.sketch dev/CarApp.sketch`
* `sketchy print MyCool dev/CarApp` (shorthand)


### Save

Convert and save as JSON file for one or more sketch files

* `sketchy save MyCool.sketch dev/CarApp.sketch`
* `sketchy save MyCool dev/CarApp` (shorthand)

Saves:

* `MyCool.json`
* `dev/CarApp.json`

## Transformations

* `-t --transform` to enable pretty print output

`sketchy print -t pages --log samples/MyCool`

Currently the transformations available are:

* `identity`
* `pages` - perform an action on each page (via `options.action`)

Add your own in the `src/transformations` folder.
Currently uses [json-operator](https://www.npmjs.com/package/json-operator) with [jsonpath](https://github.com/kristianmandrup/jsonpath)

## Sketch format

All the [Sketch types](https://github.com/darknoon/sketchapp-json-flow-types/blob/master/types.js)

## Webpack

[sketch-loader](https://github.com/xaviervia/sketch-loader)

## Web Viewer

Be sure to also check the [sketch-web-viewer](https://github.com/AnimaApp/sketch-web-viewer)

## Contribution

Add help add sensible JSON transformations that can be reused in the community!

## TODO

`webpack -p` to compile `src` to `dist` (production mode)

## License

MIT