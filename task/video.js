const { src, dest } = require('gulp');

// Конфигурация
const path = require('../config/path.js');

// Плагины



// Отбаботка video
const video = () => {
    return src(path.video.src, {soursemaps: true})
    .pipe(dest(path.video.dist, {soursemaps: true}));

};

module.exports = video;