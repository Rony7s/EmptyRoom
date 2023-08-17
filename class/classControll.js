//sun 0 , mon 1 ....
let day = 0;
let hour = 0;
let dept = 0;
let batch = 0;
let dayname ="";
 
//slect day
document.getElementById("Saturday").onclick = function(){
    document.getElementById("nowDay").innerText ="Saturday";
    day = 6;
    batchShow(day, hour);
}
 
document.getElementById("Sunday").onclick = function(){
    document.getElementById("nowDay").innerText ="Sunday";
    day = 0;
    batchShow(day, hour);
}

document.getElementById("Monday").onclick = function(){
    document.getElementById("nowDay").innerText ="Monday";
    day = 1;
    batchShow(day, hour);
}

document.getElementById("Tuesday").onclick = function(){
    document.getElementById("nowDay").innerText ="Tuesday";
    day = 2;
    batchShow(day, hour);
} 

document.getElementById("Wednesday").onclick = function(){
    document.getElementById("nowDay").innerText ="Wednesday";
    day = 3;
    batchShow(day, hour);
}

document.getElementById("Thursday").onclick = function(){
    document.getElementById("nowDay").innerText ="Thursday";
    day = 4;
    batchShow(day, hour);
}

document.getElementById("Friday").onclick = function(){
    document.getElementById("nowDay").innerText ="Friday";
    day = 5;
    batchShow(day, hour);
} 

//select hour
document.getElementById("btn8").onclick = function(){
    document.getElementById("nowHour").innerText ="8:00-8:50AM";
    hour = 0;
    batchShow(day, hour);
} 

document.getElementById("btn9").onclick = function(){
    document.getElementById("nowHour").innerText ="9:00-9:50AM";
    hour = 1;
    batchShow(day, hour);
} 

document.getElementById("btn10").onclick = function(){
    document.getElementById("nowHour").innerText ="10:00-10:50AM";
    hour = 2;
    batchShow(day, hour);
} 

document.getElementById("btn11").onclick = function(){
    document.getElementById("nowHour").innerText ="11:00-11:50AM";
    hour = 3;
    batchShow(day, hour);
} 

document.getElementById("btn12").onclick = function(){
    document.getElementById("nowHour").innerText ="12:00-12:50AM";
    hour = 4;
    batchShow(day, hour);
} 

document.getElementById("btn1").onclick = function(){
    document.getElementById("nowHour").innerText ="1:00-1:50AM";
    hour = 5;
    batchShow(day, hour);
} 

document.getElementById("btn2").onclick = function(){
    document.getElementById("nowHour").innerText ="2:00-2:50AM";
    hour = 6;
    batchShow(day, hour);
} 

document.getElementById("btn3").onclick = function(){
    document.getElementById("nowHour").innerText ="3:00-3:50AM";
    hour = 7;
    batchShow(day, hour);
} 

document.getElementById("btn4").onclick = function(){
    document.getElementById("nowHour").innerText ="4:00-4:50AM";
    hour = 8;
    batchShow(day, hour);
} 
 

function batchShow(day, hour){

    const batchInfo = [
        //start from sunday
    
            //sunday 0
            //Batch class Condition B-1 || B-2 || B-3 || B-4 || B-5 
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,1,1,1,0,1,1,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]],

            //Monday 1
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,0,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]],
            //Tuesday 2
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]],
            //Wednesday 3
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[1,1,0,1,1,0,1,1,1],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]],
            //Thursday 4
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]],
            //Friday 5
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]],
            //Saturday 6
            [[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //EdTech
            ],[
                [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0] //IRE
            ]]
        
      ];
    

    //dept EdTech index 0  
   

    //[day][dept][batch][hour]

    if(batchInfo[day][0][0][hour]== 0){
        EdTech1.style.backgroundColor = "green";
    }else{
        EdTech1.style.backgroundColor = "red";
    }

    if(batchInfo[day][0][1][hour]== 0){
        EdTech2.style.backgroundColor = "green";
    }else{
        EdTech2.style.backgroundColor = "red";
    }

    if(batchInfo[day][0][2][hour]== 0){
        EdTech3.style.backgroundColor = "green";
    }else{
        EdTech3.style.backgroundColor = "red";
    }

    if(batchInfo[day][0][3][hour]== 0){
        EdTech4.style.backgroundColor = "green";
    }else{
        EdTech4.style.backgroundColor = "red";
    }

    if(batchInfo[day][0][4][hour]== 0){
        EdTech5.style.backgroundColor = "green";
    }else{
        EdTech5.style.backgroundColor = "red";
    }


//dept IRE index 1  
   

    if (batchInfo[day][1][0][hour] == 0) {
        IRE1.style.backgroundColor = "green";
    } else {
        IRE1.style.backgroundColor = "red";
    }

    if (batchInfo[day][1][1][hour] == 0) {
        IRE2.style.backgroundColor = "green";
    } else {
        IRE2.style.backgroundColor = "red";
    }

    if (batchInfo[day][1][2][hour] == 0) {
        IRE3.style.backgroundColor = "green";
    } else {
        IRE3.style.backgroundColor = "red";
    }

    if (batchInfo[day][1][3][hour] == 0) {
        IRE4.style.backgroundColor = "green";
    } else {
        IRE4.style.backgroundColor = "red";
    }

    if (batchInfo[day][1][4][hour] == 0) {
        IRE5.style.backgroundColor = "green";
    } else {
        IRE5.style.backgroundColor = "red";
    }



    
    selectShowButton(day, hour);
    

 }

 batchShow(day, hour);

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