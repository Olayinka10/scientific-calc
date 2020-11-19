var a = document.getElementById('history');
var b = document.getElementById('output');
var c = a * Math.PI/180;
var val1 = '';
var val2 = '';
power = ''
var on = false

//val1 is collecting all the special characters like square root, raised to power, sin, cos etc.
//val2 is collecting result got from val1
function math(e){
 a.value +=e
 if(e == 'cos' || e == 'sin' ||
  e == 'tan' || e =='√' || e == '^' ||
  e == 'log' ){
    val1 = e
  }else{
    val2 +=e
  }
}

function equall(){
  if (val1 == 'sin') {
    b.value = Math.sin(val2 * Math.PI/180).toFixed(3)
  } 
  else if (val1 == 'cos') {
    b.value = Math.cos(val2 * Math.PI/180).toFixed(3)    
  }
  else if (val1 == 'tan') {
    b.value = Math.tan(val2 * Math.PI/180).toFixed(3)    
  }
  
  else if (val1 ==  '√') {
    b.value = Math.sqrt(val2)    
  }

  else if (val1 ==  'log') {
    b.value = Math.sqrt(val2)    
  }

        else if (val1 == '^') {
          b.value = Math.pow(a.value)    
        }
  
  else {
    b.value = eval(a.value)
  }
}

function ac(){
val1 =''
val2 = ''
a.value =''
b.value =''
}

function dele(){
  val1 =a.value.slice(0, -1)
  val2 = a.value.slice(0, -1)
  a.value = a.value.slice(0, -1)
  b.value =''
  }

function upDateClock(){
  var now = new Date();
  var hours = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var tod = '';
    
  if(minute < 10){
    minute = '0' + minute;
  }
  else{
    minute = minute ;
  }
  
  if(second < 10){
    second = '0' + second;
  }
  else{
    second = second ;
  }

  if (hours < 12) {
    tod = "AM"
  }
  else {
    tod = "PM";
  }

  if (hours == '0') {
    hours = 12;
  }
  else {
    hours = hours;
  }
  var time = hours + ":" + minute + ":" + second + " " + tod;
 document.getElementById('time').value = time;
};
upDateClock();
setInterval('upDateClock()', 1000)
