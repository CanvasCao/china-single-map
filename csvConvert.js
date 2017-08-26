const fs = require('fs')
var files = fs.readdirSync('./src/data/provinceCsv')
// console.log(files)

var result = {};
files.forEach((e, i, arr) => {
    //e '上海.csv'
    //加载3-15 行
    //3 是 20-24   (x-3)*5+20
    //12 是 65
    var provinceName = e.split('.')[0];
    // console.log(provinceName);
    result[provinceName] = [];

    var data = fs.readFileSync('./src/data/provinceCsv/' + e, 'utf-8');//表格数据...
    var rows = (data.split('\r\n'));

    for (let i = 3; i <= 12; i++) {
        var rowArray = (rows[i].split(','));
        rowArray.shift();
        result[provinceName].push(rowArray)
        // console.log(rowArray)
    }

})


fs.writeFile("./src/data/allProvinceSingles.json",JSON.stringify(result), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});
