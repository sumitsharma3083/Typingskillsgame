
var input_field = document.getElementById('input-field');
var word = document.getElementById('word');
var score = 0;
var counter ;
var time_counter = document.getElementById('time-counter');
var myscore = document.getElementById('score');
var gameover_msg= document.getElementById('gameover-msg');
var alphabets = 'abcdefghijklmnopqrstuvwxyz';
var myword = '';
var wordLength ;
var counter1 ;   

   

var level_overlay = document.querySelector('.level_overlay')
var btn_level = document.querySelectorAll('.level_btn')
var actionBtn  = document.querySelector('.action_btn')




    

  







              
       btn_level.forEach(button => {
           button.addEventListener('click', ()=>{
                var level = button.getAttribute('level')
                   

                   if(level  == 'easy'){
                     
                    wordLength  = 5
                     counter = 5
                   }else if(level == 'medium'){
                   
                    wordLength  = 7
                    counter = 9
                   }else{
                       
                     wordLength = 10
                     counter = 12
                   }

                   level_overlay.style.display = 'none'
                   time_counter.innerHTML = counter;
           })     
       });
 



       
     

              



      
      
      actionBtn.addEventListener('click', ()=>{

              
             if(actionBtn.getAttribute('value') ==  'start'){
                 actionBtn.innerHTML = 'RESET'
                 actionBtn.setAttribute('value', 'reset')

                 counter1 = counter ;
                 for(var i=0 ; i<wordLength ; i++)
                 {
                  word.innerHTML += alphabets.charAt((Math.trunc(Math.random()*100))%26);
                 }

 
                  input_field.onkeyup = function(){
                     myword = input_field.value 
                      

                     if(myword == word.innerHTML){
                          word.innerHTML = ''
                          input_field.value = ''
                          myword =  ''
                          counter1  = counter ;
                      for(var i=0 ; i<wordLength ; i++)
                      {
                       word.innerHTML += alphabets.charAt((Math.trunc(Math.random()*100))%26);
                      }     
                       score += 1 ;
                       myscore.innerHTML = score
                     } 
                   }

                     
                      var myvar = setInterval(() => {
                          counter1 -= 1 ;
                          time_counter.innerHTML = counter1
                          console.log("hello world.")
                          if(counter1 == 0){
                            clearInterval(myvar)
                            gameover_msg.style.opacity = 1
                          }
                      }, 1000);
                          

                    

             }else{
              actionBtn.innerHTML = 'START'
              actionBtn.setAttribute('value', 'start')
                  
                 location.reload();
                
             }

         
   


        //   input_field.onkeyup = function(){
        //     console.log("do something")
        // }

























    //     for(var i=0 ; i<wordLength ; i++)
    //     {
    //         myword += alphabets.charAt((Math.trunc(Math.random()*100))%26);
    //     }
    //      word.innerHTML = myword;
    
    //  input_field.onkeyup = function(){
    //       if(word.innerHTML == input_field.value)
    //       {
    //           myword = '';
    //           counter = 6;
    //           score += 1;
    //           input_field.value = '';
    //          for(var i=0 ; i<wordLength ; i++)
    //           {
    //         myword += alphabets.charAt((Math.trunc(Math.random()*100))%26);
    //           }
    //           word.innerHTML = myword;
    //       }
    //  }
    
    
    // var counterid = setInterval(function(){
       
    //     counter -= 1;
    //     time_counter.innerHTML = counter;
        
    //       if(counter == 0)
    //       {
            
    //           clearInterval(counterid);
    //           time_counter.innerHTML = counter;
    //           myscore.innerHTML = score;
    //           gameover_msg.style.opacity = 1;
    //           input_field.value = '';
    //       }
    //  },1000)
    
      })










