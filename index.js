var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var wechat =require('wechat');
var routes = require('./routes/index');

var app = express();
var AppID="wx4f168c00fc0ed270",
AppSecret="6d5cda044986937680fdb0aaff364e2e";
app.use(express.query()); // Or app.use(express.query());
app.use('/wechat', wechat('showqu_love', function (req, res, next) {
	// 微信输入信息都在req.weixin上
	var message = req.weixin;

	// console.log(message);
	if((message.MsgType == 'event') && (message.Event == 'subscribe')){
		var refillStr = "<a href=\"http://m.91jinrong.com/page/commission/share.html?code=nHdzAQ==\">1. 掌上理财</a>"
		var consumeStr = "<a href=\"http://your_IP/weixin/consume?weixinId=" + message.FromUserName + "\">2. 点击记录团队消费</a>"
		var deleteStr = "<a href=\"http://your_IP/weixin/delete?weixinId=" + message.FromUserName + "\">3. 点击回退记录</a>"      
		var historyStr = "<a href=\"http://your_IP/weixin/history?weixinId=" + message.FromUserName + "\">4. 点击查询历史记录</a>"
		  
		var emptyStr = "          ";    
		var replyStr = "感谢你的关注！/::P" + "\n"+ emptyStr + "\n" + refillStr + "\n"+ emptyStr + "\n" + consumeStr 
		      + "\n"+ emptyStr + "\n" + deleteStr + "\n"+ emptyStr + "\n" + historyStr;
		res.reply(replyStr);
	}
}));
app.use('/', function(req, res, next){
	res.writeHead(200, {"Content-Type": "text/plain"});    
    res.write("Hello World");    
    res.end(); 
});
app.listen(3000,function(){
    console.log("================start on port "+3000+"==================")
});