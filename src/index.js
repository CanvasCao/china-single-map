import response from  './js/response'
response();

import 'normalize.css'
import './css/jquery.range.css'
import './css/index.css'

import {appendContent} from './components/text-content'
import {appendMap} from './components/map'
import {appendSlide} from './components/range-slide'
appendContent();
appendMap();
appendSlide();

