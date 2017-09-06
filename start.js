/**
 * Created by Administrator on 2017/9/2.
 */
require('babel-core/register')({
  'presets': [
    'stage-3',
    'latest-node'
  ]
})
require('babel-polyfill')
require('./server')