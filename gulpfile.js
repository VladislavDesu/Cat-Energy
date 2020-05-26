var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var clean = require("gulp-clean");

gulp.task("style", function() {
    return gulp.src("app/scss/style.scss")
    .pipe(sass({
            outputStyle: "expanded"
        }).on("error", sass.logError))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("watch-css", function() {
    return gulp.watch(["app/scss/**/*.scss", "app/*.html"], gulp.series("style"));
});

gulp.task("clean", function() {
    return gulp.src("build", {allowEmpty: true})
    .pipe(clean());
});

gulp.task("copy", function() {
    return gulp.src([
        "app/fonts/**/*.{woff,woff2}",
        "app/img/**/*.{png,jpeg,svg,webp}",
        "app/js/**/*.js",
        "app/*.html"
    ], {
            base: "app"
        })
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series(
    "clean",
    "copy",
    "style"
));
