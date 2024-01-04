const galp = require('gulp');
const clean = require('gulp-clean'); // Удаление директории
const fs = require('fs'); // Удаление директории

// Конфигурация
const path = require('../config/path.js');

// Удаление директории
const clear = (done) => {
    if (fs.existsSync('./dist')) {
        return galp.src(path.root, { read : false }).pipe(clean());
    }
    done();
};

module.exports = clear;
