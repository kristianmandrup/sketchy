# Sketchy CLI

Sketch 43 CLI wrapper for [sketch2json](https://github.com/xaviervia/sketch2json)

*Print* or *Save* your Sketch files as JSON directly from the CLI :)

## CLI usage

* `sketchy print samples/MyCool` - print it
* `sketchy save samples/MyCool` - save as JSON file

Process multiple files:

* `sketchy save samples/MyCool samples/MyOtherCool`

## Pretty indentation

`--pretty` to enable pretty print output
`--indent` to specify indentaiton (default 2 spaces)

These options can be used with both `print` and `save` commands

`sketchy save samples/MyCool.sketch --pretty --indent 4`

### Display

Display JSON for one or more sketch files

`sketchy print MyCool dev/CarApp` or `sketchy print MyCool.sketch dev/CarApp.sketch`

### Save

Convert and save as JSON file for one or more sketch files

`sketchy save MyCool dev/CarApp` or `sketchy save MyCool.sketch dev/CarApp.sketch`

Saves:

* `MyCool.json`
* `dev/CarApp.json`

## Sketch format

All the [Sketch types](https://github.com/darknoon/sketchapp-json-flow-types/blob/master/types.js)

## Webpack

[sketch-loader](https://github.com/xaviervia/sketch-loader)

## Web Viewer

Be sure to also check the [sketch-web-viewer](https://github.com/AnimaApp/sketch-web-viewer)