#!/bin/bash

set -e

basepath=$(dirname $0)

rm -rf es

echo "开始编译组件..."
if [[ $1 == '--dev' ]]; then
    ttsc --watch
else
    ttsc
fi
