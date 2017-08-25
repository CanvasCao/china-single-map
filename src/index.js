import response from  './js/response'
// import _ from 'lodash'
import $ from 'jquery'
import 'normalize.css'
import './css/jquery.range.css'
import './css/index.css'
import {appendMap, changeMap} from './js/map'
require('./js/jquery.range')

response();
appendMap();

var $age = $('#age-bar span')
$('.range-slider').jRange({
    from: 20,
    to: 70,
    step: 5,
    scale: [20, 30, 40, 50, 60, 70],
    format: '%s',
    width: document.documentElement.clientWidth * 0.8,
    showLabels: false,
    showScale: true,
    isRange: true,
    snap: true,
    // theme: 'theme-blue',
    onstatechange: function (e) {
        $age.html(e.split(',').join('-'));
        appendMap();
        changeMap();
    }
}).jRange('setValue', '20,30')
