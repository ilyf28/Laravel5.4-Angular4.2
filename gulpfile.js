const elixir = require('laravel-elixir');
const gulp = require('gulp');
const gulpWebpack = require('webpack-stream');
const named = require('vinyl-named');
const Task = elixir.Task;

elixir.extend('typescript', function() {
    new Task('typescript', function() {
        return gulp
            .src(['resources/assets/typescript/**/*.ts'])
            .pipe(named())
            .pipe(gulpWebpack(require('./webpack.config.js')))
            .pipe(gulp.dest('public/js'));
    });
});

elixir(function(mix) {
    mix.sass('app.scss');
    mix.typescript();
    mix.version([
        'public/js/main.js',
        'public/js/polyfill.js'
    ]);
});