import * as d3 from 'd3'
import $ from 'jquery'
import root from '../data/china.json';
import allProvinceSingles from '../data/allProvinceSingles.json'
//{上海：[[],[],[],[]]}
// console.log(allProvinceSingles)
//公式 男-女/总 结果是一个小数...


function getSinglesNumberFromAgeStrAndProvinceName(ageStr, provinceName) {
    var ageLow = ageStr.split(',')[0]
    var ageHigh = ageStr.split(',')[1]
    var startRowNumber = (ageLow - 20) / 5;
    var rowsLength = (ageHigh - ageLow) / 5;

    // console.log(ageStr)

    var province2DimensionData = (allProvinceSingles[provinceName])
    // console.log(allProvinceSingles)
    // console.log(d.properties.name)
    // console.log(allProvinceSingles[d.properties.name])

    var result = {};

    if (province2DimensionData) {
        var newArray = province2DimensionData.slice(startRowNumber, (startRowNumber + rowsLength))
        // console.log(newArray);

        var sum = 1, manSum = 0, womanSum = 0;
        [].forEach.call(newArray, function (e, i) {
            sum += parseInt(e[0]);
            manSum += parseInt(e[1]);
            womanSum += parseInt(e[2]);
        })
        result.number = (manSum - womanSum) / sum;
    } else {
        result.number = 0;
    }

    result.realNumber = result.number * 10000
    return result;
}

function changeDesc(provinceName, realNumber) {
    var bjDesc = document.getElementById('bjDesc');
    var shDesc = document.getElementById('shDesc');
    var gdDesc = document.getElementById('gdDesc');

    var number = Math.abs(parseInt(realNumber));
    var male = (realNumber > 0) ? '男' : '女';

    if (provinceName == '上海') {
        shDesc.querySelectorAll('.number')[0].innerHTML = number;
        shDesc.querySelectorAll('.male')[0].innerHTML = male;
    } else if (provinceName == '北京') {
        bjDesc.querySelectorAll('.number')[0].innerHTML = number;
        bjDesc.querySelectorAll('.male')[0].innerHTML = male;
    }
    else if (provinceName == '广东') {
        gdDesc.querySelectorAll('.number')[0].innerHTML = number;
        gdDesc.querySelectorAll('.male')[0].innerHTML = male;
    }
}

function getRadiusFromRealNumber(realNumber) {
    var num = Math.sqrt(Math.abs(realNumber / 10000) * 2)
    // return num.toFixed(2) + 'rem';
    num=num.toFixed(2);
    return num*12+'px';
}

export function appendMap() {
    var maleColor = '#2b93bf';
    var femaleColor = '#ff1654';
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

    var groups = svg.append('g')
        .attr('id', 'mainG');

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
        .attr("r", function (d) {
            return '0rem';
        })
        .style('stroke', 'black')


    var guideData = [100, 500, 1000]
    var svg = d3.select('#map svg')
    svg.append('g')
        .attr('id', 'guideG')
        .selectAll('circle')
        .data(guideData)
        .enter()
        .append('circle')
        .attr('cx',
            function (d, i) {
                return (10 + i * 10) + '%'
            })
        .attr('cy', '80%')
        .attr("r", function (d) {
            return getRadiusFromRealNumber(d);
        })
        .style('stroke', 'black')
        .style('fill', function (d) {
            // console.log(d.singlesNumber)
            // return d.singlesNumber < 0 ? '#CE6F6C' : '#4987BA'
            return d.singlesNumber < 0 ? femaleColor : maleColor
        })

    svg.select('#guideG')
        .selectAll('text')
        .data(guideData)
        .enter()
        .append('text')
        .attr('x',
            function (d, i) {
                return (10 + i * 10) + '%'
            })
        .attr('y', '86%')
        .attr('text-anchor', 'middle')
        .attr('font-size', '1rem')
        .text(function (d) {
            return d
        })

    svg.select('#guideG')
        .append('circle')
        .attr('cx', '10%')
        .attr('cy', '94%')
        .attr("r", getRadiusFromRealNumber(1000))
        .style('stroke', 'black')
        .style('fill', maleColor)

    svg.select('#guideG')
        .append('circle')
        .attr('cx', '25%')
        .attr('cy', '94%')
        .attr("r", getRadiusFromRealNumber(1000))
        .style('stroke', 'black')
        .style('fill', femaleColor)

    svg.select('#guideG')
        .append('text')
        .attr('x', '15%')
        .attr('y', '95%')
        .attr('text-anchor', 'middle')
        .attr('font-size', '1rem')
        .text('男')

    svg.select('#guideG')
        .append('text')
        .attr('x', '30%')
        .attr('y', '95%')
        .attr('text-anchor', 'middle')
        .attr('font-size', '1rem')
        .text('女')
}

export function changeMap(ageStr) {
    var maleColor = '#2b93bf';
    var femaleColor = '#ff1654';
    var cs = d3.select('#mainG').selectAll('circle')

    cs.transition()
        .duration(200)
        .attr("r", function (d) {
            var provinceName = d.properties.name;
            var singlesNumberObj = getSinglesNumberFromAgeStrAndProvinceName(ageStr, provinceName);
            changeDesc(provinceName, singlesNumberObj.realNumber);
            d.singlesNumber = singlesNumberObj.number;//赋值给d是因为 下面要用...
            return getRadiusFromRealNumber(singlesNumberObj.realNumber);
        })
        .style('fill', function (d) {
            // console.log(d.singlesNumber)
            // return d.singlesNumber < 0 ? '#CE6F6C' : '#4987BA'
            return d.singlesNumber < 0 ? femaleColor : maleColor
        })

}
