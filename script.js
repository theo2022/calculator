function dis(val){
  document.getElementById("edu").value+=val;
}
function solve(){
  let x = document.getElementById("edu").value;
  let y = eval(x);
  document.getElementById("edu").value=y;
  
}
function clr(){
  document.getElementById("edu").value="";
}
$(document).ready(function(){
  $("button").css({
    "background-color":"#58595b",
    "padding":"15px",
    "font-size":"20px"
  })
 
$(document).on("keyup",function (event){
  
  if(event.keyCode===49){
    dis('1');
  }
  if(event.keyCode===50){
    dis('2');
  }if(event.keyCode===51){
    dis('3');
  }if(event.keyCode===52){
    dis('4');
  }if(event.keyCode===53){
    dis('5');
  }if(event.keyCode===54){
    dis('6');
  }if(event.keyCode===55){
    dis('7');
  }if(event.keyCode===56){
    dis('8');
  }if(event.keyCode===57){
    dis('9');
  }
  if(event.keyCode===170){
    dis('*');
  }
})
})
