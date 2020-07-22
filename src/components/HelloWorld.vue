<template>
  <div class="hello">
	<div class="ui-elem" >
		<span style="font-size: 2rem;">{{ msg }}</span>
	</div>
    <h1 style="font-family:Hiragino Sans GB; font-size: 80px;">
		{{ falg ? '是' : '不是' }}
	</h1>
    <h3>{{Myweek}} {{time}}</h3>
  </div>
</template>



<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
	  return{
		 falg: false,
		 time: null ,
		 Myweek : null
	  }
  },
  created:function(){
	let date = new Date()
	let week = date.getDay()
	let weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	this.Myweek = weeks[week]
	if(this.Myweek==='Friday'){ this.falg=true}
  },
  mounted() {
      let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        _this.time = new Date().Format("yyyy.MM.dd hh:mm:ss"); // 修改数据date
      }, 1000)
    },
	beforeDestroy() {
	    if (this.timer) {
	      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
	    }
	}
}
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}  
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ui-elem{
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 200px;
	width: auto;
	background: url(../assets/bg.png) no-repeat center;
}
.ui-elem span{
	flex: auto;
	margin-top: 3.4375rem;
}
</style>
