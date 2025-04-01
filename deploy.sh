#!/bin/bash

# 1. Сборка проектов
cd vue-app && npm run build && cd ..
cd react-app && npm run build && mv build ../public/react && cd ..
cd angular-app && ng build --output-path ../public/angular && cd ..

# 2. Подготовка public папки
cd public
git init
git checkout -b gh-pages  # Создаём ветку gh-pages

# 3. Фиксация изменений
git add .
git commit -m "Deploy"

# 4. Настройка удалённого репозитория
git remote remove origin 2> /dev/null  # Игнорируем ошибку если remote не существует
git remote add origin https://github.com/Crigas008/python-flask-site.git

# 5. Пуш с принудительной перезаписью
git push -f origin gh-pages

echo "Деплой завершён! Приложение доступно по ссылке:"
echo "https://Crigas008.github.io/python-flask-site/"