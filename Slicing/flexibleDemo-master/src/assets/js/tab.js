/**
 * 不同页面的拓展需要自己的js里调用
 */
// window.onload = function () {
var TAB = new Tab();

// };

function Tab() {
    this.obj = null;
}

Tab.prototype.init = function (opt) {
    this.obj = document.getElementById(opt.oul);
    this.oLi = this.obj.getElementsByTagName('li');
    this.oDiv = document.getElementsByClassName(opt.odiv);
    this.jiaoBiao = document.getElementsByClassName(opt.oimg);
    this.changeStyle();
};

Tab.prototype.changeStyle = function () {
    for (var i = 0; i < this.oLi.length; i++) {
        this.oLi[i].index = i;
        var that = this;
        this.oLi[i].onclick = function () {
            that.revertStyle(that);
            if (that.oDiv.length > 1 && that.jiaoBiao.length > 1) {
                that.oDiv[this.index].style.display = 'block';
                that.jiaoBiao[this.index].style.display = 'block';
            }
            this.className = 'active';
        }
    }
};

Tab.prototype.revertStyle = function (that) {
    for (var j = 0; j < that.oLi.length; j++) {
        that.oDiv[j].style.display = 'none';
        if (that.jiaoBiao.length >= 1) {
            that.jiaoBiao[j].style.display = 'none';
        }
        that.oLi[j].className = '';
    }
};

// 参数位置
TAB.init({
    oul: 'tabUl',
    odiv: 'online-data',
    oimg: 'jiaoBiao'
});