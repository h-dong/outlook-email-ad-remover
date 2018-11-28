#!/bin/bash

mkdir -p ./dist/chrome/
cp ./src/chrome/* ./dist/chrome/
mkdir -p ./dist/chrome/icons/
cp ./assets/icons/{16x16,32x32,48x48,128x128}.png ./dist/chrome/icons/
cp ./src/contentScript.js ./dist/chrome/
