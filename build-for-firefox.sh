#!/bin/bash

mkdir -p ./dist/firefox/
cp ./src/firefox/* ./dist/firefox/
mkdir -p ./dist/firefox/icons/
cp ./assets/icons/{48x48,96x96}.png ./dist/firefox/icons/
cp ./src/contentScript.js ./dist/firefox/
cd ./dist/firefox
zip -r -X firefox_plugin.zip *
