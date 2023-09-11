const batchInfo = [
    //start from sunday

    //sunday 0
    //Batch class Condition B-1 || B-2 || B-3 || B-4 || B-5 
    [[
        [1, 1, 0, 1, 1, 1, 0, 2, 2], [1, 1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1, 0], [0, 1, 1, 0, 0, 1, 1, 0, 0,], [1, 1, 1, 1, 0, 0, 1, 1, 0] //EdTech
    ], [
        [1, 1, 1, 1, 0, 0, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 0], [1, 1, 1, 1, 0, 1, 1, 0, 0] //IRE
    ]],

    //Monday 1
    [[
        [1, 1, 1, 0, 1, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 2, 2], [1, 1, 0, 1, 1, 0, 1, 1, 1], [1, 1, 0, 1, 1, 0, 0, 1, 1], [1, 1, 1, 1, 0, 0, 1, 1, 0] //EdTech
    ], [
        [1, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0, 0] //IRE
    ]],
    //Tuesday 2
    [[
        [1, 1, 1, 0, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 2, 2], [1, 1, 1, 1, 2, 2, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 1, 1], [0, 0, 1, 1, 0, 0, 1, 1, 0] //EdTech
    ], [
        [1, 1, 0, 0, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 0, 0], [1, 1, 1, 1, 0, 1, 1, 1, 1] //IRE
    ]],
    //Wednesday 3
    [[
        [1, 1, 0, 0, 1, 1, 1, 1, 0], [1, 1, 1, 0, 0, 1, 1, 1, 1], [1, 1, 0, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0, 0] //EdTech
    ], [
        [0, 0, 1, 1, 0, 1, 1, 0, 0], [1, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 0, 0] //IRE
    ]],
    //Thursday 4
    [[
        [0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 0, 0, 0, 0, 0, 2, 2], [0, 0, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 1, 1] //EdTech
    ], [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0, 0] //IRE
    ]],
    //Friday 5
    [[
        [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] //EdTech
    ], [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] //IRE
    ]],
    //Saturday 6
    [[
        [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] //EdTech
    ], [
        [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0] //IRE
    ]]

];
//==========================
function getDayOfWeekNumber() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
    return dayOfWeek;
  }
 

function getTimeSlot() {
    const currentDate = new Date();
    const hourx = currentDate.getHours();
  
    if (hourx >= 8 && hourx < 17) {
      return Math.max(0, hourx - 8);
    } else {
      return 10;
    }
  }

 

//sun 0 , mon 1 ....
//dept Edtech 0, IRE 1
let day = 0;
let hour = 0;
let dept = 0;
let batch = 0;
let dayname = "";

//slect day
document.getElementById("nowCondition").onclick = function () {
    document.getElementById("nowDay").innerText = "Today";
    document.getElementById("nowHour").innerText = new Date();
    //day and hour auto update
    day = getDayOfWeekNumber();
    hour = getTimeSlot();
    if(hour==10){
        document.getElementById("nowHour").innerText = "University Closed";
    } 
        batchConditionMain(day, hour);
        nowCondition.style.backgroundColor = "red";
     
}

document.getElementById("Saturday").onclick = function () {
    document.getElementById("nowDay").innerText = "Saturday";
    day = 6;
    batchConditionMain(day, hour);
}

document.getElementById("Sunday").onclick = function () {
    document.getElementById("nowDay").innerText = "Sunday";
    day = 0;
    batchConditionMain(day, hour);
}

document.getElementById("Monday").onclick = function () {
    document.getElementById("nowDay").innerText = "Monday";
    day = 1;
    batchConditionMain(day, hour);
}

document.getElementById("Tuesday").onclick = function () {
    document.getElementById("nowDay").innerText = "Tuesday";
    day = 2;
    batchConditionMain(day, hour);
}

document.getElementById("Wednesday").onclick = function () {
    document.getElementById("nowDay").innerText = "Wednesday";
    day = 3;
    batchConditionMain(day, hour);
}

document.getElementById("Thursday").onclick = function () {
    document.getElementById("nowDay").innerText = "Thursday";
    day = 4;
    batchConditionMain(day, hour);
}

document.getElementById("Friday").onclick = function () {
    document.getElementById("nowDay").innerText = "Friday";
    day = 5;
    batchConditionMain(day, hour);
}

//select hour
document.getElementById("btn8").onclick = function () {
    document.getElementById("nowHour").innerText = "8:00-8:50AM";
    hour = 0;
    batchConditionMain(day, hour);
}

document.getElementById("btn9").onclick = function () {
    document.getElementById("nowHour").innerText = "9:00-9:50AM";
    hour = 1;
    batchConditionMain(day, hour);
}

document.getElementById("btn10").onclick = function () {
    document.getElementById("nowHour").innerText = "10:00-10:50AM";
    hour = 2;
    batchConditionMain(day, hour);
}

document.getElementById("btn11").onclick = function () {
    document.getElementById("nowHour").innerText = "11:00-11:50AM";
    hour = 3;
    batchConditionMain(day, hour);
}

document.getElementById("btn12").onclick = function () {
    document.getElementById("nowHour").innerText = "12:00-12:50AM";
    hour = 4;
    batchConditionMain(day, hour);
}

document.getElementById("btn1").onclick = function () {
    document.getElementById("nowHour").innerText = "1:00-1:50AM";
    hour = 5;
    batchConditionMain(day, hour);
}

document.getElementById("btn2").onclick = function () {
    document.getElementById("nowHour").innerText = "2:00-2:50AM";
    hour = 6;
    batchConditionMain(day, hour);
}

document.getElementById("btn3").onclick = function () {
    document.getElementById("nowHour").innerText = "3:00-3:50AM";
    hour = 7;
    batchConditionMain(day, hour);
}

document.getElementById("btn4").onclick = function () {
    document.getElementById("nowHour").innerText = "4:00-4:50AM";
    hour = 8;
    batchConditionMain(day, hour);
}


//selected day and hour button will be red other will be green
function selectedButton(day, hour) {

    nowCondition.style.backgroundColor = "green";
    Saturday.style.backgroundColor = "green";
    Sunday.style.backgroundColor = "green";
    Monday.style.backgroundColor = "green";
    Tuesday.style.backgroundColor = "green";
    Wednesday.style.backgroundColor = "green";
    Thursday.style.backgroundColor = "green";
    Friday.style.backgroundColor = "green";
        
    if (day == 6)
        Saturday.style.backgroundColor = "red";
    if (day == 0)
        Sunday.style.backgroundColor = "red";
    if (day == 1)
        Monday.style.backgroundColor = "red";
    if (day == 2)
        Tuesday.style.backgroundColor = "red";
    if (day == 3)
        Wednesday.style.backgroundColor = "red";
    if (day == 4)
        Thursday.style.backgroundColor = "red";
    if (day == 5)
        Friday.style.backgroundColor = "red";
    //for time button
    btn8.style.backgroundColor = "green";
    btn9.style.backgroundColor = "green";
    btn10.style.backgroundColor = "green";
    btn11.style.backgroundColor = "green";
    btn12.style.backgroundColor = "green";
    btn1.style.backgroundColor = "green";
    btn2.style.backgroundColor = "green";
    btn3.style.backgroundColor = "green";
    btn4.style.backgroundColor = "green";

    if (hour == 0)
        btn8.style.backgroundColor = "red";
    if (hour == 1)
        btn9.style.backgroundColor = "red";
    if (hour == 2)
        btn10.style.backgroundColor = "red";
    if (hour == 3)
        btn11.style.backgroundColor = "red";
    if (hour == 4)
        btn12.style.backgroundColor = "red";
    if (hour == 5)
        btn1.style.backgroundColor = "red";
    if (hour == 6)
        btn2.style.backgroundColor = "red";
    if (hour == 7)
        btn3.style.backgroundColor = "red";
    if (hour == 8)
        btn4.style.backgroundColor = "red";

}

//for empty green, teaching red, online blue ,batch condition

function singleBatchCondition(batchIdName, day, dept, batch, hour) {
    if (batchInfo[day][dept][batch][hour] == 0) {
        batchIdName.style.backgroundColor = "green";
    } else if (batchInfo[day][dept][batch][hour] == 1) {
        batchIdName.style.backgroundColor = "red";
    } else if(batchInfo[day][dept][batch][hour] == 2){
        batchIdName.style.backgroundColor = "blue";
    }else{
        batchIdName.style.backgroundColor ="#1e7070";
    }
}

function batchConditionMain(day, hour) {
    //This batchConditionMain main method
    //batchIdName, [day], [dept],[batch],[hour] => dept EdTech 0 ,IRE index 1  

    singleBatchCondition(EdTech1, day, 0, 0, hour);
    singleBatchCondition(EdTech2, day, 0, 1, hour);
    singleBatchCondition(EdTech3, day, 0, 2, hour);
    singleBatchCondition(EdTech4, day, 0, 3, hour);
    singleBatchCondition(EdTech5, day, 0, 4, hour);

    singleBatchCondition(IRE1, day, 1, 0, hour);
    singleBatchCondition(IRE2, day, 1, 1, hour);
    singleBatchCondition(IRE3, day, 1, 2, hour);
    singleBatchCondition(IRE4, day, 1, 3, hour);
    singleBatchCondition(IRE5, day, 1, 4, hour);

    selectedButton(day, hour);
}

batchConditionMain(day, hour);
 