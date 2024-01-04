const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины


// Отбаботка Библиотеки
const lib = () => {
    return src(path.lib.src)
    .pipe(dest(path.lib.dist));

};

module.exports = lib;