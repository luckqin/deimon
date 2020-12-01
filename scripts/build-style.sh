#!/bin/bash

set -e

basepath=$(dirname $0)

rm -rf css

echo "开始编译 scss..."
if [[ $1 == '--dev' ]]; then
    sass --watch --no-source-map --stop-on-error --no-error-css --color --unicode ./src/assets:css
else
    sass --no-source-map --stop-on-error --no-error-css --color --unicode ./src/assets:css
fi
