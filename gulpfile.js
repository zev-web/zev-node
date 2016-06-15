const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('default', ['watch']);

gulp.task('node', shell.task([
  'clear',
  'echo \n',
  'node index.js',
  'echo \n'
]));

gulp.task('watch', () => {
  gulp.watch('index.js', ['node']);
})
