var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var clean = require("gulp-clean");

gulp.task("style", function() {
    return gulp.src("app/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("build/css"));
});

gulp.task("minify", function() {
    return gulp.src("build/css/style.css")
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("watch-css", function() {
    return gulp.watch("app/scss/style.scss", gulp.series("build"));
});

gulp.task("copy", function() {
    return gulp.src([
        "app/*.html"
    ])
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
    return gulp.src("build", {allowEmpty: true})
    .pipe(clean());
});

gulp.task("build", gulp.series(
    "clean",
    "copy",
    "style",
    "minify"
));
