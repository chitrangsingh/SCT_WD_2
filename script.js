let play = document.getElementById("playbtn");
let reset = document.getElementById("resetbtn");
let lap = document.getElementById("lapbtn");
// let clear = document.getElementById("clearbtn");

let msec = document.getElementById("msec");
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");

let ul = document.getElementById("lapsi");

let isplay = false;
let isReset = false;

let msec_counter = 0;
let sec_counter = 0;
let min_counter = 0;
let lap_counter = 0;
// let hour_counter = 0;

let Interval1;
let Interval2;
let Interval3;

let clear = document.createElement("button");
clear.innerHTML= "Clear all";
clear.setAttribute("class","clearbtn");
ul.append(clear);
clear.classList.add("hidden");

const playit = ()=>{
    if(!isplay && !isReset){

    reset.classList.remove("hidden");
    lap.classList.remove("hidden");
    play.innerHTML = "Pause";
    isplay = true;
    isReset = true;

    Interval1 = setInterval(()=>{
        if(min_counter === 60){
            min_counter = 0;
            }
            min.innerHTML =  ` ${++min_counter}&nbsp;&nbsp;&nbsp;&nbsp;:`;
    }, 1000*60);
     Interval2 = setInterval(()=>{
        if(sec_counter === 60){
            sec_counter = 0;
            }
            sec.innerHTML =  `${++sec_counter}&nbsp;&nbsp;&nbsp;&nbsp;: `;
    }, 1000);
     Interval3 = setInterval(()=>{
        if(msec_counter === 100){
            msec_counter = 0;
            }
            msec.innerHTML =  `${++msec_counter}&nbsp;`;
    }, 10);

}
else{
    play.innerHTML = "Play";
    isplay = false;
    isReset = false;
    clearInterval(Interval1);
    clearInterval(Interval2);
    clearInterval(Interval3);
}
}

const resetit = () => {
    playit();
    isReset = false;
    if (isplay || !isplay) {
        play.innerHTML = "Play";
        isplay = false;
        clearInterval(Interval1);

        clearInterval(Interval2);

        clearInterval(Interval3);

        msec_counter = 0;
        sec_counter = 0;
        min_counter = 0;

        reset.classList.add("hidden");
        lap.classList.add("hidden");
        min.innerHTML = "0&nbsp;&nbsp;&nbsp;&nbsp;:";
        sec.innerHTML = "0&nbsp;&nbsp;&nbsp;&nbsp;:";
        msec.innerHTML = "0&nbsp;";

        ul.innerHTML = "";
        lap_counter = 0;
        ul.append(clear);
        clear.classList.add("hidden");
    }

}

const laps = ()=>{
    let li = document.createElement("li");
    let number = document.createElement("span");
    let time_stamp = document.createElement("span");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    time_stamp.setAttribute("class","time_stamp");

    number.innerHTML = `#${++lap_counter}`;
    time_stamp.innerHTML = ` ${min_counter}   :   ${sec_counter}   :   ${msec_counter} `;

    li.append(number,time_stamp);
    ul.append(li);
    clear.classList.remove("hidden");
}
const clearall = ()=>{
    ul.innerHTML = "";
    lap_counter = 0;
    ul.append(clear);
    clear.classList.add("hidden");
}

play.addEventListener('click',playit);
reset.addEventListener('click',resetit);
lap.addEventListener('click',laps);
clear.addEventListener('click',clearall);