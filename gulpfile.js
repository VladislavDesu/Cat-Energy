var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var webp = require("gulp-webp");
var include = require("posthtml-include");
var del = require("del");

gulp.task("style", function() {
    return gulp.src("app/scss/style.scss")
        .pipe(plumber())
        .pipe(sass({
            outputStyle: "expanded"
        }).on("error", sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest("build/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("clean", function() {
    return del("build");
});

gulp.task("copy", function() {
    return gulp.src([
            "app/fonts/**/*.{woff,woff2}",
            "app/img/**",
            "app/js/**",
            "app/*.html"
        ], {
            base: "app"
        })
        .pipe(gulp.dest("build"));
});

gulp.task("images", function() {
    return gulp.src("app/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({
                optimizationLevel: 3
            }),
            imagemin.mozjpeg({
                progressive: true
            }),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function() {
    return gulp.src("app/img/**/*.{png,jpg}")
        .pipe(webp({
            quality: 90
        }))
        .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function() {
    return gulp.src("app/img/icon-*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
});

gulp.task("html", function() {
    return gulp.src("app/*.html")
        .pipe(posthtml([
            include()
        ]))
        .pipe(gulp.dest("build"))
        .pipe(server.stream());
});

gulp.task("serve", function() {
    server.init({
        server: "build/"
    });

    gulp.watch("app/scss/**/*.scss", gulp.series("style"));
    gulp.watch("app/*.html", gulp.series("html"));
});

gulp.task("build", gulp.series(
    "clean",
    "copy",
    "style",
    "images",
    "webp",
    "sprite",
    "html"
));
