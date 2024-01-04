const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const size = require('gulp-size');
const shorthand = require('gulp-shorthand');
const sass = require('gulp-sass')(require('sass'));
const webpcss = require('');


// Отбаботка cssgulp-webp-css
const scss = () => {
    return src(path.cass.src, {soursemaps: true})
    .pipe(sass())
    .pipe(webpcss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(size({title: "style.css"}))
    .pipe(dest(path.cass.dist, {soursemaps: true}))
    .pipe(rename({ suffix: ".min"}))
    .pipe(csso())
    .pipe(size({title: "style.min.css"}))
    .pipe(dest(path.cass.dist, {soursemaps: true}));

};

module.exports = scss;