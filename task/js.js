const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');


// Отбаботка JavaScript
const js = () => {
    return src(path.js.src, {soursemaps: true})
    .pipe(babel())
    .pipe(uglify())
    .pipe(dest(path.js.dist, {soursemaps: true}));

};

module.exports = js;