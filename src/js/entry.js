require('../css/index.css');
var demo1 = require('../js/demo1.js');
var demo2 = require('../js/demo2.js');

var oImg = new Image();
oImg.src = require('../img/center.png');
document.body.appendChild(oImg);

    demo1.init();
    demo2.init();
console.log('test');