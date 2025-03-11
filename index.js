const watcher=document.getElementById("stopwatchtimer");
let  timer=null;
 starttime=0;
let elapsedtime=0;
let running=false;
function start(){
    if(!running)
    {
        starttime=Date.now()+elapsedtime;
        timer=setInterval(display,10);
     running=true;

    }
}
function stop(){
    if(running)
        { clearInterval(timer);
          elapsedtime=Date.now()-starttime;
           
         running=false;
    
        }

}
function reset(){
    clearInterval(timer);
    starttime=0;
 elapsedtime=0;
running=false;
watcher.textContent="00:00:00:00"

  
}
function display(){
   const nowtime=Date.now();
   elapsedtime=nowtime-starttime;
   let hours=Math.floor(elapsedtime/(1000*3600));
   let mins=Math.floor((elapsedtime % (1000 * 3600)) / (1000 * 60))
   let secs=Math.floor((elapsedtime % (1000 * 60)) / 1000);
   let misecs=Math.floor((elapsedtime % 1000) / 10);
   hours=String(hours).padStart(2,"0");
   mins=String(mins).padStart(2,"0");
   secs=String(secs).padStart(2,"0");
   misecs=String(misecs).padStart(2,"0");
   
   watcher.textContent=`${hours}:${mins}:${secs}:${misecs}`;

   
}
