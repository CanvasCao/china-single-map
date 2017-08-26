import * as d3 from 'd3'
import root from '../data/china.json';
import allProvinceSingles from '../data/allProvinceSingles.json'
//{上海：[[],[],[],[]]}
console.log(allProvinceSingles)

var windowWidth = document.documentElement.clientWidth;
var windowHeight = document.documentElement.clientHeight;
var projection = d3.geoMercator()
    .center([104, 35])
    .scale(windowWidth * 0.88)
    .translate([windowWidth / 2, windowWidth / 2])

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
        .style('stroke', 'black')
}
export function changeMap(ageStr) {
    var ageLow = ageStr.split(',')[0]
    var ageHigh = ageStr.split(',')[1]
    var startRowNumber = (ageLow - 20) / 5;
    var rowsLength = (ageHigh - ageLow) / 5;

    // console.log(ageStr)

    var cs = groups.selectAll('circle')
    cs.transition()
        .duration(200)
        .attr("r", function (d) {
            var province2DimensionData = (allProvinceSingles[d.properties.name])
            // console.log(allProvinceSingles)
            // console.log(d.properties.name)
            // console.log(allProvinceSingles[d.properties.name])

            if (province2DimensionData) {
                var newArray = province2DimensionData.slice(startRowNumber, (startRowNumber + rowsLength))
                console.log(newArray);

                var sum = 1, manSum = 0, womanSum = 0;
                [].forEach.call(newArray, function (e, i) {
                    sum += parseInt(e[0]);
                    manSum += parseInt(e[1]);
                    womanSum += parseInt(e[2]);
                })
                d.singlesNumber = (manSum - womanSum) / sum;
            } else {
                d.singlesNumber = 0;
            }
            return Math.sqrt(Math.abs(d.singlesNumber) * 3) + 'rem'
        })
        .style('fill', function (d) {
            console.log(d.singlesNumber)
            // return d.singlesNumber < 0 ? '#CE6F6C' : '#4987BA'
            return d.singlesNumber < 0 ? '#ff1654' : '#2b93bf'
        })

}
