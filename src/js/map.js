import * as d3 from 'd3'
import root from '../data/china.json';

var windowWidth = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;

var projection = d3.geoMercator()
    .center([104, 15])
    .scale(windowWidth * 0.85)
    .translate([windowWidth / 2, windowHeight / 2])

var path = d3.geoPath()
    .projection(projection)
// .pointRadius(5)
// var color = d3.scaleOrdinal(d3.schemeCategory10)

var svg = d3.select('#map').append('svg')
    .attr('width', windowWidth)
    .attr('height', windowWidth * 1);

var groups = svg.append('g');
export function appendMap() {

    groups.selectAll('path')
        .data(root.features)
        .enter()
        .append('path')
        .attr('class', 'province')
        .style('fill', function (d, i) {
            //return color(i)
            return '#ddd'
        })
        .style('stroke', 'white')
        .style('stroke-width', '1px')
        .attr('d', path)


    var sizeCreator = function (i) {
        var array = [15, 14, 20, 16]
        return array[i] ? array[i] : 5;
    }

    groups.selectAll('circle')
        .data(root.features)
        .enter()
        .append('circle')
        .attr('class', 'centroid')
        .attr('cx',
            function (d) {
                return path.centroid(d)[0]
            })
        .attr('cy',
            function (d) {
                return path.centroid(d)[1]
            })
        .style('fill', function () {
            return Math.random() > 0.5 ? '#CE6F6C' : '#4987BA'
        })
        .attr('r', function (d, i) {
            return sizeCreator(i)
        })

}


export function changeMap() {
    var cs = groups.selectAll('circle')
    cs.transition()     //使用d3.selection.transition函数来定义一个过渡
        .duration(200)    //使用duration函数来设置过渡效果的持续时间
        .attr("r", function () {
            return Math.random() * 15;
        })
        .style('fill', function () {
            return Math.random() > 0.5 ? '#CE6F6C' : '#4987BA'
        })

}