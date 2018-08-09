
var input_field = document.getElementById('input-field');
var word = document.getElementById('word');
var score = 0;
var counter = 5;
var time_counter = document.getElementById('time-counter');
var myscore = document.getElementById('score');
var gameover_msg= document.getElementById('gameover-msg');
time_counter.innerHTML = counter;
var alphabets = 'abcdefghijklmnopqrstuvwxyz';
var myword = '';
var wordLength = 5;
    for(var i=0 ; i<wordLength ; i++)
    {
        myword += alphabets.charAt((Math.trunc(Math.random()*100))%26);
    }
     word.innerHTML = myword;

 input_field.onkeyup = function(){
      if(word.innerHTML == input_field.value)
      {
          myword = '';
          counter = 6;
          score += 1;
          input_field.value = '';
         for(var i=0 ; i<wordLength ; i++)
          {
        myword += alphabets.charAt((Math.trunc(Math.random()*100))%26);
          }
          word.innerHTML = myword;
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





