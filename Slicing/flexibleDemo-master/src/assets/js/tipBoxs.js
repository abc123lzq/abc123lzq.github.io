// 传参数据
var tipsContentData1 = '您当前是试玩账号，如果要使用奇币，请先完善资料';
var tipsContentData2 = '您当前的试玩账号没有完善资料，注销登录后会导致试玩游戏账号丢失！ <br>是否完善试玩账号？';

function stopSetting(event) {
    event.preventDefault();
}
// 动态盒子
function box1(text) {
    var odiv = document.createElement('div');
    odiv.innerHTML =
        '<div class="tipBox1">' +
        '<div class="text-content" id="boxContent1">' +
        '<p class="header">' + '完善资料' + '<em id="close1"></em></p>' +
        '<div class="box-content">' +
        '<p>' + text + '</p>' +
        '<p><span>' + '取消' + '</span> <span>' + '完善账号' + '</span></p>' +
        '</div></div></div>';
    document.body.appendChild(odiv);
    var boxContent1 = document.getElementById('boxContent1');
    var close1 = document.getElementById('close1');
    boxContent1.style.top = parseInt((document.documentElement.clientHeight - boxContent1.offsetHeight) / 4) + 'px';
    boxContent1.style.left = parseInt((document.documentElement.clientWidth - boxContent1.offsetWidth ) / 2) + 'px';
    close1.onclick = function () {
        document.body.removeChild(odiv);
    };
}
