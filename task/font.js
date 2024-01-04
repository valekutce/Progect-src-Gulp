const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');


// Отбаботка fonts
const font = () => {
    return src(path.font.src)
    .pipe(newer(path.font.dist))
    .pipe(fonter({ formats: ["ttf", "woff", "eot", "svg"] }))
    .pipe(dest(path.font.dist))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dist));

};

module.exports = font;