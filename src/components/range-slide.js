import $ from 'jquery'
import {changeMap} from './map'
require('../js/jquery.range')

export function appendSlide() {
    var $age = $('#age-bar span')
    $('.range-slider').jRange({
        from: 20,
        to: 70,
        step: 5,
        scale: [20, 30, 40, 50, 60, '65以上'],
        format: '%s',
        width: document.documentElement.clientWidth * 0.8,
        showLabels: false,
        showScale: true,
        isRange: true,
        snap: true,
        // theme: 'theme-blue',
        onstatechange: function (e) {
            //一开始20-20也会触发onstatechange...
            //e 20-40
            var array = e.split(',');
            if (array[1] == '70') array[1] = '65以上'
            $age.html(array.join('-'));
            changeMap(e);
        }
    })
    .jRange('setValue', '20,30')

    // changeMap('20,30')
}
