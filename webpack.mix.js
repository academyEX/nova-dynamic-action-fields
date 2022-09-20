let mix = require('laravel-mix')

require('./nova.mix')

mix
    .setPublicPath('dist')
    .vue({ version: 3 })
    .js('resources/js/dynamic-action-fields.js', 'js')
    .nova('tunezilla/dynamic-action-fields')
