var obj = require('./tool.js');

var demo2 = {
    init:function () {
        this.bindEvent();
    },
    bindEvent:function () {
        var demo1 = obj.getDom('demo2');
        demo1.onclick = this.changeStyle;
    },
    changeStyle:function () {
        this.style.width = '200px';
        this.style.height = '200px';
        this.style.backgroundColor = 'white';
        console.log('change demo2');
    }
}

module.exports = demo2;
