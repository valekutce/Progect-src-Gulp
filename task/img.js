const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');


// Отбаботка img
const img = () => {
    return src(path.img.src)
    .pipe(newer(path.img.dist))
    .pipe(webp())
    .pipe(dest(path.img.dist))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dist))
    .pipe(imagemin({ verbose: true }))
    .pipe(dest(path.img.dist));

};

module.exports = img;