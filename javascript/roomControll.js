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
            //room number 5001 5002 701 
            [[
                [0,1,1,1,1,0,1,1,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [1,1,0,1,1,0,0,1,1],[1,1,1,1,0,1,1,0,0],[1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,1,1,0,0,1,1,1,1],[1,1,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [1,1,1,1,0,0,1,1,0],[0,0,0,0,0,1,1,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],

            //Monday 1
            [[
                [1,1,0,1,1,0,1,1,0],[1,1,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,1,1,0,1,1,1,1],[0,0,0,1,1,0,1,1,0],[1,1,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [1,1,0,0,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[1,1,1,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [1,1,1,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Tuesday 2
            [[
                [1,1,1,1,0,1,1,0,0],[0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [1,1,1,1,0,0,0,1,1],[1,1,1,1,0,1,1,0,0],[1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [1,1,0,1,1,0,0,1,1],[1,1,0,0,1,1,0,0,0],[1,1,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,1,1,0,0,1,1,0],[1,1,1,1,0,1,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Wednesday 3
            [[
                [1,1,0,1,1,0,1,1,0],[1,1,1,1,0,1,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [1,1,0,0,0,1,1,0,0],[1,1,1,1,0,1,1,1,1],[0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [1,1,1,1,0,1,1,0,0],[1,1,1,1,0,1,1,1,1],[0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [1,1,1,1,0,0,0,0,0],[1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Thursday 4
            [[
                [0,0,1,1,0,0,0,0,0],[1,1,0,0,0,1,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [1,1,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,1,1],[1,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,1,1,0,0,0,0,0],[0,0,0,1,1,0,0,0,0],[0,0,0,0,0,0,0,1,1],[0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,1,1,0,0,0,0],[1,1,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //floor 1
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

    if(roomInfo[day][0][1][hour]== 0){
        R5002.style.backgroundColor = "green";
    }else{
        R5002.style.backgroundColor = "red";
    }

    if(roomInfo[day][0][2][hour]== 0){
        L5003.style.backgroundColor = "green";
    }else{
        L5003.style.backgroundColor = "red";
    }


//floor 4 index 1  
   

    //[day][floor][room][hour]
    if(roomInfo[day][1][0][hour]== 0){
        R4001.style.backgroundColor = "green";
    }else{
        R4001.style.backgroundColor = "red";
    }

    if(roomInfo[day][1][1][hour]== 0){
        R4002.style.backgroundColor = "green";
    }else{
        R4002.style.backgroundColor = "red";
    }

    if(roomInfo[day][1][2][hour]== 0){
        L4701.style.backgroundColor = "green";
    }else{
        L4701.style.backgroundColor = "red";
    }



//floor 2 index 2  
   

    //[day][floor][room][hour]
    if(roomInfo[day][2][0][hour]== 0){
        R2001.style.backgroundColor = "green";
    }else{
        R2001.style.backgroundColor = "red";
    }

    if(roomInfo[day][2][1][hour]== 0){
        R2002.style.backgroundColor = "green";
    }else{
        R2002.style.backgroundColor = "red";
    }

    if(roomInfo[day][2][2][hour]== 0){
        L2701.style.backgroundColor = "green";
    }else{
        L2701.style.backgroundColor = "red";
    }

//floor 1 index 3 
   

    //[day][floor][room][hour]
    if(roomInfo[day][3][0][hour]== 0){
        R1001.style.backgroundColor = "green";
    }else{
        R1001.style.backgroundColor = "red";
    }

    if(roomInfo[day][3][1][hour]== 0){
        R1002.style.backgroundColor = "green";
    }else{
        R1002.style.backgroundColor = "red";
    }
 


    
    selectShowButton(day, hour);
    

 }

 roomShow(day, hour);

 selectShowButton(day, hour);

//select but it will be red if next another button it will be green
 function selectShowButton(day, hour){


    Saturday.style.backgroundColor = "green";
    Sunday.style.backgroundColor = "green"; 
    Monday.style.backgroundColor = "green"; 
    Tuesday.style.backgroundColor = "green";
    Wednesday.style.backgroundColor = "green";
    Thursday.style.backgroundColor = "green";
    Friday.style.backgroundColor = "green";
        if(day==6)
        Saturday.style.backgroundColor = "red"; 
        if(day==0)
        Sunday.style.backgroundColor = "red"; 
        if(day==1)
        Monday.style.backgroundColor = "red"; 
        if(day==2)
        Tuesday.style.backgroundColor = "red"; 
        if(day==3)
        Wednesday.style.backgroundColor = "red"; 
        if(day==4)
        Thursday.style.backgroundColor = "red"; 
       if(day==5)
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

     if(hour == 0)
     btn8.style.backgroundColor = "red";
     if(hour == 1)
     btn9.style.backgroundColor = "red";
     if(hour == 2)
     btn10.style.backgroundColor = "red";
     if(hour == 3)
     btn11.style.backgroundColor = "red";
     if(hour == 4)
     btn12.style.backgroundColor = "red";
     if(hour == 5)
     btn1.style.backgroundColor = "red";
     if(hour == 6)
     btn2.style.backgroundColor = "red";
     if(hour == 7)
     btn3.style.backgroundColor = "red";
     if(hour == 8)
     btn4.style.backgroundColor = "red";
     

 }