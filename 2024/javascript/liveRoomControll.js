// this is for 2024
function getDayOfWeekNumber() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
    return dayOfWeek;
  }
 
function getTimeSlot() {
    const currentDate = new Date();
    const hourx = currentDate.getHours();  
    if (hourx >= 8 && hourx < 18) {
      return Math.max(0, hourx - 9); // 8am  = , 9am = 1 .... 9
    } else {
      return 10;
    }
  }

function getDayName(dayIndex) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayIndex] || "Invalid day";
}

function getTimeName(timeIndex) {
    const hourstext = ["8:00 AM-8:50 AM","9:00 AM-9:50 AM","10:00 AM-10:50 AM", "11:00 AM-11:50 AM", "12:00 PM-12:50 PM", "1:00 PM-1:50 PM", "2:00 PM-2:50 PM", "3:00 PM-3:50 PM", "4:00 PM-4:50 PM", "5:00 PM-5:50 PM"];
    return hourstext[timeIndex] || "Invalid Time";
}

//sun 0 , mon 1 ....
let day = 0;
let hour = 0;
let room = 0;
let floor = 0;
let dayname ="";

//Day and hour auto update and title show text from upper functions
day = getDayOfWeekNumber();
hour = getTimeSlot();
document.getElementById("nowDay").innerText = getDayName(day)
document.getElementById("nowHour").innerText = getTimeName(hour)


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
    document.getElementById("nowHour").innerText ="12:00-12:50PM";
    hour = 4;
    roomShow(day, hour);
} 

document.getElementById("btn1").onclick = function(){
    document.getElementById("nowHour").innerText ="1:00-1:50PM";
    hour = 5;
    roomShow(day, hour);
} 

document.getElementById("btn2").onclick = function(){
    document.getElementById("nowHour").innerText ="2:00-2:50PM";
    hour = 6;
    roomShow(day, hour);
} 

document.getElementById("btn3").onclick = function(){
    document.getElementById("nowHour").innerText ="3:00-3:50PM";
    hour = 7;
    roomShow(day, hour);
} 

document.getElementById("btn4").onclick = function(){
    document.getElementById("nowHour").innerText ="4:00-4:50PM";
    hour = 8;
    roomShow(day, hour);
}

document.getElementById("btn5").onclick = function(){
    document.getElementById("nowHour").innerText ="5:00-5:50PM";
    hour = 9;
    roomShow(day, hour);
}
 

function roomShow(day, hour){

    const roomInfo = [
        //start from sunday
            //sunday 0
            [
                [ // Floor 5 room number 5001 5002 5701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 4  room number 5001 5002 5701 
                    ['edte22', 'edte22', 'edte22', 'edte22', 0, 'edte21', 'edte21', 'edte23', 'edte23', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ['edte20b', 'edte20b', 'edte20a', 'edte20a', 0, 'edte22a', 'edte22a', 'edte22b', 'edte22b', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 2 room number 5001 5002 5701 
                    ['edte21', 'edte21', 'edte19', 'edte19', 0, 'edte19', 'edte19', 'edte21', 'edte21', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ['edte20a', 'edte20a', 'edte20b', 'edte20b', 0, 'edte22b', 'edte22b', 'edte22a', 'edte22a', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 1 room number 5001 5002 5701 
                    ['edte23', 'edte23', 'edte23', 'edte23', 0, 'edte20', 'edte20', 'edte20', 'edte20', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            ],

            //Monday 1
            [
                [ // Floor 5 room number 5001 5002 5701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 4 room number 4001 4002 4701 
                    [0, 0, 'edte20', 'edte20', 0, 'edte22', 'edte22', 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 'edte19a', 'edte19a', 0, 'edte22a', 'edte22a', 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 2  room number 2001 2002 2701 
                    ['edte20', 'edte20', 'edte22', 'edte22', 0, 'edte19', 'edte19', 'edte21', 'edte21', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 'edte19b', 'edte19b', 0, 'edte22b', 'edte22b', 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 1  room number 1001 1002 1701 
                    [0, 0, 'edte23', 'edte23', 0, 'edte20', 'edte20', 'edte20', 'edte20', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            ],
            //Tuesday 2
            [
                [ // Floor 5 room number 5001 5002 5701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 4 room number 4001 4002 4701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 2  room number 2001 2002 2701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 1  room number 1001 1002 1701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            ],
            //Wednesday 3
            [
                [ // Floor 5 room number 5001 5002 5701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 4 room number 4001 4002 4701 
                    [0, 0, 'edte22', 'edte22', 0, 'edte22', 'edte22', 'edte23', 'edte23', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ['edte23a', 'edte23a', 'edte23a', 'edte23a', 0, 'edte19b', 'edte19b', 'edte21b', 'edte21b', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 2 2001 2002 2701
                    ['edte21', 'edte21', 'edte19', 'edte19', 0, 'edte21', 'edte21', 'edte19', 'edte19', 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ['edte23b', 'edte23b', 'edte23b', 'edte23b', 0, 'edte19a', 'edte19a', 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 1 1001 1002 1701
                    [0, 0, 0, 0, 0, 'edte23', 'edte23', 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            ],
            //Thursday 4
            [
                [ // Floor 5 room number 5001 5002 5701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 4 room number 4001 4002 4701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 2  room number 2001 2002 2701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ],
                [ // Floor 1  room number 1001 1002 1701 
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ]
            ],
            //Friday 5
            [[
                [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0] //floor 5
            ],[
                [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0] //floor 4
            ],[
                [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0] //floor 2
            ],[
                [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0] //floor 1
            ]],
            //Saturday 6
            [[ // Floor 5  room number 5001 5002 5701 
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  
            ], [ // Floor 4  room number 4001 4002 4701 
                ['edte20', 'edte20', 'edte20', 'edte20', 0, 0, 0, 0, 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ], [// Floor 2  room number 2001 2002 2701
                ['edte21', 'edte21', 'edte21', 'edte21', 0, 'edte21', 'edte21', 0, 0], 
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   
            ], [// Floor 1  room number 1001 1002 1701
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],  
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]   
            ]]
      ];

    //floor 5 index 0  
   

    //[day][floor][room][hour]
    if (roomInfo[day][0][0][hour] === 0) {
        R5001.style.backgroundColor = "green";
        const paragraph = document.getElementById("R5001p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    } else {
        R5001.style.backgroundColor = "red";
        const paragraph = document.getElementById("R5001p");
        paragraph.innerText = roomInfo[day][0][0][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][0][1][hour]== 0){
        R5002.style.backgroundColor = "green";
        const paragraph = document.getElementById("R5002p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R5002.style.backgroundColor = "red";
        const paragraph = document.getElementById("R5002p");
        paragraph.innerText = roomInfo[day][0][1][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][0][2][hour]== 0){
        L5003.style.backgroundColor = "green";
        const paragraph = document.getElementById("L5003p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        L5003.style.backgroundColor = "red";
        const paragraph = document.getElementById("L5003p");
        paragraph.innerText = roomInfo[day][0][2][hour]; // Display the value if it's not 0
    }


//floor 4 index 1  
   

    //[day][floor][room][hour]
    if(roomInfo[day][1][0][hour]== 0){
        R4001.style.backgroundColor = "green";
        const paragraph = document.getElementById("R4001p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R4001.style.backgroundColor = "red";
        const paragraph = document.getElementById("R4001p");
        paragraph.innerText = roomInfo[day][1][0][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][1][1][hour]== 0){
        R4002.style.backgroundColor = "green";
        const paragraph = document.getElementById("R4002p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R4002.style.backgroundColor = "red";
        const paragraph = document.getElementById("R4002p");
        paragraph.innerText = roomInfo[day][1][1][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][1][2][hour]== 0){
        L4701.style.backgroundColor = "green";
        const paragraph = document.getElementById("L4701p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        L4701.style.backgroundColor = "red";
        const paragraph = document.getElementById("L4701p");
        paragraph.innerText = roomInfo[day][1][2][hour]; // Display the value if it's not 0
    }



//floor 2 index 2  
   

    //[day][floor][room][hour]
    if(roomInfo[day][2][0][hour]== 0){
        R2001.style.backgroundColor = "green";
        const paragraph = document.getElementById("R2001p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R2001.style.backgroundColor = "red";
        const paragraph = document.getElementById("R2001p");
        paragraph.innerText = roomInfo[day][2][0][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][2][1][hour]== 0){
        R2002.style.backgroundColor = "green";
        const paragraph = document.getElementById("R2002p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R2002.style.backgroundColor = "red";
        const paragraph = document.getElementById("R2002p");
        paragraph.innerText = roomInfo[day][2][1][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][2][2][hour]== 0){
        L2701.style.backgroundColor = "green";
        const paragraph = document.getElementById("L2701p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        L2701.style.backgroundColor = "red";
        const paragraph = document.getElementById("L2701p");
        paragraph.innerText = roomInfo[day][2][2][hour]; // Display the value if it's not 0
    }

//floor 1 index 3 
   

    //[day][floor][room][hour]
    if(roomInfo[day][3][0][hour]== 0){
        R1001.style.backgroundColor = "green";
        const paragraph = document.getElementById("R1001p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R1001.style.backgroundColor = "red";
        const paragraph = document.getElementById("R1001p");
        paragraph.innerText = roomInfo[day][3][0][hour]; // Display the value if it's not 0
    }

    if(roomInfo[day][3][1][hour]== 0){
        R1002.style.backgroundColor = "green";
        const paragraph = document.getElementById("R1002p");
        paragraph.innerText = "Empty"; // Clear the paragraph text if the value is 0
    }else{
        R1002.style.backgroundColor = "red";
        const paragraph = document.getElementById("R1002p");
        paragraph.innerText = roomInfo[day][3][1][hour]; // Display the value if it's not 0
    }
 


    
    selectShowButton(day, hour);
    

 }

 roomShow(day, hour);

 selectShowButton(day, hour);

//select but it will be red if next another button it will be green
function selectShowButton(day, hour){
    // Array of day elements in order (Sunday = 0, Monday = 1, ..., Saturday = 6)
    const days = [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday];
    days.forEach(day => day.style.backgroundColor = "green");
    if (day >= 0 && day < days.length) {
        days[day].style.backgroundColor = "red";
    }

    // Array of button elements in the order of their hours
    const buttons = [btn8, btn9, btn10, btn11, btn12, btn1, btn2, btn3, btn4, btn5];
    buttons.forEach(button => button.style.backgroundColor = "green");
    if (hour >= 0 && hour < buttons.length) {
        buttons[hour].style.backgroundColor = "red";
    }

 }