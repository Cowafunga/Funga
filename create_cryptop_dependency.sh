#!/bin/bash
webpack_config="./node_modules/react-scripts/config/webpack.config.js"
webpack_config_backup="./node_modules/react-scripts/config/webpack.config.js.bckp"

cat ./scripts/webpack.config.js > "${webpack_config}"