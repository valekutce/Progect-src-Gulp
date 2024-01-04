const pathSrc = './src';
const pathDist = './dist';

module.exports = {
    root: pathDist,

    html: {
        src: pathSrc + "/*.html",
        watch: pathSrc + "/*.html",
        dist: pathDist
    },

    css: {
        src: pathSrc + "/assets/css/*.css",
        watch: pathSrc + "/assets/css/*.css",
        dist: pathDist + "/css"
    },

    cass: {
        src: pathSrc + "/assets/Scss/**/*.{scss, sass}",
        watch: pathSrc + "/assets/Scss/**/*.{scss, sass}",
        dist: pathDist + "/css"
    },

    js: {
        src: pathSrc + "/assets/js/*.js",
        watch: pathSrc + "/assets/js/*.js",
        dist: pathDist + "/js"
    },

    img: {
        src: pathSrc + "/assets/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/assets/**/*.{png,jpg,jpeg,gif,svg}",
        dist: pathDist + "/img"
    },

    font: {
        src: pathSrc + "/assets/fonts/*.{eot,ttf,otf,ttc,otc,woff,woff2,svg}",
        watch: pathSrc + "/assets/**/*.{eot,ttf,otf,ttc,otc,woff,woff2,svg}",
        dist: pathDist + "/fonts"
    },

    video: {
        src: pathSrc + "/assets/video/**",
        watch: pathSrc + "/assets/video/**",
        dist: pathDist + "/video"
    },
};