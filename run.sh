#!/bin/sh

# Start Mysql
mysql.server start

# Start back-end app
cd $(dirname $0)/labor-analgesia-backend
git checkout main
git pull
forever start ./dist/app.js

# Start front-end app
cd $(dirname $0)/labor-analgesia-frontend
git checkout main
git pull
forever start ./build/run/server.js
