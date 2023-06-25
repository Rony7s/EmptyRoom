//sun 0 , mon 1 ....
let day = 0;
let hour = 0;
let room = 0;
let floor = 0;
let dayname ="";
 
//slect day
document.getElementById("Saturday").onclick = function(){
    document.getElementById("nowDay").innerText ="Saturday";
    day = 6;
    roomShow(day, hour);
}
 
document.getElementById("Sunday").onclick = function(){
    document.getElementById("nowDay").innerText ="Sunday";
    day = 0;
    roomShow(day, hour);
}

document.getElementById("Monday").onclick = function(){
    document.getElementById("nowDay").innerText ="Monday";
    day = 1;
    roomShow(day, hour);
}

document.getElementById("Tuesday").onclick = function(){
    document.getElementById("nowDay").innerText ="Tuesday";
    day = 2;
    roomShow(day, hour);
} 

document.getElementById("Wednesday").onclick = function(){
    document.getElementById("nowDay").innerText ="Wednesday";
    day = 3;
    roomShow(day, hour);
}

document.getElementById("Thursday").onclick = function(){
    document.getElementById("nowDay").innerText ="Thursday";
    day = 4;
    roomShow(day, hour);
}

document.getElementById("Friday").onclick = function(){
    document.getElementById("nowDay").innerText ="Friday";
    day = 5;
    roomShow(day, hour);
} 

//select hour
document.getElementById("btn8").onclick = function(){
    document.getElementById("nowHour").innerText ="8:00-8:50AM";
    hour = 0;
    roomShow(day, hour);
} 

document.getElementById("btn9").onclick = function(){
    document.getElementById("nowHour").innerText ="9:00-9:50AM";
    hour = 1;
    roomShow(day, hour);
} 

document.getElementById("btn10").onclick = function(){
    document.getElementById("nowHour").innerText ="10:00-10:50AM";
    hour = 2;
    roomShow(day, hour);
} 

document.getElementById("btn11").onclick = function(){
    document.getElementById("nowHour").innerText ="11:00-11:50AM";
    hour = 3;
    roomShow(day, hour);
} 

document.getElementById("btn12").onclick = function(){
    document.getElementById("nowHour").innerText ="12:00-12:50AM";
    hour = 4;
    roomShow(day, hour);
} 

document.getElementById("btn1").onclick = function(){
    document.getElementById("nowHour").innerText ="1:00-1:50AM";
    hour = 5;
    roomShow(day, hour);
} 

document.getElementById("btn2").onclick = function(){
    document.getElementById("nowHour").innerText ="2:00-2:50AM";
    hour = 6;
    roomShow(day, hour);
} 

document.getElementById("btn3").onclick = function(){
    document.getElementById("nowHour").innerText ="3:00-3:50AM";
    hour = 7;
    roomShow(day, hour);
} 

document.getElementById("btn4").onclick = function(){
    document.getElementById("nowHour").innerText ="4:00-4:50AM";
    hour = 8;
    roomShow(day, hour);
} 
 

function roomShow(day, hour){

    const roomInfo = [
        //start from sunday
    
            //sunday 0
            [[
                [0,0,0,1,1,0,1,1,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],

            //Monday 1
            [[
                [1,1,0,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Tuesday 2
            [[
                [1,1,1,1,0,1,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Wednesday 3
            [[
                [1,1,0,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Thursday 4
            [[
                [0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Friday 5
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Saturday 6
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]]
        
      ];
    //console.log( roomInfo[day-1][hour-1][room-1] );

    //floor 5 index 0  
   

    //[day][floor][room][hour]
    if(roomInfo[day][0][0][hour]== 0){
        R5001.style.backgroundColor = "green";
    }else{
        R5001.style.backgroundColor = "red";
    }

    

 }

 roomShow(day, hour);