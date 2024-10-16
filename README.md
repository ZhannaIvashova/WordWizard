# WordWizard - сервис по изучению английских слов

Приложение для изучения английских слов. Слова в таблицу на главной странице, загружаются из БД при get-запросе к API https://itgirlschool.justmakeit.ru/api/words/. Есть возможность добавления, удаления, редактирования слов. Так же есть режим тренировки слов по карточкам.

## Основные технологии

- JS
- Node.js
- React
- Vite
- Styled-components
- MobX
- React gh-pages
  (npm install --save-dev gh-pages)

## Проект доступен на gh-pages по ссылке

https://zhannaivashova.github.io/WordWizard/

Не возможен post-запрос на добавление в БД при открытии проекта на gh-pages,
при локальном развертывании проекта - доступен весь функционал.

## Запуск проекта

- Клонировать репозиторий

```
git clone https://github.com/ZhannaIvashova/WordWizard.git

```

- Перейти в папку с проектом и установить зависимости,
  будут установлены 'dependencies' и 'devDependencies'

```
npm install

```

- Перейти в файл package.json и изменить 'homepage' для деплоя проекта на gh-pages.

- Запустить проект

```
npm run dev

```

- Обновить деплой на gh-pages

```
npm run deploy

```
