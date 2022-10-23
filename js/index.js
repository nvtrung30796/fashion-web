// Automatic Slideshow
var img01 = document.getElementById('img-01');
var images01 = ['img/banner/slideshow_01.jpg', 'img/banner/slideshow_02.jpg', 'img/banner/slideshow_03.jpg'];
var x = 0;
function slider01() {
    if (x < images01.length) {
        x = x + 1;
    }
    else {
        x = 1;
    }
    img01.innerHTML = "<img src=" + images01[x - 1] + ">";
}
setInterval(slider01, 3000)


var img02 = document.getElementById('img-02');
var images02 = ['img/banner/slideshow_02.jpg', 'img/banner/slideshow_03.jpg', 'img/banner/slideshow_01.jpg'];
var y = 0;
function slider02() {
    if (y < images02.length) {
        y = y + 1;
    }
    else {
        y = 1;
    }
    img02.innerHTML = "<img src=" + images02[y - 1] + ">";
}
setInterval(slider02, 3000)

var img03 = document.getElementById('img-03');
var images03 = ['img/banner/slideshow_03.jpg', 'img/banner/slideshow_01.jpg', 'img/banner/slideshow_02.jpg'];
var z = 0;
function slider03() {
    if (z < images03.length) {
        z = z + 1;
    }
    else {
        z = 1;
    }
    img03.innerHTML = "<img src=" + images03[z - 1] + ">";
}
setInterval(slider03, 3000)

// Automatic Slideshow for Mobile
var img04 = document.getElementById('img-04');
var images04 = ['img/banner/slideshow_mobile_01.jpg', 'img/banner/slideshow_mobile_02.jpg', 'img/banner/slideshow_mobile_03.jpg'];
var a = 0;
function slider04() {
    if (a < images04.length) {
        a = a + 1;
    }
    else {
        a = 1;
    }
    img04.innerHTML = "<img src=" + images04[a - 1] + ">";
}
setInterval(slider04, 3000)


var img05 = document.getElementById('img-05');
var images05 = ['img/banner/slideshow_mobile_02.jpg', 'img/banner/slideshow_mobile_03.jpg', 'img/banner/slideshow_mobile_01.jpg'];
var b = 0;
function slider05() {
    if (b < images05.length) {
        b = b + 1;
    }
    else {
        b = 1;
    }
    img05.innerHTML = "<img src=" + images05[b - 1] + ">";
}
setInterval(slider05, 3000)

var img06 = document.getElementById('img-06');
var images06 = ['img/banner/slideshow_mobile_03.jpg', 'img/banner/slideshow_mobile_01.jpg', 'img/banner/slideshow_mobile_02.jpg'];
var c = 0;
function slider06() {
    if (c < images06.length) {
        c = c + 1;
    }
    else {
        c = 1;
    }
    img06.innerHTML = "<img src=" + images06[c - 1] + ">";
}
setInterval(slider06, 3000)