# my-app-react

Заметки:

1.

- настроен абсолютный импорт - файл настроек jsconfig.json;
- после можно импортировать таким образом с любой папки:
- import Button from 'components/Button'

2.

- дефолтный экспорт, реэкспорт
- в каждой папке создать файл index.js, в котором прописать:
- export { default } from './файлКомпонента';
- тогда при импорте не нужно дублировать имя папки и имя компонента

3.

- установлено пакет react-jss (стили)
- https://cssinjs.org/react-jss?v=v10.5.1#install
- документация как использовать