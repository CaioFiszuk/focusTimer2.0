export function Timer({
    minutesDisplay,
    secondsDisplay,
})
{
   let timerTimeOut;
   let minutes = Number(minutesDisplay.textContent);

   function countdown(){
    timerTimeOut = setTimeout(()=>{
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        if(minutes <=0){
            updateDisplay(minutes, 0);
            return;
        }

        if(seconds <= 0){
            seconds = 60;
            minutes--;
        }

        updateDisplay(minutes, seconds-1);

        countdown();
    }, 1000);
   }

   function updateDisplay(minutes, seconds){
      minutesDisplay.textContent = String(minutes).padStart(2, "0");
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
   }

   function increase(){
    let minutes = Number(minutesDisplay.textContent);
    updateDisplay(minutes+5, 0);
}

   function decrease(){
    let minutes = Number(minutesDisplay.textContent);

    if(minutes > 0){
        updateDisplay(minutes-5, 0);
    }else{
        updateDisplay(0, 0);
    }
    
   }

   function stop(){
      updateDisplay(minutes, 0);
      clearTimeout(timerTimeOut);
   }

   return{
    countdown,
    stop,
    increase,
    decrease,
   }
}