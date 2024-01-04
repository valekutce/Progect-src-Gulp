const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const include = require('gulp-file-include'); // для вставки кода из других файлов
const htmlmin = require('gulp-htmlmin'); // Сжатие html
const size = require('gulp-size');
const webphtml = require('gulp-webp-html');



// Отбаботка html
const html = () => {
    return src(path.html.src)
    .pipe(include())
    .pipe(webphtml())
    .pipe(size({title: "html до сжатия"}))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({title: "html послу сжатия"}))
    .pipe(dest(path.html.dist));
};

module.exports = html;