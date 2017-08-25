function respone() {
    var standardWidth = 375;
    var standardFontSize = 12;
    var html = document.getElementsByTagName('html')[0];

    html.setAttribute('data-dpr', 2)
    html.style['font-size'] = document.documentElement.clientWidth / standardWidth * standardFontSize + 'px';
    html.style['width'] = '100%';
    html.style['height'] = '100%';
    //overflow: 'hidden'
}
export default respone