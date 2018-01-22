for(var i=11; i<13; i++){
  $("#board").append("<p>"+i+" - "+i+":50 "+"<input v-model='whatYouRead"+i+"'/>"+"<input id='" +i+"' type='reset'>"+"</p>")
  $("#board").append("<div class='right"+i+"'>" +i+":50時 讀完了：{{whatYouRead"+i+"}}"+"</div>")
  $(".right"+i).css("color", "rgb("+i*15+","+i+","+i*15+")")
  $(".right"+i).css("position", "fixed")  
  $(".right"+i).css("right", "10%")
  $(".right"+i).css("transform", "translate(0,-40px)")
}

for(var i=1; i<9; i++){
  $("#board2").append("<p>"+i+"pm - "+i+":50 "+"<input v-model='whatYouRead"+i+"'/>"+"<input id='" +i+"' type='reset'>"+"</p>")
  $("#board2").append("<div class='right"+i+"'>" +i+":50時 讀完了：{{whatYouRead"+i+"}}"+"</div>")
  $(".right"+i).css("color", "rgb("+i+","+i*10+","+i*20+")")
  $(".right"+i).css("position", "fixed")  
  $(".right"+i).css("right", "10%")
  $(".right"+i).css("transform", "translate(0,-40px)")
  // $("#board").append("<p>"+i+"pm - "+i+":50 "+"<textarea rows='3' placeholder='下午讀了哪些呢'></textarea>"+"</p>")
}

var mydata={
  whatYouRead11: "認",
  whatYouRead12: "真"
}
var vm=new Vue({
  el: "#board",
  data: mydata
})

var mydata2={
  whatYouRead1: "看",
  whatYouRead2: "書",
  whatYouRead3: "的",
  whatYouRead4: "男",
  whatYouRead5: "孩",
  whatYouRead6: "最",
  whatYouRead7: "帥",
  whatYouRead8: "了",
  whatYouRead9: "哦",
}
var vm=new Vue({
  el: "#board2",
  data: mydata2
})


$("#"+1).click(function(){
  mydata2.whatYouRead1 = ""
})
$("#"+2).click(function(){
  mydata2.whatYouRead2 = ""
})
$("#"+3).click(function(){
  mydata2.whatYouRead3 = ""
})
$("#"+4).click(function(){
  mydata2.whatYouRead4 = ""
})
$("#"+5).click(function(){
  mydata2.whatYouRead5 = ""
})
$("#"+6).click(function(){
  mydata2.whatYouRead6 = ""
})
$("#"+7).click(function(){
  mydata2.whatYouRead7 = ""
})
$("#"+8).click(function(){
  mydata2.whatYouRead8 = ""
})
$("#"+11).click(function(){
  mydata.whatYouRead11 = ""
})
$("#"+12).click(function(){
  mydata.whatYouRead12 = ""
})
