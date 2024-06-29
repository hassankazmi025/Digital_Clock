// const clock = document.getElementById('clock')


// setInterval(function() {

//     let date = new Date()
//     clock.innerHTML = date.toLocaleTimeString()
// }, 1000)
const timeNow=document.getElementById('timeNow')
// timeNow.innerHTML='change'

const btnStart=document.querySelector("#start");
const btnStop=document.querySelector('#stop');
let intervalId= null;


const timeChange = function(){
    const time = new Date()
    console.log(time.toLocaleTimeString())
          timeNow.innerHTML= time.toLocaleTimeString()
}

// const timeStart=setInterval(timeChange,1000)
 btnStart.addEventListener('click',function(){
    if(intervalId === null){

        intervalId= setInterval(timeChange,1000)
    }
});

btnStop.addEventListener('click', function(){
    clearInterval(intervalId)
    intervalId = null;
})
