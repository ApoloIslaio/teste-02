//Contegem regressiva
//Desabilitar form 


//variables
let timer = document.getElementById('timer')
let timer_sec;
let timer_min;
let minutes = 59;
let seconds = 59;
let fieldset = document.getElementById('fieldset')


//functions
regressiveTime()

function regressiveTime(){

  timer_sec = setInterval(setSeconds, 1000);
  timer_min = setInterval(setMinutes, (60*1000));

}

function setSeconds(){
  seconds--;
  if(seconds < 0){
    seconds = 59
  }
  console.log('seconds: ', seconds)
  showTimer()
  disableForm()
}

function setMinutes(){
  minutes--;
  console.log('minutes: ',minutes)
  if(minutes < 0){
    minutes = 59
  }
  showTimer()
  disableForm()
}

function showTimer(){

  if(seconds <= 9){
    if(minutes <= 9){
        timer.innerHTML = '0'+minutes+':0' + seconds;
    }else{
        timer.innerHTML = minutes+':0'+ seconds;
    }
  }
  else if(seconds <= 60){
    if(minutes <= 9 ){
        timer.innerHTML = '0'+minutes+':' + seconds;
    }else{
        timer.innerHTML = minutes+':'+ seconds;
    }
  }
  else {
    console.log('Erro ')
  }
}

function disableForm(){
  if (minutes == 0 && seconds == 0) {
    clearInterval(timer_sec)
    clearInterval(timer_min)
    fieldset.disabled = true
  }
}