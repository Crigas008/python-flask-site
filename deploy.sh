#!/bin/bash

# Сборка Vue
cd vue-app
npm run build
mv dist ../public/vue
cd ..

# Сборка React
cd react-app
npm run build
mv build ../public/react
cd ..

# Сборка Angular
cd angular-app
ng build --output-path ../public/angular --base-href /angular/
cd ..
