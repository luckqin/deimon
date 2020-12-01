#!/bin/bash

set -e

basepath=$(dirname $0)

$basepath/./build-style.sh
$basepath/./build-ts.sh
