
var input_field = document.getElementById('input-field');
var word = document.getElementById('word');
var score = 0;
var counter = 5;
var time_counter = document.getElementById('time-counter');
var myscore = document.getElementById('score');
var gameover_msg= document.getElementById('gameover-msg');
time_counter.innerHTML = counter;

var words = ['sumit','amit','belongs','programming','javascript','compatibility','akshat','simran','opportunity','academics','suraj','learning','develop','actual','java','python','mirror','cable','luggage','blanket','laptop','desktop','qwerty','keypad','android','lenovo','register','processor','conditioner','football'];
   
word.innerHTML = words[(Math.trunc(Math.random()*100))%30];
 input_field.onkeyup = function(){
      if(word.innerHTML == input_field.value)
      {
          counter = 6;
          score += 1;
          input_field.value = '';
          word.innerHTML = words[(Math.trunc(Math.random()*100))%30]
      }
 }


var counterid = setInterval(function(){
   
    counter -= 1;
    time_counter.innerHTML = counter;
    
      if(counter == 0)
      {
        
          clearInterval(counterid);
          time_counter.innerHTML = counter;
          myscore.innerHTML = score;
          gameover_msg.style.opacity = 1;
          input_field.value = '';
      }
 },1000)





