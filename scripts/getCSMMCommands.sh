#!/bin/sh

git clone https://github.com/CatalysmsServerManager/7-days-to-die-server-manager.git CSMM-src
cd CSMM-src
npm ci --only-prod

node ../scripts/parseCSMMCommands.js
cd ..

rm -rf CSMM-src