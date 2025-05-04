import { generate } from 'critical'

generate({
    inline: true,
    base: 'dist/',
    src: 'index.html',
    target: 'index-critical.css',
    css: ['dist/assets/index-YCuVmzOB.css'],
    width: 1600,
    height: 2600,
    // extract: true,
})
