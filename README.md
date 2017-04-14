# Sketchy CLI

Sketch 43 CLI wrapper for [sketch2json](https://github.com/xaviervia/sketch2json)

*Print* or *Save* your Sketch files as JSON directly from the CLI :)

## Install

* npm: `npm i -g sketchy-cli`
* yarn: `yarn global add sketchy-cli`

## CLI usage

* `sketchy print samples/MyCool` - print it
* `sketchy save samples/MyCool` - save as JSON file

Process multiple files:

* `sketchy save samples/MyCool samples/MyOtherCool`

## Pretty indentation

`--pretty` to enable pretty print output
`--indent` to specify indentaiton (default 2 spaces)

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

## Sketch format

All the [Sketch types](https://github.com/darknoon/sketchapp-json-flow-types/blob/master/types.js)

## Webpack

[sketch-loader](https://github.com/xaviervia/sketch-loader)

## Web Viewer

Be sure to also check the [sketch-web-viewer](https://github.com/AnimaApp/sketch-web-viewer)