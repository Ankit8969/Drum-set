

// on key press

for(i=0;i<7;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function(){
    var x=this.innerText;
    buzzer(x);
  });
}

// on keyboard press

document.addEventListener("keypress",function(event){
  buzzer(event.key);
});


function buzzer(x)
{
   if(x=='W')
   {
     var audio=new Audio('crash.mp3');
     audio.play();
   }
   else if(x=='A')
   {
     var audio=new Audio('tom-2.mp3');
     audio.play();
   }
   else if(x=='S')
   {
     var audio=new Audio('tom-1.mp3');
     audio.play();
   }
   else if(x=='D')
   {
     var audio=new Audio('kick-bass.mp3');
     audio.play();
   }
   else if(x=='J')
   {
     var audio=new Audio('tom-3.mp3');
     audio.play();
   }
   else if(x=='K')
   {
     var audio=new Audio('tom-4.mp3');
     audio.play();
   }
   else
   {
     var audio=new Audio('snare.mp3');
     audio.play();
   }
}
