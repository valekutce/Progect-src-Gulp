const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();

// Конфигурация
const path = require('./config/path.js');

// Задачи
const clear = require('./task/clear');
const html = require('./task/html');
const css = require('./task/css');
const js = require('./task/js');
const sass = require('./task/sass');
const img = require('./task/img');
const font = require('./task/font');
const video = require('./task/video');
const lib = require('./task/lib');

// Сервер 
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
};

// Наблюдение
const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload)
    watch(path.css.watch, css).on('all', browserSync.reload)
    watch(path.js.watch, js).on('all', browserSync.reload)
    watch(path.cass.watch, sass).on('all', browserSync.reload)
    watch(path.img.watch, img).on('all', browserSync.reload)
    watch(path.font.watch, font).on('all', browserSync.reload)
    watch(path.video.watch, video).on('all', browserSync.reload)
    watch(path.lib.watch, lib).on('all', browserSync.reload);
};


// Задачи
exports.html = html;
exports.css = css;
exports.js = js;
exports.sass = sass;
exports.img = img;
exports.font = font;
exports.video = video;
exports.lib = lib;



// Сборка
exports.dev = series(
    clear,
    parallel(sass, css, js, html, img, font, video, lib),
    parallel(watcher, server)
);