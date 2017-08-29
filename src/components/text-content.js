import title from '../media/images/title.jpg'
import img1 from '../media/images/1.jpg'
import img2 from '../media/images/2.jpg'
import img3 from '../media/images/3.jpg'
import img4 from '../media/images/4.jpg'
import logoBlack from '../media/images/logoBlack.png'

export function appendContent() {
    document.querySelectorAll('.big-title')[0].innerHTML = ' \
    中国单身地图<br>\
    大数据告诉你 <br>\
    该去哪里找对象';
    document.querySelectorAll('.big-title')[0].innerHTML = '<img/>';
    document.querySelectorAll('.big-title img')[0].src = title;

    document.querySelectorAll('.sub-title')[0].innerHTML = '经常有智商情商双高的女性朋友抱怨“怎么找个靠谱的男朋友这么难！”，最近属羊、博士、非京户的女性也被放在了中国式相亲鄙视链的底端。男朋友真的难找吗？今天是七夕——中国传统情人节，还没有找到对象的朋友，下面这张全国“单身狗”地图为你提供了点参考。';

    document.querySelector('#age-bar').innerHTML = "单身年龄，<span class='age'></span>";
    document.querySelector('#age-bar-desc').innerHTML = "拖动滑块，可以看到各省市、各年龄段里每一个万个单身中有多出多少男性或女性，圆圈越大，竞争越激烈，越多单身注定要打光棍。";


    document.querySelector('#map').innerHTML += "\
        <div id='bjDesc'>\
        <strong>北京</strong><br>\
        <div class='desc'>\
            每万个单身者中 <br>多\
            <span class='number'></span>名\
            <span class='male'></span>性\
        </div>\
        </div>\
        \
        <div id='shDesc'>\
        <strong>上海</strong><br>\
        <div class='desc'>\
            每万个单身者中 <br>多\
            <span class='number'></span>名\
            <span class='male'></span>性\
        </div>\
        </div>\
        \
        <div id='gdDesc'>\
        <strong>广东</strong><br>\
        <div class='desc'>\
            每万个单身者中 <br>多\
            <span class='number'></span>名\
            <span class='male'></span>性\
        </div>\
        </div>";


    var item1 = document.querySelectorAll('.item-box1')[0]
    item1.innerHTML = "<div class='sec-title'></div>\
        <div class='item-content'></div>\
        <img/>\
        <div class='item-content'></div>\
        <img/>\
        <div class='item-content'></div>\
        <img/>\
        <div class='item-content'></div>\
        ";
    item1.querySelectorAll('.sec-title')[0].innerHTML = '各省市“单身狗”都是男性，越等竞争越大';

    item1.querySelectorAll('.item-content')[0].innerHTML = '乍一看去真是山河一片蓝，在20岁-65岁的全年龄段，除了江苏省每万单身中多35名女性，山东省多16名，其余29个省级行政区都是单身男性偏多。但全年龄段并不能说明任何问题，很少会有20岁男性的希望对象是65岁以上的老奶奶，所以我们将它分成10个年龄段，每个人都能找到自己理想的年龄范围。';
    item1.querySelectorAll('img')[0].src = img1;
    item1.querySelectorAll('.item-content')[1].innerHTML = '从适龄单身青年（20岁-35岁）来看，全国所有省市的男性单身大大超过了女性单身，最多为云南，每万单身中多3075名男性，最少为河南，多656名男性。一线城市北京、上海、广州中，北京的男性竞争压力稍小，只多出863人，上海为1165人，广州1573人。';
    item1.querySelectorAll('img')[1].src = img2;
    item1.querySelectorAll('.item-content')[2].innerHTML = '那么单身情况和经济富裕程度又有什么关系呢？我们进一步对各省市人均GDP与适龄单身青年人数进行了分析，发现人均GDP越高，每万单身中未匹配的人越少，男女失衡程度越低。结婚是一件需要投入巨大成本的事。钱少、竞争大，欠发达地区的男性单身们娶老婆困难重重。男性择偶时，对方年龄总是心里的一道坎儿，总有错觉可以不必着急，也许熬成大叔才更受欢迎。其实等豆蔻少女长成，大叔们的竞争只会更加激烈。全国15-19岁年龄组比20-24岁年龄组的人口少了五分之一，而东部沿海地区情况更为显著。比起空自等待，还是多留心身边的同龄姑娘和“资深美女”吧！';


    var item2 = document.querySelectorAll('.item-box2')[0]
    item2.innerHTML = "<div class='sec-title'></div>\
        <img/>\
        <div class='item-content'></div>\
        <img/>\
        <div class='item-content'></div>\
        ";
    item2.querySelectorAll('.sec-title')[0].innerHTML = '八成上海人30岁以前结婚，学历并不影响婚姻';

    item2.querySelectorAll('img')[0].src = img3;
    item2.querySelectorAll('.item-content')[0].innerHTML = '“如今大家不都晚婚吗？”——被“逼婚”的你有一万个委。晚婚究竟多晚？我们聚焦到上海的数据来看。自1992以来，尽管25-29岁年龄段初婚比例增长至39%，仍有超过80%的上海人选择在30岁以前结婚。再婚等其他情况可能会拉高上海的“平均结婚年龄”，但30岁仍然是大家坚守单身的心理底线——这一次，数据不能支持你坚持晚婚的态度。可是别人选择什么时候结婚，对你真有那么重要？';
    item2.querySelectorAll('img')[1].src = img4;
    item2.querySelectorAll('.item-content')[1].innerHTML = '“书读多了嫁不出去！”这样的“老生常谈”并不少见，博士学历如今也到了鄙视链底端。那么学历真的会影响择偶吗？ 从上海的数据来看，请放宽心：选择深造的你只是需要多一些等待的耐心。本科生选择在25岁以前结婚的比例远高于硕士生。但在26-27岁，研究生就将迎来结婚高潮，从26岁以后，研究生结婚人数比例持续高于本科生。虽然硕士生结婚年龄普遍会晚上几年，但只要稍加等待，爱情自会水到渠成。看来忙于学术的研究僧们，倒不必过度担忧。答辩已经过了，结束单身狗的日子还会远吗？';


    document.querySelectorAll('.reference')[0].innerHTML = '\
        数据来源：中国国家统计局《第六次全国人口普查》 <br>\
        *本文参考 <a href="http://jonathansoma.com/singles/#3/9/2/0）">《美国单身人口地图》</a> <br>\
        \
        ';
    document.querySelectorAll('.author')[0].innerHTML = '\
    <img/>\
    上观新闻融媒体工作室：肖书瑶，程是颉（实习）<br>';
    document.querySelectorAll('.author img')[0].src = logoBlack;

}