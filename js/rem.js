var b = document.getElementsByTagName("body")[0];
// 获取屏幕的宽度
var w = window.innerWidth / 7.5;
// 大于750px ，让宽度设置为750px
if (w > 100) {
    w = 100;
}
document.documentElement.style.fontSize = w + "px";